import React, { useRef, useEffect, useState } from 'react';
import { useDifficulty } from '../context/DifficultyContext';
import { Trash2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRACING_TEMPLATES } from '../constants/templates';
import { TracingTemplate, Point, Difficulty } from '../types';

const TemplatePreview: React.FC<{ template: TracingTemplate }> = ({ template }) => {
  const points = template.points;
  if (points.length === 0) return null;

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + (template.isClosed ? ' Z' : '');

  return (
    <div className="w-full aspect-square bg-slate-50 rounded-2xl mb-3 flex items-center justify-center p-2 group-hover:bg-indigo-50 transition-colors">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <path
          d={pathData}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-300 group-hover:text-indigo-400 transition-colors"
        />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2"
            className="fill-slate-400 group-hover:fill-indigo-500 transition-colors"
          />
        ))}
      </svg>
    </div>
  );
};

const PathTracer: React.FC = () => {
  const { difficulty } = useDifficulty();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TracingTemplate | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const getScaledPoints = (canvas: HTMLCanvasElement, template: TracingTemplate): Point[] => {
    const padding = 60;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    
    return template.points.map(p => ({
      x: padding + (p.x / 100) * width,
      y: padding + (p.y / 100) * height
    }));
  };

  const drawTemplate = (ctx: CanvasRenderingContext2D, template: TracingTemplate) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const points = getScaledPoints(ctx.canvas, template);
    
    // Draw numbered dots
    points.forEach((p, i) => {
      // Small Dot
      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Number
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 20px Inter';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((i + 1).toString(), p.x, p.y - 15);
    });
  };

  useEffect(() => {
    if (!selectedTemplate) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        drawTemplate(ctx, selectedTemplate);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [selectedTemplate]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (!hasStarted && selectedTemplate) {
      setHasStarted(true);
    }
    setIsDrawing(true);
    const pos = getPos(e);
    setLastPos(pos);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const pos = getPos(e);
    ctx.strokeStyle = '#6366f1'; // Indigo for drawing
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    setLastPos(pos);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handleClear = () => {
    setHasStarted(false);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && selectedTemplate) drawTemplate(ctx, selectedTemplate);
  };

  const handleNext = () => {
    if (!selectedTemplate) return;
    const currentIndex = TRACING_TEMPLATES.findIndex(t => t.id === selectedTemplate.id);
    const nextIndex = (currentIndex + 1) % TRACING_TEMPLATES.length;
    setSelectedTemplate(TRACING_TEMPLATES[nextIndex]);
    setHasStarted(false);
  };

  const handlePrevious = () => {
    if (!selectedTemplate) return;
    const currentIndex = TRACING_TEMPLATES.findIndex(t => t.id === selectedTemplate.id);
    const prevIndex = (currentIndex - 1 + TRACING_TEMPLATES.length) % TRACING_TEMPLATES.length;
    setSelectedTemplate(TRACING_TEMPLATES[prevIndex]);
    setHasStarted(false);
  };

  if (!selectedTemplate) {
    const groupedTemplates = TRACING_TEMPLATES.reduce((acc, template) => {
      if (!acc[template.difficulty]) acc[template.difficulty] = [];
      acc[template.difficulty].push(template);
      return acc;
    }, {} as Record<string, TracingTemplate[]>);

    const difficultyOrder: Difficulty[] = ['Easy', 'Medium', 'Hard', 'Complex', 'Expert'];
    const difficultyColors: Record<string, string> = {
      Easy: 'bg-emerald-500',
      Medium: 'bg-blue-500',
      Hard: 'bg-orange-500',
      Complex: 'bg-purple-500',
      Expert: 'bg-rose-500'
    };

    return (
      <div className="h-full flex flex-col p-8 bg-slate-50 overflow-y-auto hide-scrollbar">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Tracing Gallery</h2>
          <p className="text-slate-500 font-medium text-lg">Pick your challenge level and start tracing!</p>
        </div>

        {difficultyOrder.map((diff) => {
          const templates = groupedTemplates[diff];
          if (!templates) return null;

          return (
            <div key={diff} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-10 rounded-full ${difficultyColors[diff]}`}></div>
                <h3 className="text-3xl font-black text-slate-800 tracking-tight">{diff} Challenges</h3>
                <span className="px-4 py-1 bg-white rounded-full text-slate-400 font-bold text-sm shadow-sm border border-slate-100">
                  {templates.length} items
                </span>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 pb-8">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template);
                      setHasStarted(false);
                    }}
                    className="group bg-white p-3 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center border border-slate-100 hover:border-indigo-300 flex flex-col"
                  >
                    <TemplatePreview template={template} />
                    
                    <h3 className="text-[11px] font-black text-slate-800 truncate mb-0.5">{template.name}</h3>
                    <p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter">
                      {template.points.length}pts • {template.category}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-6 gap-6 bg-slate-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedTemplate(null)}
              className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-md hover:bg-slate-50 transition-colors text-slate-600"
              title="Back to Gallery"
            >
              <ArrowLeft size={28} />
            </button>
            <button 
              onClick={handlePrevious}
              className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-md hover:bg-slate-50 transition-colors text-slate-600"
              title="Previous Template"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-md hover:bg-slate-50 transition-colors text-slate-600"
              title="Next Template"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{selectedTemplate.name}</h2>
            <p className="text-slate-500 font-medium">Follow the numbers to finish the {selectedTemplate.category.toLowerCase()}!</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleClear}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-600 font-bold rounded-2xl transition-all active:scale-95 shadow-md border-2 border-slate-100"
          >
            <Trash2 size={24} />
            Reset
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden relative cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full touch-none"
        />
        
      </div>
    </div>
  );
};

export default PathTracer;
