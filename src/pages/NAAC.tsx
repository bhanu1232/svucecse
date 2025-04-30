
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Download, ExternalLink, Award, CheckCircle, Calendar, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const NAAC = () => {
  const naacCriteria = [
    {
      title: "Curricular Aspects",
      icon: <FileText className="w-6 h-6 text-iare-teal" />,
      description: "Academic flexibility, curriculum enrichment, and feedback system"
    },
    {
      title: "Teaching-Learning and Evaluation",
      icon: <Users className="w-6 h-6 text-iare-teal" />,
      description: "Student enrollment, catering to student diversity, teaching-learning process"
    },
    {
      title: "Research, Innovations and Extension",
      icon: <Award className="w-6 h-6 text-iare-teal" />,
      description: "Promotion of research and facilities, resource mobilization for research"
    },
    {
      title: "Infrastructure and Learning Resources",
      icon: <BarChart className="w-6 h-6 text-iare-teal" />,
      description: "Physical facilities, library as a learning resource, IT infrastructure"
    },
    {
      title: "Student Support and Progression",
      icon: <CheckCircle className="w-6 h-6 text-iare-teal" />,
      description: "Student support, student progression, student participation and activities"
    },
    {
      title: "Governance, Leadership and Management",
      icon: <Users className="w-6 h-6 text-iare-teal" />,
      description: "Institutional vision and leadership, strategy development and deployment"
    },
    {
      title: "Institutional Values and Best Practices",
      icon: <Calendar className="w-6 h-6 text-iare-teal" />,
      description: "Institutional values and social responsibilities, best practices"
    }
  ];

  const documents = [
    { title: "Self Study Report (SSR)", format: "PDF" },
    { title: "Annual Quality Assurance Report (AQAR)", format: "PDF" },
    { title: "NAAC Accreditation Certificate", format: "PDF" },
    { title: "SVUCE NAAC Grade Sheet", format: "PDF" },
    { title: "Institutional Information for Quality Assessment (IIQA)", format: "PDF" },
    { title: "Extended Profile and Criteria Wise Metrics (ECM)", format: "PDF" }
  ];

  const timeline = [
    { year: "2022", event: "Achieved A+ grade with CGPA of 3.71 on a 4-point scale" },
    { year: "2017", event: "Reaccredited with A grade in the 3rd Cycle" },
    { year: "2010", event: "Reaccredited with A grade in the 2nd Cycle" },
    { year: "2004", event: "First accredited with A grade" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero Section - Simplified */}
        <div className="bg-gradient-to-r from-iare-blue to-iare-teal text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">NAAC Accreditation</h1>
            <p className="text-lg max-w-2xl mx-auto">
              National Assessment and Accreditation Council (NAAC) accreditation is a performance assessment to evaluate the quality of education at SVUCE
            </p>
          </div>
        </div>

        {/* NAAC Grade Section - More minimal */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-iare-blue text-center">Accreditation Status</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded p-4 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-iare-teal mb-1">A+</div>
                  <div className="text-gray-600 text-sm">Grade</div>
                </div>
                <div className="bg-white rounded p-4 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-iare-teal mb-1">3.71</div>
                  <div className="text-gray-600 text-sm">CGPA (out of 4)</div>
                </div>
                <div className="bg-white rounded p-4 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-iare-teal mb-1">4th</div>
                  <div className="text-gray-600 text-sm">Cycle</div>
                </div>
                <div className="bg-white rounded p-4 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-iare-teal mb-1">2022</div>
                  <div className="text-gray-600 text-sm">Valid Until 2029</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section - Added as a simple, clean timeline */}
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-iare-blue text-center">Accreditation History</h2>
            <div className="max-w-3xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-24">Year</TableHead>
                    <TableHead>Achievement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeline.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.year}</TableCell>
                      <TableCell>{item.event}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* NAAC Criteria - Streamlined layout */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-iare-blue text-center">Assessment Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {naacCriteria.map((criterion, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded border border-gray-100">
                  <div className="mr-3 bg-gray-100 p-2 rounded">{criterion.icon}</div>
                  <div>
                    <h3 className="font-medium text-base mb-1 text-iare-blue">Criterion {index + 1}: {criterion.title}</h3>
                    <p className="text-gray-600 text-sm">{criterion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Section - Clean list */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-iare-blue text-center">Key Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {documents.map((document, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-center">
                  <FileText className="text-iare-blue mr-3 flex-shrink-0" size={20} />
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">{document.title}</h3>
                    <p className="text-gray-500 text-xs">{document.format}</p>
                  </div>
                  <button className="text-iare-teal hover:text-iare-blue transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IQAC Section - Simplified */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-iare-blue text-center">Internal Quality Assurance Cell</h2>
            <div className="bg-gray-50 rounded p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold mb-4 text-iare-blue">IQAC Objectives</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Develop a system for conscious, consistent and catalytic improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Promote quality enhancement through internalization of quality culture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Ensure timely, efficient performance of academic and administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Coordinate quality-related activities and dissemination of best practices</span>
                </li>
              </ul>

              <div className="mt-4 text-center">
                <Link to="https://www.nls.ac.in/about/internal-quality-assurance-cell-iqac/" target='blank' className="inline-flex items-center bg-iare-blue text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  Visit IQAC Page <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NAAC;
