import React, { useEffect, useState } from 'react';

const Naveen = () => {
  const [iframeHeight, setIframeHeight] = useState('812px'); // Default height for desktop or tablet

  useEffect(() => {
    // Adjust iframe height for smaller screens
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIframeHeight('612px'); // Set height for smaller screens (e.g., mobile)
      } else {
        setIframeHeight('812px'); // Set height for desktop or tablet
      }
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" py-8 px-4">
      <div className=" md:mx-auto">
        {/* Heading */}
        <div className="mb-4 justify-center flex flex-col text-center">
          <h2 className="text-2xl font-bold">Naveen Sir</h2>
          <p className="text-lg">Step into the World of Bollywood Dance: Free Dance Steps Mastery with Naveen Sir, Your Guide with Over 15 Years of Experience in the Art of Dance.</p>
        </div>
        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Video 1 */}
          <div className="md:col-span-1">
            <iframe
              width="100%"
              height={iframeHeight}
              src="https://www.instagram.com/p/CjFNC1ZqSE-/embed"
              frameBorder="0"
              allowFullScreen
              title="Instagram Video 1"
            ></iframe>
          </div>
          {/* Video 2 */}
          <div className="md:col-span-1">
            <iframe
              width="100%"
              height={iframeHeight}
              src="https://www.instagram.com/p/CpMqQikg26z/embed"
              frameBorder="0"
              allowFullScreen
              title="Instagram Video 2"
            ></iframe>
          </div>
          {/* Video 3 */}
          <div className="md:col-span-1">
            <iframe
              width="100%"
              height={iframeHeight}
              src="https://www.instagram.com/p/CkCu2KzJEVi/embed"
              frameBorder="0"
              allowFullScreen
              title="Instagram Video 3"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Naveen;
