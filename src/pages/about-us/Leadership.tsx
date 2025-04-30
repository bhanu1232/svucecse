
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, Phone } from 'lucide-react';

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Prof. Ramachandra Rao",
      position: "Vice Chancellor",
      qualification: "Ph.D. in Computer Science",
      experience: "30+ years of academic experience",
      bio: "Prof. Ramachandra Rao is an eminent researcher and academician with extensive experience in higher education administration. He has published over 150 research papers in reputed international journals and conferences.",
      image: "/placeholder.svg",
      email: "vc@svuce.ac.in",
      phone: "+91-9876543210"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Pro Vice Chancellor",
      qualification: "Ph.D. in Electronics Engineering",
      experience: "25+ years of research experience",
      bio: "Prof. Sunita Sharma is a distinguished researcher with significant contributions to the field of VLSI design. She has led multiple funded research projects and has been recognized with several national awards.",
      image: "/placeholder.svg",
      email: "provc@svuce.ac.in",
      phone: "+91-9876543211"
    },
    {
      name: "Dr. Vijay Kumar",
      position: "Registrar",
      qualification: "Ph.D. in Administrative Sciences",
      experience: "20+ years of administrative experience",
      bio: "Dr. Vijay Kumar brings a wealth of experience in academic administration and management. He has successfully implemented several reforms to improve the efficiency of administrative processes.",
      image: "/placeholder.svg",
      email: "registrar@svuce.ac.in",
      phone: "+91-9876543212"
    },
    {
      name: "Prof. Meenakshi Reddy",
      position: "Dean of Academic Affairs",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "22+ years of teaching and research",
      bio: "Prof. Meenakshi Reddy oversees curriculum development, academic regulations, and quality assurance processes. Her expertise has been instrumental in obtaining accreditation for various programs.",
      image: "/placeholder.svg",
      email: "dean.academics@svuce.ac.in",
      phone: "+91-9876543213"
    },
    {
      name: "Prof. Anand Kumar",
      position: "Dean of Research",
      qualification: "Ph.D. in Artificial Intelligence",
      experience: "18+ years of research experience",
      bio: "Prof. Anand Kumar leads the university's research initiatives and facilitates interdisciplinary research collaborations. He has significant experience in securing research grants and establishing research centers.",
      image: "/placeholder.svg",
      email: "dean.research@svuce.ac.in",
      phone: "+91-9876543214"
    },
    {
      name: "Dr. Priya Malhotra",
      position: "Dean of Student Affairs",
      qualification: "Ph.D. in Psychology",
      experience: "15+ years in student counseling",
      bio: "Dr. Priya Malhotra is responsible for student welfare, extracurricular activities, and counseling services. She has developed innovative programs for enhancing student engagement and mental well-being.",
      image: "/placeholder.svg",
      email: "dean.students@svuce.ac.in",
      phone: "+91-9876543215"
    },
    {
      name: "Prof. Rajendra Singh",
      position: "Controller of Examinations",
      qualification: "Ph.D. in Mathematics",
      experience: "20+ years in academia",
      bio: "Prof. Rajendra Singh manages the examination and evaluation processes of the university. He has implemented robust examination systems ensuring transparency and fairness.",
      image: "/placeholder.svg",
      email: "coe@svuce.ac.in",
      phone: "+91-9876543216"
    },
    {
      name: "Dr. Lakshmi Narayan",
      position: "Finance Officer",
      qualification: "Ph.D. in Financial Management",
      experience: "22+ years in financial administration",
      bio: "Dr. Lakshmi Narayan handles financial planning, budgeting, and audit processes. His expertise has been crucial in ensuring the financial stability and sustainability of the institution.",
      image: "/placeholder.svg",
      email: "finance@svuce.ac.in",
      phone: "+91-9876543217"
    }
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
              <li className="flex items-center">
                <Link to="/about-us" className="text-iare-blue hover:text-iare-teal">About Us</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">Leadership</li>
            </ol>
          </nav>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">University Leadership</h1>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Executive Council</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.slice(0, 3).map((leader, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-56 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-40 h-40 object-cover rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-iare-blue text-lg">{leader.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{leader.position}</p>
                    <div className="text-sm text-gray-700 mb-3">
                      <p className="mb-1"><strong>Qualification:</strong> {leader.qualification}</p>
                      <p><strong>Experience:</strong> {leader.experience}</p>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{leader.bio}</p>
                    <div className="flex items-center text-iare-teal mb-1">
                      <Mail size={14} className="mr-1" />
                      <a href={`mailto:${leader.email}`} className="text-iare-teal hover:underline">{leader.email}</a>
                    </div>
                    <div className="flex items-center text-iare-teal">
                      <Phone size={14} className="mr-1" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Academic & Administrative Heads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.slice(3).map((leader, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-24 h-24 object-cover rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-iare-blue">{leader.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{leader.position}</p>
                    <div className="text-sm text-gray-700 mb-3">
                      <p className="mb-1"><strong>Qualification:</strong> {leader.qualification}</p>
                      <p><strong>Experience:</strong> {leader.experience}</p>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{leader.bio}</p>
                    <div className="flex items-center text-iare-teal mb-1">
                      <Mail size={14} className="mr-1" />
                      <a href={`mailto:${leader.email}`} className="text-iare-teal hover:underline">{leader.email}</a>
                    </div>
                    <div className="flex items-center text-iare-teal">
                      <Phone size={14} className="mr-1" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
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

export default Leadership;
