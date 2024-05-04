import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-3 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">New Dance Revolution</h3>
          <p>Phone: 7566998666</p>
        </div>

        {/* Right Section */}
        <div className="col-span-3 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Follow Us Section */}
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <a href="https://www.instagram.com/newdance.revolution123?igshid=dXhtY2xvMnpwOW9x" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:text-blue-500" />
            </a>
            <a href="https://www.youtube.com/@NewDanceRevolutionNDR/videos" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-3xl hover:text-red-500" />
            </a>
          </div>

          {/* Dance Styles */}
          <div>
            <h4 className="font-semibold mb-2">Dance Styles</h4>
            <ul>
              <li><a href="#">Ballet</a></li>
              <li><a href="#">Hip Hop</a></li>
              <li><a href="#">Contemporary</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-semibold mb-2">Classes</h4>
            <ul>
              <li><a href="#">Beginner Classes</a></li>
              <li><a href="#">Intermediate Classes</a></li>
              <li><a href="#">Advanced Classes</a></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-semibold mb-2">Events</h4>
            <ul>
              <li><a href="#">Workshops</a></li>
              <li><a href="#">Competitions</a></li>
              <li><a href="#">Recitals</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul>
              <li><a href="#">Location</a></li>
              <li><a href="#">Contact Form</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
