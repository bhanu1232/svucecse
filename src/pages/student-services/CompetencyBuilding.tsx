
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const CompetencyBuilding = () => {
  const competencyPrograms = [
    {
      title: "Professional Training Workshops",
      description: "Intensive training sessions conducted by industry experts focusing on specific technical and professional skills.",
      duration: "2-5 days",
      frequency: "Monthly"
    },
    {
      title: "Industry-Specific Bootcamps",
      description: "Immersive learning experiences designed to build competency in emerging technologies and industry practices.",
      duration: "1-2 weeks",
      frequency: "Quarterly"
    },
    {
      title: "Leadership Development Program",
      description: "Structured program to develop leadership capabilities, decision-making skills, and management aptitude.",
      duration: "Semester-long",
      frequency: "Bi-annually"
    },
    {
      title: "Technical Competency Courses",
      description: "Specialized courses in advanced technical domains aligned with industry requirements and future trends.",
      duration: "8-12 weeks",
      frequency: "Every semester"
    },
    {
      title: "Consultancy Skills Development",
      description: "Training in problem-solving, client management, project planning, and professional service delivery.",
      duration: "6 weeks",
      frequency: "Annually"
    },
    {
      title: "Industry Mentorship Program",
      description: "One-on-one mentoring by industry professionals to develop specific competencies and career guidance.",
      duration: "Ongoing",
      frequency: "Continuous"
    }
  ];

  const consultancyServices = [
    {
      area: "Software Development",
      description: "Custom software solutions, mobile applications, web development, and enterprise systems."
    },
    {
      area: "Technical Consultancy",
      description: "Technology advisory, process optimization, digital transformation, and technical feasibility studies."
    },
    {
      area: "Research & Development",
      description: "Applied research, prototype development, technological innovation, and proof-of-concept projects."
    },
    {
      area: "Data Analytics",
      description: "Data processing, statistical analysis, business intelligence, and predictive modeling."
    },
    {
      area: "System Integration",
      description: "Integration of disparate systems, legacy migration, and interoperability solutions."
    },
    {
      area: "Training Services",
      description: "Customized training programs, skill development workshops, and technical certification courses."
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
                <li className="flex items-center text-gray-500">Competency Building and Consultancy</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Competency Building and Consultancy</h1>

            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Building Professional Excellence</h2>

              <div className="mb-6">
                <p className="mb-4">
                  Sri Venkateswara University College of Engineering's Competency Building and Consultancy initiative focuses on developing industry-relevant skills while offering students real-world exposure through consultancy projects. This approach ensures that students not only build strong theoretical foundations but also gain practical experience by applying their knowledge to solve real-life industry challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-5 bg-iare-lightblue">
                    <h3 className="text-lg font-semibold text-iare-blue mb-3">Competency Building</h3>
                    <p className="text-sm mb-4">
                      Our competency building programs focus on developing technical, professional, and soft skills that are highly
                      valued in the industry. These programs are designed in collaboration with industry partners to ensure relevance
                      and alignment with current market demands.
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="mb-1">Industry-aligned skill development</li>
                      <li className="mb-1">Professional certification preparation</li>
                      <li className="mb-1">Specialized technical training</li>
                      <li className="mb-1">Leadership and management development</li>
                      <li className="mb-1">Continuous professional development</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-5 bg-iare-lightblue">
                    <h3 className="text-lg font-semibold text-iare-blue mb-3">Consultancy Services</h3>
                    <p className="text-sm mb-4">
                      Our student-faculty consultancy services provide solutions to real-world problems faced by industries,
                      startups, and community organizations. These consultancy projects offer students valuable experience in
                      applying their knowledge in practical scenarios while delivering value to clients.
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="mb-1">Industry problem-solving</li>
                      <li className="mb-1">Technical advisory services</li>
                      <li className="mb-1">Project-based consulting</li>
                      <li className="mb-1">Research and development support</li>
                      <li className="mb-1">Technology implementation assistance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Competency Building Programs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-3 px-4 text-left border">Program</th>
                        <th className="py-3 px-4 text-left border">Description</th>
                        <th className="py-3 px-4 text-left border">Duration</th>
                        <th className="py-3 px-4 text-left border">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competencyPrograms.map((program, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-4 border font-medium">{program.title}</td>
                          <td className="py-3 px-4 border text-sm">{program.description}</td>
                          <td className="py-3 px-4 border text-sm">{program.duration}</td>
                          <td className="py-3 px-4 border text-sm">{program.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Consultancy Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {consultancyServices.map((service, index) => (
                    <div key={index} className="border p-4 rounded bg-gray-50">
                      <h4 className="font-medium text-iare-blue mb-2">{service.area}</h4>
                      <p className="text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Our Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-iare-lightblue p-4 rounded">
                    <div className="text-3xl font-bold text-iare-blue mb-2">500+</div>
                    <p className="text-sm">Students Trained</p>
                  </div>
                  <div className="bg-iare-lightblue p-4 rounded">
                    <div className="text-3xl font-bold text-iare-blue mb-2">50+</div>
                    <p className="text-sm">Industry Partners</p>
                  </div>
                  <div className="bg-iare-lightblue p-4 rounded">
                    <div className="text-3xl font-bold text-iare-blue mb-2">75+</div>
                    <p className="text-sm">Consultancy Projects</p>
                  </div>
                  <div className="bg-iare-lightblue p-4 rounded">
                    <div className="text-3xl font-bold text-iare-blue mb-2">90%</div>
                    <p className="text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompetencyBuilding;
