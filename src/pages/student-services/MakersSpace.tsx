
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const MakersSpace = () => {
  const equipment = [
    { name: "3D Printers", count: 5, description: "Advanced FDM and SLA 3D printers for rapid prototyping" },
    { name: "Laser Cutters", count: 2, description: "Precision laser cutting machines for various materials" },
    { name: "CNC Machines", count: 3, description: "Computer numerical control machines for accurate fabrication" },
    { name: "Electronics Workstations", count: 12, description: "Fully equipped stations with testing instruments" },
    { name: "VR/AR Development Kits", count: 4, description: "Virtual and augmented reality development platforms" },
    { name: "Robotics Kits", count: 15, description: "Educational robotics kits for building and programming robots" },
  ];

  const recentProjects = [
    { title: "Autonomous Delivery Robot", team: "Robotics Club", completion: "March 2025" },
    { title: "Smart Agriculture IoT System", team: "IoT Innovation Team", completion: "February 2025" },
    { title: "Augmented Reality Campus Guide", team: "AR/VR Club", completion: "January 2025" },
    { title: "Solar-Powered Electric Vehicle", team: "EV Enthusiasts", completion: "December 2024" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto flex flex-col md:flex-row my-6 px-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <Sidebar />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="bg-iare-gray p-2 mb-4">
            <nav className="text-sm">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <Link to="/student-services" className="text-iare-blue hover:text-iare-teal">Student Services</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center text-gray-500">Makers Space</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Makers Space</h1>
            
            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">About IARE Makers Space</h2>
              
              <p className="mb-4">
                The IARE Makers Space is a collaborative workspace where students can design, experiment, build, and invent. 
                Equipped with state-of-the-art tools and technologies, this creative hub provides students with the resources 
                to turn their innovative ideas into reality.
              </p>
              
              <p className="mb-4">
                Our Makers Space fosters a culture of hands-on learning, problem-solving, and interdisciplinary collaboration. 
                Students from all departments are encouraged to use this space to work on academic projects, personal innovations, 
                or team competitions.
              </p>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Available Equipment and Technologies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {equipment.map((item, index) => (
                  <div key={index} className="bg-iare-gray p-4 rounded shadow-sm">
                    <h3 className="font-semibold mb-1">{item.name} <span className="text-iare-teal">({item.count})</span></h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Areas of Focus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-iare-lightblue p-4 rounded shadow-sm">
                  <h3 className="font-semibold text-iare-blue mb-2">Product Design & Prototyping</h3>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>CAD modeling</li>
                    <li>3D printing</li>
                    <li>Rapid prototyping</li>
                    <li>Design thinking</li>
                  </ul>
                </div>
                
                <div className="bg-iare-lightblue p-4 rounded shadow-sm">
                  <h3 className="font-semibold text-iare-blue mb-2">Electronics & IoT</h3>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Circuit design</li>
                    <li>Microcontroller programming</li>
                    <li>Sensor integration</li>
                    <li>IoT solutions</li>
                  </ul>
                </div>
                
                <div className="bg-iare-lightblue p-4 rounded shadow-sm">
                  <h3 className="font-semibold text-iare-blue mb-2">Robotics & Automation</h3>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Robot design and construction</li>
                    <li>Automation systems</li>
                    <li>AI and machine learning</li>
                    <li>Computer vision</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Recent Projects</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border rounded">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Project Title</th>
                      <th className="py-2 px-4 text-left">Team</th>
                      <th className="py-2 px-4 text-left">Completion Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map((project, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 border-b">{project.title}</td>
                        <td className="py-2 px-4 border-b">{project.team}</td>
                        <td className="py-2 px-4 border-b">{project.completion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">How to Access</h2>
              
              <div className="border-l-4 border-iare-teal pl-4 mb-6">
                <p className="mb-2"><strong>Opening Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM</p>
                <p className="mb-2"><strong>Location:</strong> Ground Floor, R&D Block</p>
                <p className="mb-2"><strong>Eligibility:</strong> All enrolled IARE students</p>
                <p><strong>Reservation:</strong> Book equipment or workspace through the online portal</p>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Makers Space</h3>
                <p className="mb-1"><strong>Prof. Kiran Kumar</strong></p>
                <p className="mb-1">Coordinator, IARE Makers Space</p>
                <p className="mb-1">Email: makers@iare.ac.in</p>
                <p>Phone: +91-9876543230</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MakersSpace;
