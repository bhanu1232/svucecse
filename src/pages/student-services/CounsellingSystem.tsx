
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const CounsellingSystem = () => {
  const counsellorData = [
    // {
    //   name: "Dr. Ch.D.V. Subba Rao",
    //   department: "Computer Science & Engineering",
    //   email: "subbarao_chdv@hotmail.com",
    //   phone: "+91 9849879861"
    // },
    {
      name: "Dr. M. Humera Khanam",
      department: "Computer Science & Engineering",
      email: "phumera.svec@gmail.com",
      phone: "+91-9490923045"
    },
    {
      name: "Dr. D. Vivekananda Reddy",
      department: "Computer Science & Engineering",
      email: "svuvivek@gmail.com",
      phone: "+91 9441005225"
    },
    {
      name: "Dr. N. Usha Rani",
      department: "Computer Science & Engineering",
      email: "usharani.ur@gmail.com",
      phone: "+91-9493564899"
    },
    {
      name: "Dr. Suresh Kumar Reddy K",
      department: "Computer Science & Engineering",
      email: "sureshreddysvu@gmail.com",
      phone: "+91-9701207488"
    },
    {
      name: "Ms. T. Hemalatha",
      department: "Computer Science & Engineering",
      email: "thirupathuruhemalatha@gmail.com",
      phone: "+91-8978227231"
    },
    {
      name: "Mr. K Venkata Chalapathi",
      department: "Computer Science & Engineering",
      email: "venkata.chalapathi87@gmail.com",
      phone: "+91-9652621516"
    },
    {
      name: "Mr. J. Sreekanth Reddy",
      department: "Computer Science & Engineering",
      email: "sjsreddy99492@gmail.com",
      phone: "+91-9949298398"
    },
    {
      name: "Mrs. D. Kalpana Chowdary",
      department: "Computer Science & Engineering",
      email: "dutulurukalapana@gmail.com",
      phone: "+91-9618139191"
    },
    {
      name: "Ms. P. Hima Chandana",
      department: "Computer Science & Engineering",
      email: "hima8022@gmail.com",
      phone: "+91-9642052535"
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
                <li className="flex items-center text-gray-500">Student Counselling System</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Counselling System</h1>

            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">About the Counselling System</h2>

              <p className="mb-4">
                The Student Counselling System at Sri Venkateswara University College of Engineering is a structured support system aimed at addressing the academic, personal, and emotional needs of students. Each student is assigned a dedicated faculty counsellor who acts as a mentor and guide throughout their academic journey.
              </p>

              <p className="mb-4">
                This system fosters a supportive environment where students can openly share their concerns, seek academic guidance, and receive help in overcoming personal challenges that may impact their overall performance and well-being.
              </p>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Objectives</h2>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Monitor and support students' academic progress</li>
                <li>Identify and address learning difficulties and barriers</li>
                <li>Provide guidance on course selection and career planning</li>
                <li>Offer emotional support and help with personal issues</li>
                <li>Facilitate communication between students, faculty, and administration</li>
                <li>Promote overall student well-being and development</li>
              </ul>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Counselling Process</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">1</div>
                  <h3 className="font-semibold mb-2">Counsellor Assignment</h3>
                  <p className="text-sm">
                    Each student is assigned a faculty counsellor at the beginning of the academic year.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">2</div>
                  <h3 className="font-semibold mb-2">Regular Meetings</h3>
                  <p className="text-sm">
                    Scheduled counselling sessions are conducted at least twice a month.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">3</div>
                  <h3 className="font-semibold mb-2">Progress Monitoring</h3>
                  <p className="text-sm">
                    Academic performance and attendance are monitored and discussed.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">4</div>
                  <h3 className="font-semibold mb-2">Issue Identification</h3>
                  <p className="text-sm">
                    Academic or personal issues affecting performance are identified.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">5</div>
                  <h3 className="font-semibold mb-2">Intervention Planning</h3>
                  <p className="text-sm">
                    Strategies to address issues are developed collaboratively.
                  </p>
                </div>

                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">6</div>
                  <h3 className="font-semibold mb-2">Follow-up</h3>
                  <p className="text-sm">
                    Implementation of strategies is monitored and adjusted as needed.
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Department Counsellors</h2>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border rounded">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Counsellor Name</th>
                      <th className="py-2 px-4 text-left">Department</th>
                      <th className="py-2 px-4 text-left">Email</th>
                      <th className="py-2 px-4 text-left">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {counsellorData.map((counsellor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 border-b">{counsellor.name}</td>
                        <td className="py-2 px-4 border-b">{counsellor.department}</td>
                        <td className="py-2 px-4 border-b">{counsellor.email}</td>
                        <td className="py-2 px-4 border-b">{counsellor.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CounsellingSystem;
