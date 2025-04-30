
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const ExperientialLearning = () => {
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
                <li className="flex items-center text-gray-500">Experiential Learning</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Experiential Learning (ExL)</h1>

            <p className="mb-6">
              Experiential Learning at the Department of Computer Science and Engineering, Sri Venkateswara University College of Engineering, is structured to offer hands-on, practical experiences that go beyond traditional classroom learning. We believe that learning by doing is a powerful approach to developing technical skills, deepening knowledge, and preparing students for successful professional careers in the ever-evolving tech industry.
            </p>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">What is Experiential Learning?</h2>

              <p className="mb-4">
                Experiential Learning is a process through which students develop knowledge, skills, and values from direct experiences outside a traditional academic setting. It encompasses internships, service learning, undergraduate research, study abroad, and other creative and professional work experiences.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="flex-1 bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2 text-iare-blue">Learning by Doing</h3>
                  <p className="text-sm">Active participation in meaningful experiences</p>
                </div>
                <div className="flex-1 bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2 text-iare-blue">Real-world Application</h3>
                  <p className="text-sm">Applying theoretical knowledge to practical scenarios</p>
                </div>
                <div className="flex-1 bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2 text-iare-blue">Reflection</h3>
                  <p className="text-sm">Critical analysis of experiences to extract meaning</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Our Approach</h2>

              <p className="mb-4">
                The Department of CSE at Sri Venkateswara University College of Engineering adopts David A. Kolb’s Experiential Learning Cycle to bridge theory and practice through real-world, hands-on learning.
              </p>

              <div className="relative bg-iare-lightblue p-6 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-iare-teal shadow-sm">
                    <h3 className="font-semibold text-iare-blue">1. Concrete Experience</h3>
                    <p className="text-sm">Engaging in new experiences</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-iare-teal shadow-sm">
                    <h3 className="font-semibold text-iare-blue">2. Reflective Observation</h3>
                    <p className="text-sm">Reflecting on experiences from multiple perspectives</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-iare-teal shadow-sm">
                    <h3 className="font-semibold text-iare-blue">3. Abstract Conceptualization</h3>
                    <p className="text-sm">Creating concepts that integrate observations into logical theories</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-iare-teal shadow-sm">
                    <h3 className="font-semibold text-iare-blue">4. Active Experimentation</h3>
                    <p className="text-sm">Using theories to make decisions and solve problems</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-iare-teal text-white flex items-center justify-center text-xs font-bold">
                    Kolb's<br />Cycle
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Experiential Learning Opportunities</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Industry Internships:</strong> Gain real-world experience through structured work experiences</li>
                  <li><strong>Project-Based Learning:</strong> Work on real projects that address actual problems</li>
                  <li><strong>Laboratory Work:</strong> Apply theoretical knowledge in practical settings</li>
                  <li><strong>Field Trips:</strong> Visit industry sites to observe professional environments</li>
                  <li><strong>Design Challenges:</strong> Participate in competitions to solve engineering problems</li>
                  <li><strong>Community Service:</strong> Engage in service learning projects</li>
                  <li><strong>Workshops:</strong> Participate in hands-on skill development sessions</li>
                  <li><strong>Hackathons:</strong> Collaborative programming events</li>
                </ul>
              </div>

              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Benefits of Experiential Learning</h2>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Bridges the gap between theory and practice</li>
                  <li>Develops critical thinking and problem-solving skills</li>
                  <li>Enhances teamwork and communication abilities</li>
                  <li>Builds professional networks</li>
                  <li>Increases motivation and engagement in learning</li>
                  <li>Provides career exploration opportunities</li>
                  <li>Improves retention of knowledge</li>
                  <li>Develops adaptability and resilience</li>
                  <li>Strengthens resume and employability</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Success Stories</h2>

              <div className="border-l-4 border-iare-teal pl-4 mb-4">
                <p className="italic">"The internship program at Sri Venkateswara University College of Engineering provided me with hands-on experience using industry-standard tools and practices. This practical exposure was incredibly valuable and gave me a strong edge when applying for my first job.</p>
                <p className="font-semibold mt-2">- Siddish Reddy, B.Tech Computer Science & Engineering, 2020</p>
              </div>

              <div className="border-l-4 border-iare-teal pl-4">
                <p className="italic">"Participating in the design challenge helped me apply my theoretical knowledge to solve real-world problems. It was challenging but incredibly rewarding."</p>
                <p className="font-semibold mt-2">- Trived Chinchula, B.Tech Computer Science & Engineering, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperientialLearning;
