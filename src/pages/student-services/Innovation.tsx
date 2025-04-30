
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { BookOpen, Briefcase, Building, Clock, CreditCard, Laptop, Lightbulb, BarChart, Rocket, Sparkles, Target, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Innovation = () => {
  const successStories = [
    {
      name: "NxtJob",
      founders: "Shaik Asif Ali & Team",
      year: "",
      description: "Involved in migration of codebase from chatgpt-3.5-turbo model to chatgpt-4 model",
      achievements: "Secured ₹100 crore turnover in 2023",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdzi8PrqIbpc13aY3JrryoN6ZhLMhDjAyuPiriHazeOdU780i25N3bu6Zbs1Rccaw3zE&usqp=CAU"
    },
    {
      name: "Tekie’s Zen",
      founders: "Trived Chinchula & Team",
      year: "2023",
      description: "IoT, Full Stack Development, Web Development, React & React Native, Data Science, Outsourcing, Java Full Stack Development, DevOps, GoLang, and Python",
      achievements: "Successfully completed 100+ client projects across IT staffing, consulting, and IoT development.",
      image: "https://media.licdn.com/dms/image/v2/C4E0BAQHbh5KnX7IU4w/company-logo_200_200/company-logo_200_200/0/1677176687226/tekiez_logo?e=2147483647&v=beta&t=K8Lq4z7TQPv-htX-6eF6Fg6XRhGc3FoHVWuSTsBMaaY"
    },
    {
      name: "Ceraas",
      founders: "M. Poorna Prasad & Team",
      year: "2024",
      description: "Empowering startups and students by delivering innovative IT solutions, practical internship experiences, and groundbreaking projects in IoT and cybersecurity.",
      achievements: "Organized Ceeras Ideathon 2024 & launched Hackathon 2025.",
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-677f68bb70004_screenshot_2024-12-05_095649.png?d=200x200"
    }
  ];

  const upcomingPrograms = [
    {
      title: "Entrepreneurship Bootcamp",
      date: "May 5-10, 2025",
      description: "Intensive 6-day bootcamp covering all aspects of launching a startup, from ideation to pitching to investors.",
      eligibility: "All undergraduate and postgraduate students",
      icon: <Rocket className="w-8 h-8 text-iare-teal" />
    },
    {
      title: "Innovation Challenge 2025",
      date: "June 15-20, 2025",
      description: "Competition for developing innovative solutions addressing real-world problems in healthcare, environment, and education.",
      eligibility: "Open to all students in teams of 2-5",
      icon: <Lightbulb className="w-8 h-8 text-iare-teal" />
    },
    {
      title: "Startup Mentorship Program",
      date: "Applications open July 2025",
      description: "Six-month mentorship program pairing student startups with successful entrepreneurs and industry experts.",
      eligibility: "Students with validated startup ideas",
      icon: <Users className="w-8 h-8 text-iare-teal" />
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
                <li className="flex items-center text-gray-500">Innovation Creativity Entrepreneurship</li>
              </ol>
            </nav>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Innovation Creativity Entrepreneurship</h1>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-iare-blue to-iare-teal text-white p-6 rounded-lg shadow-sm mb-8">
              <div className="md:flex items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h2 className="text-xl font-semibold mb-3">
                    Nurturing the Next Generation of Innovators and Entrepreneurs
                  </h2>
                  <p className="mb-4 opacity-90">
                    The Innovation, Creativity, and Entrepreneurship (ICE) Center at SVUCE is dedicated to fostering an ecosystem that encourages students to think creatively, innovate boldly, and pursue entrepreneurial ventures.
                  </p>
                  <p className="opacity-90">
                    We provide comprehensive support through mentorship, funding, infrastructure, and networking opportunities to help transform innovative ideas into successful ventures.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center">
                      <Rocket className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">30+ Startups Incubated</span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">₹2Cr+ Funding Secured</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">500+ Student Entrepreneurs</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white/20 p-5 rounded-lg backdrop-blur-sm">
                    <Sparkles className="w-16 h-16 text-white mx-auto mb-3" />
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-1">Innovation Hub</h3>
                      <p className="text-sm opacity-90">
                        A dedicated space for ideation, prototyping, and collaboration
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Tabs */}
            <div className="bg-white border rounded shadow-sm mb-8">
              <Tabs defaultValue="programs" className="w-full">
                <TabsList className="w-full grid grid-cols-3 p-0 border-b">
                  <TabsTrigger
                    value="programs"
                    className="py-3 rounded-none rounded-tl-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Programs & Initiatives
                  </TabsTrigger>
                  <TabsTrigger
                    value="incubation"
                    className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Incubation & Support
                  </TabsTrigger>
                  <TabsTrigger
                    value="success"
                    className="py-3 rounded-none rounded-tr-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal"
                  >
                    Success Stories
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="programs" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Our Programs & Initiatives</h3>
                  <p className="text-gray-700 mb-6">
                    We offer a range of programs and initiatives designed to nurture innovation and entrepreneurial skills among students.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3 flex items-center">
                        <Lightbulb className="w-5 h-5 text-iare-teal mr-2" />
                        <h4 className="font-medium text-iare-blue">Innovation Programs</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">Design Thinking Workshops</h5>
                            <p className="text-sm text-gray-600">
                              Hands-on workshops teaching the design thinking methodology to solve complex problems.
                            </p>
                          </div>
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">Innovation Labs</h5>
                            <p className="text-sm text-gray-600">
                              Access to specialized labs for prototyping and testing innovative ideas.
                            </p>
                          </div>
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">Hackathons</h5>
                            <p className="text-sm text-gray-600">
                              Intense problem-solving events focusing on specific challenges or technologies.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Innovation Challenges</h5>
                            <p className="text-sm text-gray-600">
                              Theme-based competitions encouraging students to develop innovative solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3 flex items-center">
                        <Briefcase className="w-5 h-5 text-iare-teal mr-2" />
                        <h4 className="font-medium text-iare-blue">Entrepreneurship Programs</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">Startup Bootcamp</h5>
                            <p className="text-sm text-gray-600">
                              Intensive training program covering all aspects of launching a startup.
                            </p>
                          </div>
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">Business Plan Competitions</h5>
                            <p className="text-sm text-gray-600">
                              Competitions for developing and pitching viable business plans.
                            </p>
                          </div>
                          <div className="border-b pb-3">
                            <h5 className="font-medium mb-1">E-Cell Activities</h5>
                            <p className="text-sm text-gray-600">
                              Student-run Entrepreneurship Cell organizing workshops, talks, and networking events.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Startup Weekend</h5>
                            <p className="text-sm text-gray-600">
                              54-hour weekend event where teams work to create a minimal viable product.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium text-iare-blue flex items-center mb-4">
                      <Clock className="w-5 h-5 mr-2" /> Upcoming Programs
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {upcomingPrograms.map((program, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-gray-50 p-4 flex items-center justify-center">
                            {program.icon}
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium text-iare-maroon">{program.title}</h5>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mb-3">
                              <Clock className="w-3.5 h-3.5 mr-1" />
                              <span>{program.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                            <div className="text-xs">
                              <span className="font-medium text-iare-blue">Eligibility:</span> {program.eligibility}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="incubation" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Incubation & Support</h3>
                  <p className="text-gray-700 mb-6">
                    Our incubation center provides comprehensive support to student startups, helping them transform innovative ideas into successful ventures.
                  </p>

                  <div className="mb-8">
                    <div className="relative border rounded-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 bg-iare-blue/10 flex items-center justify-center">
                          <img className='h-full' src="https://media.istockphoto.com/id/1131588991/vector/businesspeople-brainstorming-successful-startup-idea-sitting-at-table-in-a-shape-of-bright.jpg?s=612x612&w=0&k=20&c=iqWyGYsHlGAJeRC-B_0gzZ0Egfzh0BOFD7Ku7dV0rmA=" alt="" />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h4 className="text-lg font-semibold text-iare-maroon mb-3">SVUCE Startup Incubation Center</h4>
                          <p className="text-gray-600 mb-4">
                            Established in 2018, our incubation center provides a nurturing environment for student startups to grow and thrive. We offer workspace, mentorship, funding opportunities, and networking connections to help startups overcome challenges and achieve success.
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                            <div className="bg-gray-50 p-3 rounded border">
                              <p className="text-lg font-bold text-iare-teal">30+</p>
                              <p className="text-xs">Active Startups</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded border">
                              <p className="text-lg font-bold text-iare-teal">10K sq.ft</p>
                              <p className="text-xs">Workspace</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded border">
                              <p className="text-lg font-bold text-iare-teal">50+</p>
                              <p className="text-xs">Mentors</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded border">
                              <p className="text-lg font-bold text-iare-teal">₹2Cr+</p>
                              <p className="text-xs">Funding Secured</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3 flex items-center justify-center">
                        <h4 className="font-medium text-iare-blue">Infrastructure Support</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Fully furnished co-working space</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Private meeting rooms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>High-speed internet connectivity</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>24/7 access to incubation center</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Access to labs and equipment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Prototype development facilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3 flex items-center justify-center">
                        <h4 className="font-medium text-iare-blue">Mentorship & Training</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>One-on-one mentorship from experts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Specialized workshops and training</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Legal and intellectual property support</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Business model development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Marketing and sales strategy</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Pitching and presentation skills</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3 flex items-center justify-center">
                        <h4 className="font-medium text-iare-blue">Funding & Networking</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Seed funding opportunities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Investor connect programs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Government scheme facilitation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Industry networking events</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Partnership opportunities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-iare-teal mt-1.5 mr-2"></span>
                            <span>Demo days with investors</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h4 className="font-medium text-iare-blue mb-3">How to Apply for Incubation</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Submit Application</p>
                          <p className="text-sm text-gray-600">Fill out the application form with details about your startup idea.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Initial Screening</p>
                          <p className="text-sm text-gray-600">Applications are reviewed by our selection committee based on innovation and viability.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Pitch Presentation</p>
                          <p className="text-sm text-gray-600">Shortlisted teams present their ideas to the incubation committee.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-iare-teal text-white flex items-center justify-center mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Selection & Onboarding</p>
                          <p className="text-sm text-gray-600">Selected startups sign an agreement and begin the incubation process.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </TabsContent>

                <TabsContent value="success" className="p-6">
                  <h3 className="text-lg font-semibold text-iare-maroon mb-4">Success Stories</h3>
                  <p className="text-gray-700 mb-6">
                    Our incubation center has nurtured several successful startups founded by our students. Here are some inspiring success stories.
                  </p>

                  <div className="space-y-8">
                    {successStories.map((story, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/4">
                            <div className="h-full">
                              <img
                                src={story.image}
                                alt={story.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-3/4 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-iare-blue">{story.name}</h4>
                              <span className="text-xs font-medium bg-iare-teal/20 text-iare-teal px-2 py-1 rounded">
                                Founded {story.year}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-gray-600 mb-3">
                              Founders: {story.founders}
                            </p>
                            <p className="text-gray-700 mb-3">{story.description}</p>
                            <div className="flex items-start">
                              <Target className="w-4 h-4 text-iare-teal mr-2 mt-0.5" />
                              <p className="text-sm">
                                <span className="font-medium">Achievements:</span> {story.achievements}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-iare-blue/5 p-4 rounded-lg border border-iare-blue/20">
                    <h4 className="font-medium text-iare-blue mb-3">Startup Showcase</h4>

                    <div className="md:flex items-center">
                      <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                        <p className="text-sm text-gray-700 mb-3">
                          Every year, we organize a Startup Showcase where incubated startups present their products and services to investors, industry experts, and the public. It's a great opportunity for startups to gain visibility and attract investment.
                        </p>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-iare-teal mr-2" />
                          <p className="text-sm">
                            <span className="font-medium">Next Showcase:</span> August 15, 2025
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/3">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-white p-2 rounded border">
                            <BarChart className="w-6 h-6 text-iare-teal mx-auto mb-1" />
                            <p className="text-xs font-medium">30+</p>
                            <p className="text-xs text-gray-600">Startups</p>
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <Users className="w-6 h-6 text-iare-teal mx-auto mb-1" />
                            <p className="text-xs font-medium">50+</p>
                            <p className="text-xs text-gray-600">Investors</p>
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <Briefcase className="w-6 h-6 text-iare-teal mx-auto mb-1" />
                            <p className="text-xs font-medium">₹1Cr+</p>
                            <p className="text-xs text-gray-600">Investments</p>
                          </div>
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

export default Innovation;
