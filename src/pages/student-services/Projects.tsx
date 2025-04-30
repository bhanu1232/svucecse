
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { Award, BookOpen, Briefcase, Clock, Code, FileText, Globe, Layers, Lightbulb, Trophy, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Smart Healthcare Monitoring System",
      category: "IoT & Healthcare",
      description: "An IoT-based system that monitors patient health parameters and sends alerts to healthcare providers in case of emergencies.",
      technologies: ["IoT", "Python", "Machine Learning", "Mobile App"],
      team: 4,
      awards: "Best Innovation Award, National Technical Symposium 2024"
    },
    {
      title: "Sustainable Urban Planning Tool",
      category: "AI & Sustainability",
      description: "AI-powered tool that analyzes urban data to suggest sustainable development plans with minimal environmental impact.",
      technologies: ["AI", "GIS", "Data Analytics", "Web Application"],
      team: 5,
      awards: "Runner-up, Smart Cities Hackathon 2024"
    },
    {
      title: "Blockchain-based Supply Chain Tracker",
      category: "Blockchain",
      description: "A blockchain solution that ensures transparency and traceability in supply chains, from production to delivery.",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js"],
      team: 3,
      awards: "1st Prize, Blockchain Innovation Challenge"
    }
  ];

  const upcomingCompetitions = [
    {
      title: "Annual Hackathon 2025",
      date: "April 15-16, 2025",
      description: "24-hour coding marathon to solve real-world problems with innovative technological solutions.",
      prizes: "Cash prizes worth ₹2,00,000, Internship opportunities, Mentorship",
      eligibility: "All undergraduate and postgraduate students",
      icon: <Code className="w-8 h-8 text-iare-teal" />
    },
    {
      title: "National Project Exhibition",
      date: "May 20-22, 2025",
      description: "Platform for students to showcase their innovative projects and get feedback from industry experts.",
      prizes: "Funding for top projects, Publication opportunities, Industry recognition",
      eligibility: "Final year undergraduate and postgraduate students",
      icon: <Layers className="w-8 h-8 text-iare-teal" />
    },
    {
      title: "Technical Paper Presentation",
      date: "June 10, 2025",
      description: "Competition for presenting research papers on emerging technologies and innovations.",
      prizes: "Publication in IEEE conference proceedings, Cash prizes, Recognition certificates",
      eligibility: "All students with research papers",
      icon: <FileText className="w-8 h-8 text-iare-teal" />
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
                <li className="flex items-center text-gray-500">Projects | Mockups | Competitions</li>
              </ol>
            </nav>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Projects | Mockups | Competitions</h1>

            {/* Hero Section */}
            <div className="bg-white p-6 border rounded shadow-sm mb-8">
              <div className="md:flex items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h2 className="text-xl font-semibold text-iare-maroon mb-3">
                    From Concept to Creation: Showcase Your Technical Prowess
                  </h2>
                  <p className="mb-4 text-gray-700">
                    We believe that practical learning is as important as theoretical knowledge. Our Projects, Mockups, and Competitions initiatives provide students with opportunities to apply their classroom learning to real-world problems, develop innovative solutions, and showcase their technical skills.
                  </p>
                  <p className="text-gray-700">
                    Whether you're building a prototype, participating in a coding competition, or presenting a technical paper, these platforms help you gain valuable hands-on experience, enhance your portfolio, and increase your employability.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 text-iare-teal mr-2" />
                      <span className="text-sm font-medium">50+ Annual Competitions</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-iare-teal mr-2" />
                      <span className="text-sm font-medium">200+ Industry Partners</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-iare-teal mr-2" />
                      <span className="text-sm font-medium">National & International Platforms</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img
                    src="https://img.freepik.com/free-vector/project-initiation-abstract-concept-vector-illustration-project-documentation-business-analysis-vision-scope-determine-goals-task-assignment-timeframe-timeline-abstract-metaphor_335657-2944.jpg?semt=ais_country_boost&w=740"
                    alt="Projects Banner"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Main Content Tabs */}
            <div className="bg-white border rounded shadow-sm mb-8">
              <Tabs defaultValue="projects" className="w-full">
                <TabsList className="w-full grid grid-cols-3 p-0 border-b">
                  <TabsTrigger
                    value="projects"
                    className="py-3 rounded-none rounded-tl-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Student Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="competitions"
                    className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Competitions
                  </TabsTrigger>
                  <TabsTrigger
                    value="resources"
                    className="py-3 rounded-none rounded-tr-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Resources & Support
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="projects" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Featured Student Projects</h3>
                  <p className="text-gray-700 mb-6">
                    Our students work on innovative projects across various domains. Here are some outstanding projects that showcase their creativity and technical expertise.
                  </p>

                  <div className="space-y-6">
                    {featuredProjects.map((project, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-iare-teal/10 px-4 py-3 flex justify-between items-center">
                          <h4 className="font-medium text-iare-blue">{project.title}</h4>
                          <span className="text-xs font-medium bg-iare-teal/20 text-iare-teal px-2 py-1 rounded">
                            {project.category}
                          </span>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 mb-4">{project.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h5 className="text-sm font-medium text-iare-maroon mb-1">Technologies Used</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded border">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-iare-maroon mb-1">Team Size</h5>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 text-gray-500 mr-1" />
                                <span className="text-sm">{project.team} Students</span>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-iare-maroon mb-1">Awards & Recognition</h5>
                              <div className="flex items-start">
                                <Award className="w-4 h-4 text-gray-500 mr-1 mt-0.5" />
                                <span className="text-sm">{project.awards}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-iare-maroon mb-3">Project Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded border text-center">
                        <Code className="w-6 h-6 text-iare-teal mx-auto mb-2" />
                        <p className="text-sm font-medium">Software Development</p>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <Layers className="w-6 h-6 text-iare-teal mx-auto mb-2" />
                        <p className="text-sm font-medium">Hardware & IoT</p>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <Lightbulb className="w-6 h-6 text-iare-teal mx-auto mb-2" />
                        <p className="text-sm font-medium">AI & Machine Learning</p>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <Globe className="w-6 h-6 text-iare-teal mx-auto mb-2" />
                        <p className="text-sm font-medium">Web & Mobile Apps</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="competitions" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Competitions & Challenges</h3>
                  <p className="text-gray-700 mb-6">
                    We organize and facilitate participation in various technical competitions, hackathons, and challenges to encourage innovation and problem-solving skills among students.
                  </p>

                  <div className="mb-8">
                    <h4 className="font-medium text-iare-blue flex items-center mb-4">
                      <Trophy className="w-5 h-5 mr-2" /> Upcoming Competitions
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {upcomingCompetitions.map((competition, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-gray-50 p-4 flex items-center justify-center">
                            {competition.icon}
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium text-iare-maroon">{competition.title}</h5>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mb-3">
                              <Clock className="w-3.5 h-3.5 mr-1" />
                              <span>{competition.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{competition.description}</p>
                            <div className="text-xs space-y-2">
                              <div>
                                <span className="font-medium text-iare-blue">Prizes:</span> {competition.prizes}
                              </div>
                              <div>
                                <span className="font-medium text-iare-blue">Eligibility:</span> {competition.eligibility}
                              </div>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium text-iare-blue flex items-center mb-4">
                      <Award className="w-5 h-5 mr-2" /> External Competitions We Support
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <img src="/placeholder.svg" alt="Smart India Hackathon" className="w-6 h-6" />
                          </div>
                          <h5 className="font-medium">Smart India Hackathon</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          National-level hackathon for students to solve industry and government problems.
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <img src="/placeholder.svg" alt="ACM ICPC" className="w-6 h-6" />
                          </div>
                          <h5 className="font-medium">ACM ICPC</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          International Collegiate Programming Contest for competitive coding.
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <img src="/placeholder.svg" alt="Imagine Cup" className="w-6 h-6" />
                          </div>
                          <h5 className="font-medium">Microsoft Imagine Cup</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Global technology competition for developing innovative solutions.
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <img src="/placeholder.svg" alt="IEEE" className="w-6 h-6" />
                          </div>
                          <h5 className="font-medium">IEEE Project Competition</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Competition for innovative engineering projects across various fields.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-iare-blue/5 p-4 rounded-lg border border-iare-blue/20">
                    <h4 className="font-medium text-iare-blue mb-3">Our Track Record</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded border text-center">
                        <p className="text-2xl font-bold text-iare-teal">150+</p>
                        <p className="text-sm">Competition Wins</p>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <p className="text-2xl font-bold text-iare-teal">₹30L+</p>
                        <p className="text-sm">Prize Money Won</p>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <p className="text-2xl font-bold text-iare-teal">75+</p>
                        <p className="text-sm">National Finalists</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Resources & Support</h3>
                  <p className="text-gray-700 mb-6">
                    We provide various resources and support services to help students excel in their projects and competitions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h4 className="font-medium text-iare-blue">Project Mentorship</h4>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          Our experienced faculty members and industry experts provide guidance and mentorship for student projects.
                        </p>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>One-on-one mentorship sessions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Regular progress reviews</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Technical guidance and troubleshooting</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Industry expert connections</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h4 className="font-medium text-iare-blue">Facilities & Infrastructure</h4>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          Access to state-of-the-art facilities and equipment for project development and testing.
                        </p>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Project Development Labs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Hardware Resources & Components</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Software Licenses & Development Tools</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>High-Performance Computing Resources</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium text-iare-blue mb-4">Training & Workshops</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border p-4 rounded-lg">
                        <BookOpen className="w-8 h-8 text-iare-teal mb-3" />
                        <h5 className="font-medium mb-2">Technical Skills Workshops</h5>
                        <p className="text-sm text-gray-600">
                          Hands-on training sessions on programming languages, frameworks, and tools.
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <Lightbulb className="w-8 h-8 text-iare-teal mb-3" />
                        <h5 className="font-medium mb-2">Innovation & Ideation</h5>
                        <p className="text-sm text-gray-600">
                          Workshops on design thinking, problem-solving, and creative ideation.
                        </p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <Briefcase className="w-8 h-8 text-iare-teal mb-3" />
                        <h5 className="font-medium mb-2">Project Management</h5>
                        <p className="text-sm text-gray-600">
                          Training on project planning, team collaboration, and time management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h4 className="font-medium text-iare-blue mb-3">How to Get Started</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Identify Your Interest Area</p>
                          <p className="text-sm text-gray-600">Explore various domains and identify what interests you most.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Form a Team</p>
                          <p className="text-sm text-gray-600">Find like-minded students with complementary skills to form a project team.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Submit a Proposal</p>
                          <p className="text-sm text-gray-600">Develop a project idea and submit a proposal to the student services department.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Get Mentor Assigned</p>
                          <p className="text-sm text-gray-600">A faculty mentor will be assigned to guide your project development.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <p className="font-medium">Start Working!</p>
                          <p className="text-sm text-gray-600">Begin development with regular progress check-ins and mentorship sessions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
