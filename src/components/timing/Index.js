import React from 'react';

const DanceClassTimings = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Dance Class Timings</h2>
          <p className="text-lg text-gray-600">Join us for an exciting dance experience!</p>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold mb-2">Morning Session</h3>
              <p className="text-gray-600">Timing: 10:00 AM - 12:00 PM</p>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Evening Session</h3>
              <p className="text-gray-600">Timing: 5:00 PM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DanceClassTimings;
