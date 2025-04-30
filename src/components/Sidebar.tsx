
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Separator } from './ui/separator';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/student-services", label: "Home" },
    { path: "/student-services/learning-technologies", label: "Learning and Educational Technologies" },
    { path: "/student-services/experiential-learning", label: "Experiential Learning (ExL)" },
    { path: "/student-services/self-learning", label: "Self Learning" },
    { path: "/student-services/career-guidance", label: "Career Guidance and Counselling" },
    { path: "/student-services/counselling-system", label: "Student Counselling System" },
    { path: "/student-services/development-program", label: "Student Development Program" },
    { path: "/student-services/certifications", label: "Certifications" },
    { path: "/student-services/innovation", label: "Innovation Creativity Entrepreneurship" },
    { path: "/student-services/projects", label: "Projects | Mockups | Competitions" },
    { path: "/student-services/scholarships", label: "Scholarships" },
    { path: "/student-services/medical-centre", label: "Medical Centre" },
    { path: "/student-services/employability", label: "Career and Employability Skills" },
    { path: "/student-services/competency", label: "Competency Building and Consultancy" },
    { path: "/student-services/support-hub", label: "Student Learning Support Hub" },
  ];

  return (
    <div className="w-full bg-white border rounded shadow">
      <div className="bg-iare-teal text-white py-3 px-4 font-semibold">
        Student Services
      </div>
      <ul className="py-2">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`py-2 px-4 ${location.pathname === item.path ? 'bg-gray-100 font-medium text-iare-blue' : 'hover:bg-gray-50'}`}
          >
            <Link to={item.path} className="flex items-center">
              <ChevronRight size={16} className={`mr-2 ${location.pathname === item.path ? 'text-iare-teal' : 'text-gray-400'}`} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
