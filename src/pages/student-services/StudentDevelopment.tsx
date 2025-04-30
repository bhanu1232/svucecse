
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const StudentDevelopment = () => {
  const upcomingPrograms = [
    { name: "Technical Writing Workshop", date: "May 15, 2025", duration: "3 days", instructor: "Dr. Ramesh Kumar" },
    { name: "Soft Skills Bootcamp", date: "May 25, 2025", duration: "1 week", instructor: "Prof. Sangeeta Mishra" },
    { name: "Leadership Development Program", date: "June 10, 2025", duration: "5 days", instructor: "Dr. Arjun Singh" },
    { name: "Public Speaking Masterclass", date: "June 20, 2025", duration: "2 days", instructor: "Ms. Priya Sharma" },
  ];

  const programCategories = [
    {
      title: "Technical Skills Development",
      programs: [
        "Advanced Programming Techniques",
        "Database Management Systems",
        "Cloud Computing and Virtualization",
        "Web Development and Design",
        "Mobile App Development",
        "Machine Learning and AI"
      ]
    },
    {
      title: "Soft Skills Enhancement",
      programs: [
        "Effective Communication",
        "Time Management",
        "Team Building and Leadership",
        "Emotional Intelligence",
        "Critical Thinking and Problem Solving",
        "Stress Management and Resilience"
      ]
    },
    {
      title: "Career Development",
      programs: [
        "Resume Building and Interview Skills",
        "Personal Branding",
        "Networking and Professional Relationships",
        "Entrepreneurship Essentials",
        "Industry Exposure Programs",
        "Career Planning and Goal Setting"
      ]
    }
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
                <li className="flex items-center text-gray-500">Student Development Program</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Development Program</h1>

            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Overview</h2>

              <p className="mb-4">
                The Student Development Program (SDP) at Sri Venkateswara University College of Engineering aims to enhance students' technical expertise and soft skills beyond the regular curriculum. These programs are designed to help students build a well-rounded personality and prepare for successful careers in their chosen fields.
              </p>

              <p className="mb-4">
                The sessions are conducted by industry professionals, faculty members, and expert trainers, offering high-quality learning experiences through workshops, seminars, and training programs held throughout the academic year.
              </p>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Program Categories</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {programCategories.map((category, index) => (
                  <div key={index} className="bg-iare-gray rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-iare-teal text-white p-3 font-semibold">
                      {category.title}
                    </div>
                    <div className="p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {category.programs.map((program, idx) => (
                          <li key={idx} className="text-sm">{program}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start p-3">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-iare-blue">Enhanced Employability</h3>
                    <p className="text-sm">Develop skills that are highly valued by employers across industries.</p>
                  </div>
                </div>

                <div className="flex items-start p-3">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-iare-blue">Practical Knowledge</h3>
                    <p className="text-sm">Gain hands-on experience and practical knowledge beyond textbooks.</p>
                  </div>
                </div>

                <div className="flex items-start p-3">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-iare-blue">Personality Development</h3>
                    <p className="text-sm">Build confidence, communication skills, and a professional attitude.</p>
                  </div>
                </div>

                <div className="flex items-start p-3">
                  <div className="bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-iare-blue">Networking Opportunities</h3>
                    <p className="text-sm">Connect with industry professionals, alumni, and peers.</p>
                  </div>
                </div>
              </div>

              {/* <h2 className="text-xl font-semibold text-iare-maroon mb-4">Upcoming Programs</h2> */}

              {/* <div className="overflow-x-auto mb-6">
                <table className="min-w-full border rounded">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Program Name</th>
                      <th className="py-2 px-4 text-left">Start Date</th>
                      <th className="py-2 px-4 text-left">Duration</th>
                      <th className="py-2 px-4 text-left">Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingPrograms.map((program, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 border-b">{program.name}</td>
                        <td className="py-2 px-4 border-b">{program.date}</td>
                        <td className="py-2 px-4 border-b">{program.duration}</td>
                        <td className="py-2 px-4 border-b">{program.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDevelopment;
