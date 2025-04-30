
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const SelfLearning = () => {
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
                <li className="flex items-center text-gray-500">Self Learning</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Self Learning</h1>

            <p className="mb-6">
              At the Department of CSE, Sri Venkateswara University College of Engineering, we recognize self-directed learning as a key to lifelong success. Our Self Learning initiatives encourage students to take charge of their academic journey, promoting independence, curiosity, and a drive for continuous learning beyond the classroom.
            </p>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Framework</h2>

              <p className="mb-4">
                Our structured framework helps students develop effective self-learning habits:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">1</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Goal Setting</h3>
                  <p className="text-sm">Defining clear, achievable learning objectives</p>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">2</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Resource Identification</h3>
                  <p className="text-sm">Finding appropriate learning materials and tools</p>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">3</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Learning Plan</h3>
                  <p className="text-sm">Creating a structured approach with timelines</p>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">4</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Implementation</h3>
                  <p className="text-sm">Engaging with the learning material actively</p>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">5</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Reflection</h3>
                  <p className="text-sm">Analyzing progress and understanding</p>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">6</div>
                  <h3 className="font-semibold text-iare-blue mb-2">Application</h3>
                  <p className="text-sm">Applying new knowledge in practical contexts</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Resources</h2>

                <p className="mb-4">
                  We provide a comprehensive array of resources to support self-learning:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Digital Library:</strong> Access to thousands of e-books, journals, and research papers</li>
                  <li><strong>Online Courses:</strong> Curated selection of MOOCs from platforms like Coursera, edX, and NPTEL</li>
                  <li><strong>Learning Management System:</strong> Self-paced modules and supplementary materials</li>
                  <li><strong>Software Tools:</strong> Access to industry-standard software for practice</li>
                  <li><strong>Virtual Labs:</strong> Simulated laboratory environments for experimentation</li>
                  <li><strong>Video Lectures:</strong> Recorded sessions from expert faculty</li>
                  <li><strong>Study Guides:</strong> Structured materials to facilitate independent learning</li>
                  <li><strong>Open Educational Resources:</strong> Freely accessible learning materials</li>
                </ul>
              </div>

              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Support</h2>

                <p className="mb-4">
                  While self-learning emphasizes autonomy, we provide support structures to guide students:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Learning Advisors:</strong> Faculty members who suggest resources and learning paths</li>
                  <li><strong>Peer Learning Groups:</strong> Connect with others exploring similar topics</li>
                  <li><strong>Progress Tracking:</strong> Tools to monitor learning achievements</li>
                  <li><strong>Skill Assessment:</strong> Regular opportunities to evaluate acquired knowledge</li>
                  <li><strong>Mentorship Programs:</strong> Guidance from seniors and industry experts</li>
                  <li><strong>Learning Workshops:</strong> Sessions on effective self-learning strategies</li>
                  <li><strong>Online Forums:</strong> Discussion platforms for collaborative learning</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Recognition</h2>

              <p className="mb-4">
                We recognize and value the effort students put into self-directed learning:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded p-3 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-iare-lightblue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-iare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-iare-blue text-sm">Digital Badges</h3>
                  <p className="text-xs text-gray-600 mt-1">Recognition for completing learning milestones</p>
                </div>

                <div className="border border-gray-200 rounded p-3 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-iare-lightblue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-iare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-iare-blue text-sm">Portfolio Development</h3>
                  <p className="text-xs text-gray-600 mt-1">Document self-acquired skills and knowledge</p>
                </div>

                <div className="border border-gray-200 rounded p-3 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-iare-lightblue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-iare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-iare-blue text-sm">Challenge Examinations</h3>
                  <p className="text-xs text-gray-600 mt-1">Demonstrate proficiency gained through self-study</p>
                </div>

                <div className="border border-gray-200 rounded p-3 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-iare-lightblue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-iare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-iare-blue text-sm">Showcase Opportunities</h3>
                  <p className="text-xs text-gray-600 mt-1">Present projects at institutional events</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded shadow-sm p-5 mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Developing Self-Learning Skills</h2>

              <p className="mb-4">
                We offer workshops and guidance on developing essential self-learning skills:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Setting effective learning goals</li>
                  <li>Time management and learning schedules</li>
                  <li>Note-taking and information organization</li>
                  <li>Critical evaluation of resources</li>
                </ul>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Self-assessment techniques</li>
                  <li>Overcoming challenges in independent learning</li>
                  <li>Digital literacy and online research</li>
                  <li>Metacognition and learning about learning</li>
                </ul>
              </div>

              <p className="text-sm bg-iare-gray p-3 rounded italic">
                "Self-education is, I firmly believe, the only kind of education there is." — Isaac Asimov
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SelfLearning;
