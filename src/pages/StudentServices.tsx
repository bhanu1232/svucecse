
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const StudentServices = () => {

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
                <li className="flex items-center text-gray-500">Student Services</li>
              </ol>
            </nav>
          </div>

          <div className="mb-8">
            <img
              src="https://www.iare.ac.in/sites/default/files/banners/SKILL_DEVELOPEMTN.jpg"
              alt="Student Services Skills Banner"
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Services</h1>

            <h2 className="text-xl font-semibold text-iare-maroon mb-4">On your journey with you</h2>

            <p className="mb-4">
              We're here to support you and help you develop your skills for the future.
            </p>

            <p className="mb-4">
              The institute strives to provide outstanding service and opportunities to students. We offer a wide variety of campus-based activities
              designed to assist students in self learning, experiential learning, career development, innovation, creativity, entrepreneurship,
              gathering information, making decisions about their lives, and implementing plans for their future and more.
            </p>


            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Have any questions or need help?</h2>

            <p className="mb-4">
              Dean of Student Services facilitate success and engagement opportunities for students from an early informational stage to beyond
              graduation. Student Services encourages participation in various clubs and student chapters of professional bodies to help students understand
              the importance of collaborative work and organizing skills, and to bring them into direct relationship with professional fields of their areas of study.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentServices;
