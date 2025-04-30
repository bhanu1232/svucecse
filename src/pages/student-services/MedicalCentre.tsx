
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const MedicalCentre = () => {
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
                <li className="flex items-center text-gray-500">Medical Centre</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Medical Centre</h1>

            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Healthcare Services for Students</h2>

              <div className="mb-6">
                <img
                  src="https://santoshhospitalvns.com/wp-content/uploads/2023/06/Ambulance-Santosh-Hospital-scaled.jpg"
                  alt="IARE Medical Centre"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <p className="mb-4">
                  The Medical Centre at Sri Venkateswara University College of Engineering provides essential healthcare services to students, faculty, and staff. The facility is equipped to offer preventive care, basic treatment, and emergency medical assistance, ensuring the well-being of the campus community.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Medical Services</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">General outpatient services</li>
                  <li className="mb-2">First aid for emergencies</li>
                  <li className="mb-2">Basic laboratory services</li>
                  <li className="mb-2">Health education and promotion</li>
                  <li className="mb-2">Mental health counseling</li>
                  <li className="mb-2">Referral services to specialty care</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Facilities Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Consultation Room</h4>
                    <p className="text-sm">Well-equipped examination room for consultations and check-ups.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Observation Ward</h4>
                    <p className="text-sm">Short-term observation facility with beds for students requiring monitoring.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Pharmacy</h4>
                    <p className="text-sm">Essential medicines available for common illnesses and emergencies.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Ambulance Service</h4>
                    <p className="text-sm">24/7 ambulance service for medical emergencies and transfers.</p>
                  </div>
                </div>
              </div>

              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Medical Centre</h3>
                <p className="mb-1"><strong>Location:</strong> SV University Gate-1</p>
                <p className="mb-1"><strong>Email:</strong> registrar@svumail.edu.in</p>
                <p className="mb-1"><strong>Emergency Contact:</strong>+91 (877) 2289545</p>
                <p><strong>Working Hours:</strong> 24/7 (Emergency Services)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MedicalCentre;
