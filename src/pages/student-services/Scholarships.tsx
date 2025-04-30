
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '../../components/ui/tabs';

const Scholarships = () => {
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
                <li className="flex items-center text-gray-500">Scholarships</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Scholarships</h1>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="government">Government Scholarships</TabsTrigger>
                <TabsTrigger value="non-government">Non-Government Scholarships</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Scholarship Facilities</h2>
                <p className="mb-4">
                  Institute of Aeronautical Engineering has been facilitating numerous scholarships for the students in all branches. We make sure all students who are eligible for various scholarships from the government will get their allotted scholarships on time through our dedicated scholarship section.
                </p>
                <p className="mb-6">
                  The institute believes in honoring merit and has been offering merit scholarships to both UG and PG admitted students and continuing students.
                </p>

                <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">Scholarship Application Process</h3>
                  <p className="mb-2">
                    To apply for scholarships, please visit the Scholarship Section at the Administrative Block or contact:
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="government" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Government Scholarships</h2>

                <p className="mb-4">
                  Students belonging to SC, ST, BC, EBC, Disabled, Minorities can avail scholarships offered by both Central and State Governments.
                </p>

                <h3 className="text-lg font-semibold text-iare-blue mb-2">Current Schemes</h3>

                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-iare-darkblue text-white">Scheme Name</TableHead>
                      <TableHead className="bg-iare-darkblue text-white">Eligibility</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">State Government Fee Reimbursement</TableCell>
                      <TableCell>Students with parental income less than Rs.2.0 lakhs per annum</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Post-Matric Scholarships</TableCell>
                      <TableCell>For SC/ST/OBC students</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Central Sector Scholarship</TableCell>
                      <TableCell>Top 20 percentile students from economically weaker sections</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Prime Minister's Scholarship Scheme</TableCell>
                      <TableCell>For wards of ex-servicemen/ex-para-military personnel</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Minority Scholarships</TableCell>
                      <TableCell>For students from minority communities</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pragati Scholarship (AICTE)</TableCell>
                      <TableCell>For girl students in technical education</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="bg-iare-gray p-4 rounded-md mb-6">
                  <h4 className="font-semibold mb-2">Required Documents</h4>
                  <ul className="list-disc pl-6">
                    <li>Income certificate</li>
                    <li>Caste certificate</li>
                    <li>Aadhaar card</li>
                    <li>Previous educational certificates</li>
                    <li>Bank account details (with Aadhaar linkage)</li>
                    <li>Recent passport-sized photographs</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="non-government" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Non-Government Scholarships</h2>

                <p className="mb-4">
                  Various non-government organizations, foundations, and institutions offer scholarships to deserving students based on merit, community, economic background, and other criteria.
                </p>

                <h3 className="text-lg font-semibold text-iare-blue mb-2">Available Non-Government Scholarships</h3>

                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-iare-darkblue text-white w-1/12">No</TableHead>
                      <TableHead className="bg-iare-darkblue text-white w-3/12">Scholarship</TableHead>
                      <TableHead className="bg-iare-darkblue text-white w-4/12">Scholarship Details</TableHead>
                      <TableHead className="bg-iare-darkblue text-white w-4/12">Scholarship Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="font-medium">
                        LIC Golden Jubilee Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Family Annual Income should be less than or equal to Rs 2,00,000</TableCell>
                      <TableCell>Scholarship amount is Rs.20,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell className="font-medium">
                        Santoor Women's Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Passed class 12 from a government school/junior college</TableCell>
                      <TableCell>Scholarship amount is Rs.24,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell className="font-medium">
                        South Central Railway Employees Co Op Credit Society Ltd Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Parent should be a railway employee</TableCell>
                      <TableCell>Scholarship amount is Rs.6,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell className="font-medium">
                        IAFBA Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>
                        <ol className="list-decimal pl-4">
                          <li>Excel in sports</li>
                          <li>Children of serving IAF</li>
                        </ol>
                      </TableCell>
                      <TableCell>Scholarship amount is Rs.3,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell className="font-medium">
                        Merit Scholarship Telangana State Police Education Fund
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Children of serving TS Police Department</TableCell>
                      <TableCell>Scholarship amount is Rs.10,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell className="font-medium">
                        Scholarship Under Sri Ramanuja Scheme
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>
                        <ol className="list-decimal pl-4">
                          <li>Applicant must belong to Brahmin community</li>
                          <li>Family Annual Income should be less than or equal to Rs.1,50,000 in rural and Rs 2,00,000 in urban Areas</li>
                        </ol>
                      </TableCell>
                      <TableCell>Full Fee reimbursement as Scholarship</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell className="font-medium">
                        Reddy Jana Sangham Foundation U.S.A Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Applicant must belong to Reddy community</TableCell>
                      <TableCell>Scholarship amount is Rs.8,000 per year approximately</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell className="font-medium">
                        North South Foundation College Scholarship
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">Click here to Apply</div>
                      </TableCell>
                      <TableCell>Family Annual Income should be less than or equal to Rs 1,20,000</TableCell>
                      <TableCell>Scholarship amount is Rs.25,000 per year approximately</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarships;
