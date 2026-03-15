import React from 'react';
import { DifficultyProvider } from './context/DifficultyContext';
import PathTracer from './components/PathTracer';
import { Camera } from 'lucide-react';
import { captureStage } from './lib/capture';
import confetti from 'canvas-confetti';

function AppContent() {
  const handleSaveGallery = async () => {
    await captureStage('activity-stage');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const renderActivity = () => {
    return <PathTracer />;
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans select-none">
      {/* Main Stage Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Top Bar / Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-10 z-20">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              MotorMaster <span className="text-indigo-500">Kids</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleSaveGallery}
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-indigo-100"
              title="Save to Gallery"
            >
              <Camera size={20} />
              <span>Save Gallery</span>
            </button>
          </div>
        </header>

        {/* Activity Stage */}
        <div id="activity-stage" className="flex-1 overflow-hidden">
          {renderActivity()}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <DifficultyProvider>
      <AppContent />
    </DifficultyProvider>
  );
}
