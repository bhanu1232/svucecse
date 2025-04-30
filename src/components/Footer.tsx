
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iare-darkblue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Contact Us</h3>
            <div className="flex items-start mb-2">
              <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
              <p className='uppercase'>
                Department of CSE SVUCE<br />
                Tirupati - 517502<br />
                Andhra Pradesh, India
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              <p>principal_svuce2003@yahoo.co.in</p>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <p>+91-877-2289561</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/about-us" className="hover:text-iare-yellow transition-colors">About Us</Link></li>
              <li className="mb-2"><Link to="/departments" className="hover:text-iare-yellow transition-colors">Departments</Link></li>
              <li className="mb-2"><Link to="/placements" className="hover:text-iare-yellow transition-colors">Placements</Link></li>
              <li className="mb-2"><Link to="/news" className="hover:text-iare-yellow transition-colors">News</Link></li>
              <li className="mb-2"><Link to="/student-services" className="hover:text-iare-yellow transition-colors">Student Services</Link></li>
              <li className="mb-2"><Link to="/campus-life" className="hover:text-iare-yellow transition-colors">Campus Life</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Location</h3>

            <div className="h-40 bg-gray-700 mb-2 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.489163873453!2d79.39044199678955!3d13.627981799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b3b377b880b%3A0xa2b39b4759aa90ec!2sDepartment%20Of%20Computer%20Science%20And%20Engineering%2CSVUCE!5e0!3m2!1sen!2sin!4v1744093914277!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="IARE Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Department of CSE SVUCE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
