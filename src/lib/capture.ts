import html2canvas from 'html2canvas';

export const captureStage = async (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#f8fafc',
      scale: 2,
      logging: false,
      useCORS: true,
    });
    
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `motormaster-capture-${Date.now()}.png`;
    link.click();
  } catch (error) {
    console.error('Failed to capture stage:', error);
  }
};
