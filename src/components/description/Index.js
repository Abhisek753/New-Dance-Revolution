import React from "react";
import dancerImage from "../../assets/dancer12.jpg"; // Import the dancer image

const DanceDescription = () => {
  return (
    <div id="about" className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between py-8 px-8 mt-4">
      {/* Description Section */}
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-2xl font-bold mb-4 animate-bounce border-red-500 border-b-2 ">Description Heading</h2>
        <p className="text-lg mb-4"> {/* Increased font size with text-lg class */}
          <span className="text-blue-500">Dance</span> is not just an <span className="text-green-500">art form</span>; it's a way of life. At New Dance Revolution, we believe in the transformative power of dance. Our classes cater to dancers of all levels, from beginners to advanced, providing a supportive and inspiring environment for everyone to grow and express themselves.
          With a focus on various dance styles such as <span className="text-yellow-500">ballet</span>, <span className="text-red-500">hip hop</span>, and <span className="text-purple-500">contemporary</span>, our experienced instructors are dedicated to helping you master the techniques while encouraging creativity and self-expression.
          Whether you're looking to improve your skills, stay fit, or simply have fun, our classes offer something for everyone. Join us and discover the joy and passion of dance!
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
        <img src={dancerImage} alt="Dancer" className="w-full h-auto md:float-right rounded-lg" />
      </div>
    </div>
  );
};

export default DanceDescription;
