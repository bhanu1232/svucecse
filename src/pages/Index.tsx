
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRight, Book, Award, GraduationCap, Briefcase,
  ChevronRight, Brain, Server, Grid, Code, Network, Globe
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  const carouselImages = [
    {
      url: "/main.avif",
      title: "Innovation in Computer Science Education"
    },

    {
      url: "https://svuniversity.edu.in/storage/2022/10/Computer-Science-and-Engineering-Lab-3-scaled.jpg",
      title: "Excellence in Research and Development"
    }
  ];

  const cseAchievements = [
    {
      title: "Placement Rate",
      value: "78%",
      icon: <Briefcase className="w-10 h-10 text-white" />
    },
    {
      title: "Research Publications",
      value: "120+",
      icon: <Book className="w-10 h-10 text-white" />
    },
    {
      title: "Faculty with PhD",
      value: "75%",
      icon: <GraduationCap className="w-10 h-10 text-white" />
    },
    {
      title: "Innovative Projects",
      value: "250+",
      icon: <Award className="w-10 h-10 text-white" />
    }
  ];

  const cseSpecializations = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-8 h-8 text-iare-blue" />,
      description: "Exploring neural networks, deep learning, natural language processing, and computer vision applications."
    },
    {
      title: "Cloud Computing & DevOps",
      icon: <Server className="w-8 h-8 text-iare-teal" />,
      description: "Learning cloud architecture, virtualization, containerization, and CI/CD pipelines."
    },
    {
      title: "Data Science & Big Data Analytics",
      icon: <Grid className="w-8 h-8 text-iare-yellow" />,
      description: "Analyzing large datasets, data visualization, statistical modeling, and predictive analytics."
    },
    {
      title: "Internet of Things & Embedded Systems",
      icon: <Network className="w-8 h-8 text-iare-blue" />,
      description: "Building connected devices, sensor networks, and real-time systems for smart applications."
    },
    {
      title: "Cyber Security & Blockchain",
      icon: <Code className="w-8 h-8 text-iare-teal" />,
      description: "Implementing security protocols, ethical hacking, digital forensics, and blockchain applications."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-8 h-8 text-iare-yellow" />,
      description: "Creating responsive web applications and cross-platform mobile solutions with modern frameworks."
    }
  ];

  const news = [
    {
      date: "April 5, 2025",
      title: "CSE Students Win  Hackathon",
      content: "A team of 3 CSE students won the first prize at the Coding Hackathon held in Tiruvantapuram."
    },
    {
      date: "March 27, 2025",
      title: "Department of CSE Hosts National Level Symposium",
      content: "The Department of Computer Science & Engineering hosted a two-day national-level Tech Fest featuring a vibrant mix of technical and non-technical events, celebrating innovation, creativity, and collaboration across various domains of technology"
    },
    {
      date: "March 2025",
      title: "Students Crack GATE, CAT & Enter Premier Institutes",
      content: "CSE students secured admissions into IIT Madras, IISC Bangalore, IIM Lucknow, and more through GATE & CAT with top scores."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const buttons = document.querySelectorAll('.carousel-button-next');
      if (buttons.length > 0) {
        (buttons[0] as HTMLButtonElement).click();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] overflow-hidden">
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-[85vh]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.url})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-6xl">
                      <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg mb-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">{image.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90">Department of Computer Science & Engineering</p>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-6">
                        <Link
                          to="/student-services"
                          className="bg-iare-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center"
                        >
                          Explore Programs <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <Link
                          to="/about-us"
                          className="border border-white/50 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/90 transition-all"
                  onClick={() => {/* Add manual slide navigation if needed */ }}
                />
              ))}
            </div>
          </Carousel>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <span className="bg-blue-100 text-iare-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Excellence Metrics
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Department at a Glance</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Setting new standards in computing education with outstanding outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cseAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-8 rounded-xl shadow hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-iare-blue to-blue-600 p-4 rounded-full text-white group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{achievement.value}</h3>
                  <p className="text-gray-600">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <span className="bg-blue-100 text-iare-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Focus Areas
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Specialization</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Cutting-edge domains where our faculty and students excel in research and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cseSpecializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-semibold ml-4 group-hover:text-iare-blue">{spec.title}</h3>
                  </div>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <span className="bg-blue-100 text-iare-blue px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Latest Updates
                </span>
                <h2 className="text-4xl font-bold text-gray-900">Department News</h2>
              </div>
              <Link to="/news" className="text-iare-blue font-semibold flex items-center group hover:text-blue-700">
                View All News <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-all group"
                >
                  <div className="text-iare-yellow font-semibold mb-2">{item.date}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-iare-blue">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <Link to="/news" className="text-iare-blue font-medium flex items-center group-hover:text-blue-700">
                    Read More <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>

  );
};

export default Index;
