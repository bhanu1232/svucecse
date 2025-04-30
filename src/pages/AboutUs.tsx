
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, BookText, Building, Clock, Glasses, GraduationCap, Heart, Server, Target, Users, BookCheck, Coffee, Cpu, Database, Globe, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <Heart className="h-10 w-10 text-iare-maroon" />,
      title: "Excellence",
      description: "Commitment to excellence in all academic and professional pursuits."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-iare-maroon" />,
      title: "Innovation",
      description: "Fostering creativity and promoting innovation in engineering education."
    },
    {
      icon: <Users className="h-10 w-10 text-iare-maroon" />,
      title: "Integrity",
      description: "Maintaining ethical standards and promoting academic integrity."
    },
    {
      icon: <Award className="h-10 w-10 text-iare-maroon" />,
      title: "Inclusivity",
      description: "Embracing diversity and providing equal opportunities for all."
    },
    {
      icon: <Target className="h-10 w-10 text-iare-maroon" />,
      title: "Social Responsibility",
      description: "Encouraging community service and sustainable practices."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-iare-maroon" />,
      title: "Student-Centered",
      description: "Prioritizing student welfare and holistic development."
    }
  ];

  const departmentFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-iare-teal" />,
      title: "Modern Curriculum",
      description: "Regularly updated curriculum focusing on cutting-edge technologies including AI, ML, and Cloud Computing."
    },
    {
      icon: <Database className="h-8 w-8 text-iare-teal" />,
      title: "Research Labs",
      description: "State-of-the-art research laboratories for Big Data Analytics, IoT, and Cybersecurity."
    },
    {
      icon: <Globe className="h-8 w-8 text-iare-teal" />,
      title: "Industry Connections",
      description: "Strong partnerships with leading tech companies for internships and placements."
    },
    {
      icon: <Code className="h-8 w-8 text-iare-teal" />,
      title: "Coding Culture",
      description: "Regular hackathons, coding competitions, and tech workshops."
    },
    {
      icon: <Server className="h-8 w-8 text-iare-teal" />,
      title: "Supercomputing Facility",
      description: "Access to high-performance computing resources for research and projects."
    },
    {
      icon: <BookCheck className="h-8 w-8 text-iare-teal" />,
      title: "Publications",
      description: "Over 200 research papers published in international journals and conferences annually."
    }
  ];

  const programOutcomes = [
    "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems",
    "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  ];

  const programSpecificOutcomes = [
    "PSO1: Empowering the students for continuous learning and deliver efficient solutions for emerging challenges in the computation domain.",
    "PS02:Ability to design, develop and implement problems of current research areas."
  ];

  const programEducationalObjectives = [
    "PEO1: To Provide quality learning through effective teaching-learning process enabled by free and open learning environment in turn Producing high quality graduate.",
    "PEO2: To Prepare students for properly positioning them in the society(academic, industrial, research and entrepreneurial areas in particular) with reference to trans-disciplinary activities, regular professional activities with high degree of innovation, competence, and commitment",
    "PEO3: To create broad based expertise in the areas of CSE in general and a few (minimum of 4 to 5 ) focused areas for in-depth study and high quality research such as e-technologies, very large databases, data mining / warehousing, networking, security, high performance computing systems, embedded systems, software engineering methodology, s/w quality testing, multimedia, theoretical computer science aspects and so on.",
    "PEO4: To inculcate the culture of Lifelong learning during the evolution of the student to a full-fledged professional through educating the applicant about the ever increasing needs of the society, technological trends and ethical values.",
    "PEO5: To set up a sense of efficient administrative / economical practices, to evolve the applicant with the required leadership qualities and managerial skills.",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto my-6 px-4">
        <div className="bg-iare-gray p-2 mb-4">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">About Us</li>
            </ol>
          </nav>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">About The Department</h1>

          {/* Hero Section */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8 overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Welcome to SVUCE</h2>
                <p className="mb-4 text-gray-700">
                  SVUCE, established in 1986, is one of the premier technical institutions in India.
                  We are committed to imparting quality education in engineering and technology and
                  producing competent professionals with strong ethical values.
                </p>
                <p className="mb-4 text-gray-700">
                  With state-of-the-art infrastructure, dedicated faculty, and innovative teaching
                  methodologies, we strive to create an environment that nurtures creativity, research,
                  and entrepreneurship among students.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Established: 1986</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Students: 5000+</span>
                  </div>

                  <div className="flex items-center">
                    <Glasses className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Faculty: 25+</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-4">
                <img
                  src="/campus-hero.jpg"
                  alt="SVUCE Campus"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://i.imgur.com/2gdk64H.jpg';
                  }}
                />
              </div>
            </div>
          </div>



          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 border rounded shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-iare-teal p-3 rounded-full mr-4">
                  <Glasses className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-iare-maroon">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To be one of the premier departments for achieving excellence in teaching and research with social responsibility and for producing innovative technical graduates in Computer Science and Engineering.
              </p>
            </div>

            <div className="bg-white p-6 border rounded shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-iare-teal p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-iare-maroon">Our Mission</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>To impart Computer Science and Engineering education by utilizing state of the art computing facilities.</li>
                <li>To inculcate inter-disciplinary approach with reference to academic, industrial and research-oriented activities, infusing scholarly inquisitiveness, making an imprint in the technological, economic and social development of the nation.</li>
                <li>To impart quality technical education of international standard in terms of providing adequate exposure to quality & methods, e-technologies and work flow automation in particular.</li>
                <li>To develop adequate expertise within the department, to help and guide all other departments of the institution, constituent and affiliate colleges of the University, dealing with computer science education.</li>
                <li>To develop capabilities within the department to help and guide industries with respect to the IT requirements.</li>
              </ul>
            </div>
          </div>

          {/* Program Educational Objectives (PEO) */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Program Educational Objectives (PEO)</h2>
            <div className="space-y-4">
              {programEducationalObjectives.map((objective, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 bg-iare-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Outcomes (PO) */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Program Outcomes (PO)</h2>
            <div className="space-y-4">
              {programOutcomes.map((outcome, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 bg-iare-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Specific Outcomes (PSO) */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Program Specific Outcomes (PSO)</h2>
            <div className="space-y-4">
              {programSpecificOutcomes.map((outcome, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 bg-iare-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
