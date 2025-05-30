import { useEffect, useState } from 'react';

export default function LiveBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Replace these with your actual event timings (UTC or local)
    const startDateTime = new Date('2025-05-15T00:00:00'); // Start time
    const endDateTime = new Date('2025-05-17T00:00:00');   // End time
    const now = new Date();

    console.log('Current Time:', now);
    console.log('Start Time:', startDateTime);
    console.log('End Time:', endDateTime);

    if (now >= startDateTime && now <= endDateTime) {
      setIsVisible(true);
    }
  }, []);

  const handleBannerClick = () => {
    // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    const targetElement = document.getElementById('live-stream-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevent triggering the scroll
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="w-full bg-orange-500 text-white flex justify-between items-center p-4 shadow-lg cursor-pointer relative"
      onClick={handleBannerClick}
    >
      <p className="text-md font-medium">
        Live stream of the event has started.<br />
        <span className="font-semibold">Click this banner to watch!</span>
      </p>
      <button
        onClick={handleClose}
        className="text-2xl font-bold bg-red-600 hover:bg-red-700 w-10 h-10 flex items-center justify-center rounded ml-4"
        aria-label="Close banner"
      >
        ✕
      </button>
    </div>
  );
}
