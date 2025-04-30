
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const CareerGuidance = () => {
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
                <li className="flex items-center text-gray-500">Career Guidance and Counselling</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Career Guidance and Counselling</h1>

            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Overview</h2>

              <p className="mb-4">
                The Career Guidance and Counselling Cell at Sri Venkateswara University College of Engineering is committed to supporting students with the guidance, counselling, and resources needed to make well-informed career choices. The cell offers a variety of services including career assessment, counselling sessions, psychometric testing, job search support, and more.
              </p>

              <p className="mb-4">
                Our experienced counsellors assist students with exploring career paths, building strong resumes, preparing through mock interviews, and gaining industry insights to ensure a smooth transition from campus to career.
              </p>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Key Services</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Career Assessment</h3>
                  <p className="text-sm">
                    Identify your strengths, interests, values, and skills to find the right career path.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Individual Counselling</h3>
                  <p className="text-sm">
                    One-on-one sessions with experienced counsellors to discuss career plans and concerns.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Resume Building</h3>
                  <p className="text-sm">
                    Assistance in creating professional resumes and cover letters for job applications.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-sm">
                    Mock interviews and feedback to help students prepare for real interviews.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Industry Connect</h3>
                  <p className="text-sm">
                    Networking opportunities with industry professionals and alumni.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Higher Education Guidance</h3>
                  <p className="text-sm">
                    Information and guidance on higher education options in India and abroad.
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Career Resources</h2>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Career assessment tools and psychometric tests</li>
                <li>Career library with books, journals, and digital resources</li>
                <li>Online job portals and career websites access</li>
                <li>Industry reports and market trends analysis</li>
                <li>Professional development workshops and seminars</li>
                <li>Internship and placement opportunities</li>
              </ul>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Events</h2>

              <div className="border rounded overflow-hidden mb-6">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Event</th>
                      <th className="py-2 px-4 text-left">Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">April 3, 2025</td>
                      <td className="py-2 px-4">Career Guidence & Resume Building</td>
                      <td className="py-2 px-4">MB - 200</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-2 px-4">April 4, 2025</td>
                      <td className="py-2 px-4">Resume Building Workshop</td>
                      <td className="py-2 px-4">MB - 200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">April 9, 2025</td>
                      <td className="py-2 px-4">Ai Skills by Microsoft</td>
                      <td className="py-2 px-4">SVU Auditorium</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerGuidance;
