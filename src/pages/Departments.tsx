
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Book, BookOpen, ChevronDown, ChevronUp, File, FileText, GraduationCap, LucideIcon, Mail, Phone, Search, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Departments = () => {
  const [activeTab, setActiveTab] = useState('faculty');
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Tabs for department sections
  const tabs = [
    { id: 'faculty', label: 'Faculty' },
    { id: 'programs', label: 'Programs' },
    { id: 'labs', label: 'Laboratories' },
    // { id: 'achievements', label: 'Achievements' }
  ];

  const facultyMembers = [
    {
      name: "Dr. Ch.D.V. Subba Rao",
      position: "Professor & Vice Principal",
      qualification: "Ph.D, M.Tech",
      specialization: "Distributed/Peer to Peer Systems, Advanced Computing,Wireless Networks, Data Engineering",
      experience: "16+ years",
      image: "https://svuniversity.edu.in/storage/2022/02/Dr-Ch-D-V-Subba-Rao.png",
      email: "subbarao_chdv@hotmail.com	",
      phone: "+91 9849879861",
      dlink: "https://svuce.edu.in/cseFiles/Ch_D_V_Subba_Rao.pdf",
      publications: 43,
      projects: 8,
      awards: ["ACM", "IAENG", "CSI", "IEI"],
      bio: "The faculty member holds several key positions of responsibility at Sri Venkateswara University and SVU College of Engineering (SVUCE), actively contributing to both academic and administrative domains. They serve as the Coordinator for the Online Help Line Center under APSCHE and as the DZPAY Coordinator at SVU. Additionally, they are the Nodal Officer for E-OFFICE and the Nodal Officer for NIC at the university. Their academic involvement includes roles such as Coordinator for Evaluation and Examinations at SVU and Mentor and Nodal Officer for the PMSSS scheme at SVUCE. They also coordinate with Dassault Systems through APSSDC and function as the MIS-Nodal Officer for TEQIP-III. Furthermore, they contribute to postgraduate academic activities as the PG Coordinator for AICTE at SVUCE. Beyond academics, they also serve as the Care Taking Officer (CTO) and NCC Officer at SVU, showcasing their dedication to student welfare and discipline."
    },
    {
      name: "Dr. M. Humera Khanam",
      position: "Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Computer Programming in C,Information & Communication Technology,Data structures through C++",
      experience: "18+ years",
      image: "/faculty/humerakhanam.png",
      email: "phumera.svec@gmail.com",
      phone: "+91-9490923045",
      publications: 38,
      projects: 6,
      dlink: "https://svuce.edu.in/cseFiles/Profile-MHK-21-7-2018.pdf",
      awards: ["Outstanding Researcher Award 2021"],
      bio: "Dr. M. Purnachandra Rao specializes in AI and machine learning with applications in healthcare and finance. His research has been published in several high-impact journals and conference proceedings."
    },
    {
      name: "Dr. D. Vivekananda Reddy",
      position: "Professor & Head of Department",
      qualification: "Ph.D, M.Tech",
      specialization: "Software Engineering, Software Testing, Artificial Intelligence , Machine Learning,IoT, Data Science",
      experience: "16+ years",
      image: "/faculty/hod.png",
      email: "svuvivek@gmail.com",
      phone: "+91 9441005225",
      dlink: "https://svuce.edu.in/cseFiles/Profile-DVR.pdf",
      publications: 43,
      projects: 8,
      awards: ["ACM", "IAENG", "CSI", "IEI"],
      bio: "The faculty member holds several key positions of responsibility at Sri Venkateswara University and SVU College of Engineering (SVUCE), actively contributing to both academic and administrative domains. They serve as the Coordinator for the Online Help Line Center under APSCHE and as the DZPAY Coordinator at SVU. Additionally, they are the Nodal Officer for E-OFFICE and the Nodal Officer for NIC at the university. Their academic involvement includes roles such as Coordinator for Evaluation and Examinations at SVU and Mentor and Nodal Officer for the PMSSS scheme at SVUCE. They also coordinate with Dassault Systems through APSSDC and function as the MIS-Nodal Officer for TEQIP-III. Furthermore, they contribute to postgraduate academic activities as the PG Coordinator for AICTE at SVUCE. Beyond academics, they also serve as the Care Taking Officer (CTO) and NCC Officer at SVU, showcasing their dedication to student welfare and discipline."
    },
    {
      name: "Dr. N. Usha Rani",
      position: "Associate Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Artificial Intelligence",
      experience: "20+ years",
      image: "/faculty/usharani.png",
      email: "usharani.ur@gmail.com,",
      phone: "+91-9493564899",
      publications: 42,
      dlink: "https://svuce.edu.in/cseFiles/Profile-NUR.pdf",
      projects: 7,
      awards: ["Best Woman Researcher 2019", "Teaching Excellence Award 2022"],
      bio: "Dr. B. Padmaja Rani has extensive experience in data science and big data analytics. She has collaborated with industry partners on projects related to data-driven decision making and business intelligence."
    },
    {
      name: "Dr. Suresh Kumar Reddy K",
      position: "Academic Consultant",
      qualification: "Ph.D, M.Tech, B.E",
      specialization: "Cryptography and Network Security ",
      experience: "19+ years",
      image: "/faculty/suresh.png",
      email: "sureshreddysvu@gmail.com",
      phone: "+91-9701207488",
      publications: 35,
      projects: 5,
      dlink: "https://svuce.edu.in/cseFiles/suresh.pdf",
      awards: ["Network Security Excellence Award 2018"],
      bio: "Dr. S. Vishwanadha Raju is an expert in network security and cryptography. He has been instrumental in developing secure communication protocols for various applications."
    },
    {
      name: "Ms. T. Hemalatha",
      position: "Academic Consultant",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "ARTIFICIAL INTELLIGENCE, MACHINE LEARNING ",
      experience: "14+ years",
      image: "/faculty/hemalatha.png",
      email: "thirupathuruhemalatha@gmail.com	",
      phone: "+91-8978227231",
      publications: 28,
      projects: 4,
      dlink: "https://svuce.edu.in/cseFiles/hemalatha.pdf",
      awards: ["Best Paper Award - ICSE 2020"],
      bio: "Dr. J. Sasi Kiran focuses on software engineering methodologies and web services. His research aims to improve software quality and reliability through innovative testing approaches."
    },
    {
      name: "Mr. K Venkata Chalapathi",
      position: "Academic Consultant",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "",
      experience: "12+ years",
      image: "/faculty/chalapathi.png",
      email: "venkata.chalapathi87@gmail.com",
      phone: "+91-9652621516",
      publications: 22,
      dlink: "https://svuce.edu.in/cseFiles/chalapathi.pdf",
      projects: 3,
      awards: ["Faculty Innovation Award 2021"],
      bio: "Dr. G. Karuna specializes in database systems and data warehousing technologies. She has developed optimized algorithms for query processing in distributed database environments."
    },
    {
      name: "Mr. J. Sreekanth Reddy",
      position: "Academic Consultant",
      qualification: "M.Tech, B.Tech",
      specialization: "",
      experience: "10+ years",
      image: "/faculty/sreekanth.png",
      email: "sjsreddy99492@gmail.com",
      phone: "+91-9949298398",
      publications: 15,
      dlink: "https://svuce.edu.in/cseFiles/sreekanth.pdf",
      projects: 2,
      awards: ["Best Teaching Assistant 2019"],
      bio: "Mrs. T. Sumalatha focuses on computer graphics and human-computer interaction. Her research aims to improve user experience through intuitive interface design."
    },
    {
      name: "Mrs. D. Kalpana Chowdary",
      position: "Academic Consultant",
      qualification: "M.Tech, B.Tech",
      specialization: "",
      experience: "8+ years",
      image: "/faculty/kalpana.png",
      email: "dutulurukalapana@gmail.com",
      phone: "+91-9618139191",
      publications: 12,
      projects: 2,
      dlink: "https://svuce.edu.in/cseFiles/kalpana.pdf",
      awards: ["Young Faculty Award 2022"],
      bio: "Mr. K. Srinivas specializes in operating systems and computer architecture. He is currently pursuing his Ph.D. in optimized scheduling algorithms for real-time systems."
    },
    {
      name: "Ms. P. Hima Chandana	",
      position: "Academic Consultant",
      qualification: "M.Tech, B.Tech",
      specialization: "",
      experience: "8+ years",
      image: "/faculty/himachandana.png",
      email: "hima8022@gmail.com",
      phone: "+91-9642052535",
      publications: 12,
      projects: 2,
      dlink: "https://svuce.edu.in/cseFiles/chandana.pdf",
      awards: ["Young Faculty Award 2022"],
      bio: "Mr. K. Srinivas specializes in operating systems and computer architecture. He is currently pursuing his Ph.D. in optimized scheduling algorithms for real-time systems."
    }
  ];

  // Programs offered data
  const programsOffered = [
    {
      name: "B.Tech in Computer Science and Engineering",
      type: "Undergraduate",
      duration: "4 Years",
      intake: 66,
      eligibility: "10+2 with Mathematics, Physics, Chemistry",
      keyFeatures: [
        "Foundation courses in programming, data structures, and algorithms",
        "Advanced topics in AI, ML, cyber security, and web technologies",
        "Mandatory industry internship in the 3rd year",
        "Capstone project in the final year",
        "Option for honors degree with specialization"
      ],
      icon: GraduationCap
    },

    {
      name: "M.Tech in Computer Science and Engineering",
      type: "Postgraduate",
      duration: "2 Years",
      intake: "Variable",
      eligibility: "B.Tech/B.E in CSE or equivalent",
      keyFeatures: [
        "Advanced courses in chosen specialization",
        "Research methodology and technical paper writing",
        "Industry-sponsored projects",
        "Teaching assistantship opportunities",
        "Publication-oriented research work"
      ],
      icon: BookOpen
    },

    {
      name: "Ph.D in Computer Science and Engineering",
      type: "Doctoral",
      duration: "Min. 3 Years",
      intake: "Variable",
      eligibility: "M.Tech/M.E in relevant discipline",
      keyFeatures: [
        "Full-time and part-time research options",
        "Research in cutting-edge areas of computer science",
        "Opportunity to work on funded research projects",
        "Teaching experience through assistantships",
        "Conference travel support for presenting research"
      ],
      icon: Book
    }
  ];

  // Research areas
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Research on advanced algorithms, neural networks, deep learning architectures, natural language processing, and their applications in various domains.",
      projects: [
        "Intelligent traffic management system using deep learning",
        "Medical image analysis for early disease detection",
        "Natural language understanding for regional Indian languages"
      ],
      icon: File
    },
    {
      title: "Big Data Analytics",
      description: "Research on data processing frameworks, analytics algorithms, mining techniques, and visualization for extracting insights from large datasets.",
      projects: [
        "Real-time analytics platform for IoT data streams",
        "Scalable machine learning algorithms for big data",
        "Visual analytics for complex multidimensional data"
      ],
      icon: FileText
    },
    {
      title: "Internet of Things",
      description: "Research on IoT architectures, protocols, security, edge computing, and applications in smart cities, healthcare, agriculture, etc.",
      projects: [
        "Energy-efficient protocols for IoT networks",
        "Smart campus infrastructure using IoT devices",
        "IoT-based healthcare monitoring system"
      ],
      icon: File
    },
    {
      title: "Cybersecurity",
      description: "Research on network security, cryptography, intrusion detection, secure computing, blockchain, and privacy-preserving techniques.",
      projects: [
        "Blockchain-based secure data sharing framework",
        "AI-driven intrusion detection systems",
        "Privacy-preserving techniques for data analytics"
      ],
      icon: FileText
    }
  ];

  // Filter faculty based on search query
  const filteredFaculty = facultyMembers.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle faculty details
  const toggleFacultyDetails = (index: number) => {
    if (expandedFaculty === index) {
      setExpandedFaculty(null);
    } else {
      setExpandedFaculty(index);
    }
  };

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
              <li className="flex items-center text-gray-500">Departments</li>
            </ol>
          </nav>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Department of Computer Science and Engineering</h1>

          {/* Department Header with Quick Stats */}
          <div className="bg-white p-6 border rounded shadow-sm mb-6">
            <div className="md:flex items-center">
              <div className="md:w-3/4 pr-6">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Welcome to CSE Department</h2>
                <p className="text-gray-700 mb-4">
                  The Department of Computer Science and Engineering was established in the year 1986 with a vision to evolve
                  into a center of excellence producing globally competent computer science professionals. The department offers
                  undergraduate, postgraduate, and doctoral programs with state-of-the-art infrastructure and distinguished faculty.
                </p>
              </div>
              <div className="md:w-1/4 mt-6 md:mt-0">
                <div className="bg-gray-100 p-4 rounded border">
                  <h3 className="font-semibold text-iare-blue mb-2">Contact Department</h3>
                  <p className="text-sm mb-3">
                    <strong>Prof. Dr. D. Vivekananda reddy</strong><br />
                    Head of Department<br />
                    Email: svuvivek@gmail.com<br />
                    Phone: +91-9441005225
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Navigation Tabs */}
          <div className="bg-white border rounded shadow-sm mb-6 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="flex border-b min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-4 font-medium transition-colors ${activeTab === tab.id
                      ? 'text-iare-teal border-b-2 border-iare-teal'
                      : 'text-gray-600 hover:text-iare-blue'
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {/* Overview Tab Content */}
              {activeTab === 'overview' && (
                <div>

                  <h3 className="font-semibold text-iare-maroon mb-3">Department Overview</h3>
                  <p className="text-gray-700 mb-4">
                    The Department of Computer Science and Engineering was established with the vision of providing quality education
                    in computing sciences. Over the years, the department has grown significantly and has established itself as a
                    leading center for computer science education and research.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The department has state-of-the-art infrastructure and computing equipment supported by high-speed internet
                    connections. The modern computer labs are equipped with the latest hardware and software resources to support
                    teaching, learning, and research activities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border p-4 rounded">
                      <h4 className="font-medium text-iare-teal mb-2">Academic Excellence</h4>
                      <p className="text-sm text-gray-700">
                        Our programs are designed to provide a strong foundation in fundamental concepts along with exposure to
                        emerging technologies. The curriculum is regularly updated to reflect industry trends and technological
                        advancements. Our graduates are highly sought after by top companies for their technical competence and
                        problem-solving abilities.
                      </p>
                    </div>
                    <div className="border p-4 rounded">
                      <h4 className="font-medium text-iare-teal mb-2">Research and Innovation</h4>
                      <p className="text-sm text-gray-700">
                        The department promotes a culture of research and innovation among faculty and students. Research groups
                        in the department work on cutting-edge areas such as artificial intelligence, machine learning, data science,
                        cybersecurity, and Internet of Things. The department has published numerous research papers in reputed
                        journals and conferences.
                      </p>
                    </div>
                    <div className="border p-4 rounded">
                      <h4 className="font-medium text-iare-teal mb-2">Industry Connections</h4>
                      <p className="text-sm text-gray-700">
                        We maintain strong connections with industry partners to provide practical exposure to students. Industry
                        experts regularly visit the campus for guest lectures, workshops, and training programs. The department
                        also collaborates with industry on research projects, consultancy assignments, and student internships.
                      </p>
                    </div>
                    <div className="border p-4 rounded">
                      <h4 className="font-medium text-iare-teal mb-2">Student Development</h4>
                      <p className="text-sm text-gray-700">
                        Beyond academics, the department focuses on the overall development of students. Technical clubs, coding
                        competitions, hackathons, and workshops are regularly organized to enhance students' technical skills.
                        Soft skills training, personality development, and career guidance programs prepare students for successful
                        careers in the industry.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Faculty Tab Content */}
              {activeTab === 'faculty' && (
                <div>
                  <h3 className="font-semibold text-iare-maroon mb-4">Faculty Members</h3>

                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Search by name, position, or specialization..."
                        className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:border-iare-teal"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {filteredFaculty.map((faculty, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                        <div
                          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                          onClick={() => toggleFacultyDetails(index)}
                        >
                          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                            <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-iare-blue">{faculty.name}</h4>
                            <p className="text-sm text-gray-600">{faculty.position}</p>
                            <p className="text-sm text-gray-700 mt-1">{faculty.specialization}</p>
                          </div>
                          <div className="flex space-x-4 mr-4">
                            <div className="mt-4">
                              <a href={faculty.dlink} target='blank'>
                                <button className='h-auto px-3 py-1 bg-[#00275de2] text-white rounded-md '>
                                  All Details
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredFaculty.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No faculty members match your search criteria.
                    </div>
                  )}
                </div>
              )}

              {/* Programs Tab Content */}
              {activeTab === 'programs' && (
                <div>
                  <h3 className="font-semibold text-iare-maroon mb-4">Programs Offered</h3>

                  <div className="space-y-6">
                    {programsOffered.map((program, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex items-center border-b">
                          <program.icon className="text-iare-teal mr-3" size={24} />
                          <div>
                            <h4 className="font-semibold text-iare-blue">{program.name}</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <span className="inline-block bg-iare-teal text-white text-xs px-2 py-1 rounded mr-2">
                                {program.type}
                              </span>
                              <span className="mr-2">{program.duration}</span>
                              <span>Intake: {program.intake}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-iare-blue mb-1">Eligibility</h5>
                            <p className="text-sm text-gray-700">{program.eligibility}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-iare-blue mb-1">Key Features</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-700">
                              {program.keyFeatures.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Tab Content */}
              {activeTab === 'research' && (
                <div>
                  <h3 className="font-semibold text-iare-maroon mb-4">Research Areas</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {researchAreas.map((area, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex items-center border-b">
                          <area.icon className="text-iare-teal mr-3" size={20} />
                          <h4 className="font-semibold text-iare-blue">{area.title}</h4>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-3">{area.description}</p>
                          <h5 className="text-sm font-medium text-iare-blue mb-1">Notable Projects</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-700">
                            {area.projects.map((project, idx) => (
                              <li key={idx}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-iare-maroon mb-4">Research Publications</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="border p-3 rounded bg-gray-50 text-center">
                        <div className="text-iare-teal text-2xl font-bold">120+</div>
                        <div className="text-gray-600 text-sm">Journal Publications</div>
                      </div>
                      <div className="border p-3 rounded bg-gray-50 text-center">
                        <div className="text-iare-teal text-2xl font-bold">180+</div>
                        <div className="text-gray-600 text-sm">Conference Papers</div>
                      </div>
                      <div className="border p-3 rounded bg-gray-50 text-center">
                        <div className="text-iare-teal text-2xl font-bold">15</div>
                        <div className="text-gray-600 text-sm">Patents Filed</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-iare-blue mb-2">Recent Publications</h4>
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="border-b pb-3">
                          <p className="font-medium">Machine Learning Approaches for Early Detection of Diabetic Retinopathy: A Comprehensive Review</p>
                          <p className="text-gray-600">Authors: Dr. B. Padmaja Rani, Dr. M. Purnachandra Rao</p>
                          <p className="text-gray-600">Journal of Medical Systems, 2023</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium">A Novel Framework for Secure IoT Data Sharing Using Blockchain Technology</p>
                          <p className="text-gray-600">Authors: Dr. L. V. Narasimha Prasad, Dr. S. Vishwanadha Raju</p>
                          <p className="text-gray-600">IEEE Transactions on IoT, 2022</p>
                        </li>
                        <li>
                          <p className="font-medium">Optimized Deep Learning Models for Resource-Constrained Edge Devices</p>
                          <p className="text-gray-600">Authors: Dr. J. Sasi Kiran, Mr. K. Srinivas</p>
                          <p className="text-gray-600">International Conference on Edge Computing, 2022</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Labs Tab Content */}
              {activeTab === 'labs' && (
                <div>
                  <h3 className="font-semibold text-iare-maroon mb-4">Laboratories</h3>

                  <p className="text-gray-700 mb-6">
                    The department has well-equipped laboratories with the latest hardware and software resources to support teaching,
                    learning, and research activities. Each laboratory is designed to provide hands-on experience to students in various
                    domains of Computer Science and Engineering.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-[40vh] bg-gray-200">
                        <img
                          src="https://svuniversity.edu.in/storage/2022/10/Computer-Science-and-Engineering-Lab-3-scaled.jpg"
                          alt="Programming Lab"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-iare-blue mb-1">TEQUIP Lab</h4>
                        <p className="text-sm text-gray-600 mb-3">For basic and advanced programming courses in C, C++, Java, Python</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          <li>60 high-end computers with latest configurations</li>
                          <li>Licensed software including IDEs and compilers</li>
                          <li>Support for multiple programming languages</li>
                          <li>Interactive learning resources and code repositories</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-[40vh] bg-gray-200">
                        <img
                          src="https://svuniversity.edu.in/storage/2021/12/DSC04929-scaled.jpg"
                          alt="AI & ML Lab"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-iare-blue mb-1">M Tech lab</h4>
                        <p className="text-sm text-gray-600 mb-3">For machine learning, deep learning, NLP, computer vision</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          <li>40 workstations with high-end GPUs</li>
                          <li>CUDA toolkit, TensorFlow, PyTorch, Scikit-learn</li>
                          <li>Access to cloud computing resources</li>
                          <li>Datasets for training and evaluation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Achievements Tab Content */}
              {activeTab === 'achievements' && (
                <div>
                  <h3 className="font-semibold text-iare-maroon mb-4">Achievements & Milestones</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3 border-b">
                        <h4 className="font-semibold text-iare-blue">Academic Excellence</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Consistently ranked among the top 50 CSE departments in national rankings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>100% accreditation from NBA for all eligible programs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Average placement rate of 95% over the past five years</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Students secured top ranks in GATE examination</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3 border-b">
                        <h4 className="font-semibold text-iare-blue">Research Accomplishments</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Secured research grants worth ₹2.5 crores in the last five years</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Published over 300 research papers in reputed journals and conferences</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>15 patents filed, with 6 patents granted</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-iare-teal mr-2">•</span>
                            <span>Established Center of Excellence in AI & Machine Learning</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-iare-blue mb-3">Student Achievements</h4>

                    <div className="space-y-4">
                      <div className="border rounded p-4">
                        <h5 className="font-medium text-iare-teal mb-2">Competitive Programming</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          <li>Semi-finalists in ACM ICPC Asia Regional Contest 2022</li>
                          <li>1st place in National Coding Championship 2023</li>
                          <li>Two students selected for Google Summer of Code 2022</li>
                          <li>Winners of Smart India Hackathon 2021 & 2023</li>
                        </ul>
                      </div>

                      <div className="border rounded p-4">
                        <h5 className="font-medium text-iare-teal mb-2">Research & Innovation</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          <li>Student project on "AI-based Crop Disease Detection" received national recognition</li>
                          <li>Two student-led startups incubated at the university innovation center</li>
                          <li>Best paper award at International Conference on Data Science 2023</li>
                          <li>Student team developed an award-winning IoT solution for healthcare monitoring</li>
                        </ul>
                      </div>

                      <div className="border rounded p-4">
                        <h5 className="font-medium text-iare-teal mb-2">Placements & Higher Education</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          <li>Students placed in top companies including Microsoft, Google, Amazon, and Adobe</li>
                          <li>Highest package offered: ₹45 LPA (2023 batch)</li>
                          <li>20+ students admitted to prestigious universities abroad for higher studies</li>
                          <li>5 students received fully-funded PhD offers from top global universities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Departments;
