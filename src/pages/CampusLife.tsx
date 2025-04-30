
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Activity, Award, Book, Coffee, Users, Leaf, Sun, Home, MapPin, Utensils, Bus, Building, Camera } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CampusLife = () => {
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
              <li className="flex items-center text-gray-500">Campus Life</li>
            </ol>
          </nav>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Campus Life</h1>
          {/* Hero Section */}
          <div className="relative h-64 md:h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src="/main.avif"
              alt="IARE Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-iare-blue/80 to-transparent flex items-center">
              <div className="text-white p-6 md:p-12 max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience Campus Life</h2>
                <p className="text-white/90">
                  Where learning meets living in a vibrant community
                </p>
              </div>
            </div>
          </div>

          {/* About Campus Life - Tab View */}
          <div className="bg-white rounded-lg shadow-sm border mb-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-4 bg-gray-50 rounded-t-lg border-b p-0">
                <TabsTrigger value="overview" className="py-3 rounded-none rounded-tl-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal">Overview</TabsTrigger>
                <TabsTrigger value="facilities" className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-iare-teal">Facilities</TabsTrigger>
                <TabsTrigger value="activities" className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-iare-teal">Activities</TabsTrigger>
                <TabsTrigger value="accommodation" className="py-3 rounded-none rounded-tr-lg data-[state=active]:border-b-2 data-[state=active]:border-iare-teal">Accommodation</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-semibold text-iare-maroon mb-4">Life at SVUCE</h3>
                    <p className="text-gray-700 mb-4">
                      Campus life at SVUCE extends beyond academics to provide a holistic development environment. Our campus
                      is a thriving community where students engage in various extracurricular activities, develop leadership
                      skills, form lifelong friendships, and create memories that last a lifetime.
                    </p>
                    <p className="text-gray-700">
                      We believe that learning happens both inside and outside the classroom. Our well-planned campus features
                      modern infrastructure, comfortable accommodation, diverse dining options, extensive sports facilities, and
                      spaces that foster creativity, innovation, and collaboration.
                    </p>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-gray-50">
                        <Users className="w-8 h-8 text-iare-teal mb-2" />
                        <span className="font-medium">15+</span>
                        <span className="text-sm text-gray-600">Student Clubs</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-gray-50">
                        <Activity className="w-8 h-8 text-iare-teal mb-2" />
                        <span className="font-medium">10+</span>
                        <span className="text-sm text-gray-600">Annual Events</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-gray-50">
                        <Award className="w-8 h-8 text-iare-teal mb-2" />
                        <span className="font-medium">15+</span>
                        <span className="text-sm text-gray-600">Sports Teams</span>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-gray-50">
                        <Book className="w-8 h-8 text-iare-teal mb-2" />
                        <span className="font-medium">10K+</span>
                        <span className="text-sm text-gray-600">Library Books</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3">
                    <div className="h-full bg-gray-50 rounded-lg p-5 border">
                      <h3 className="text-lg font-semibold text-iare-maroon mb-4">Campus Highlights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <MapPin className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Strategic Location</p>
                            <p className="text-sm text-gray-600">Located in the heart of the city with easy accessibility</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Building className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Modern Infrastructure</p>
                            <p className="text-sm text-gray-600">State-of-the-art buildings and facilities</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Leaf className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Green Campus</p>
                            <p className="text-sm text-gray-600">Eco-friendly campus with lush green landscapes</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Sun className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Solar Powered</p>
                            <p className="text-sm text-gray-600">Sustainable energy with solar power installations</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="facilities" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-3 mb-2">
                    <h3 className="text-lg font-semibold text-iare-maroon mb-3">World-Class Facilities</h3>
                    <p className="text-gray-700">Our campus is equipped with modern facilities designed to enhance student learning and experience.</p>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="https://www.svulibrary.ac.in/data1/images/image.jpg" alt="Library" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Book className="w-4 h-4 mr-2" /> Central Library
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        A spacious library with over 100,000 books, digital resources, and quiet study areas. Open 24/7 during exam seasons.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="https://img.freepik.com/premium-vector/charming-vector-illustration-sports-hall-icon-vector-illustration_1325322-25658.jpg" alt="Sports Complex" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Activity className="w-4 h-4 mr-2" /> Sports Complex
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Multi-sport facility with indoor and outdoor courts, cricket ground, swimming pool, and fitness center.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="https://svuniversity.edu.in/storage/2022/08/download-1.jpg" alt="Cafeteria" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Coffee className="w-4 h-4 mr-2" /> Canteen
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Multiple dining options serving a variety of cuisines at affordable prices, with hygiene as the top priority.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="https://images.shiksha.com/mediadata/images/1742186850php8rAWpJ.jpeg" alt="Auditorium" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Users className="w-4 h-4 mr-2" /> Auditorium
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Modern auditorium with a seating capacity of 1000, equipped with state-of-the-art sound and lighting systems.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="https://svuniversity.edu.in/storage/2021/12/DSC04929-scaled.jpg" alt="Labs" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Award className="w-4 h-4 mr-2" /> Labs
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Advanced laboratories equipped with cutting-edge technology and equipment for various disciplines.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img src="/main.avif" alt="Labs" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-iare-blue flex items-center">
                        <Activity className="w-4 h-4 mr-2" /> Wi-Fi Campus
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        High-speed internet connectivity throughout the campus with dedicated bandwidth for academic purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="p-6">
                <h3 className="text-lg font-semibold text-iare-maroon mb-4">Student Activities & Clubs</h3>
                <p className="text-gray-700 mb-6">
                  We offer a wide range of extracurricular activities to help students develop leadership skills, pursue their interests, and build a well-rounded personality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3 flex items-center">
                      <Camera className="w-5 h-5 text-iare-teal mr-2" />
                      <h4 className="font-medium text-iare-blue">Cultural Activities</h4>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded text-sm border">Music Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Dance Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Drama Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Art Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Photography Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Literary Club</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Regular events include annual cultural fest, music concerts, dance competitions, art exhibitions, and theatrical performances.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3 flex items-center">
                      <Award className="w-5 h-5 text-iare-teal mr-2" />
                      <h4 className="font-medium text-iare-blue">Technical Activities</h4>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded text-sm border">Coding Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Robotics Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">AI Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">IoT Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">IEEE Student Branch</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Cyber Security Club</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Activities include hackathons, coding competitions, tech workshops, tech talks by industry experts, and project exhibitions.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3 flex items-center">
                      <Activity className="w-5 h-5 text-iare-teal mr-2" />
                      <h4 className="font-medium text-iare-blue">Sports Activities</h4>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded text-sm border">Cricket</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Football</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Basketball</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Volleyball</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Tennis</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Athletics</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Annual sports meet, inter-college tournaments, fitness programs, and opportunities to represent the university at state and national levels.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3 flex items-center">
                      <Users className="w-5 h-5 text-iare-teal mr-2" />
                      <h4 className="font-medium text-iare-blue">Social Activities</h4>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded text-sm border">NSS</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">NCC</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Social Service Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Environmental Club</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Red Cross</div>
                        <div className="bg-gray-50 p-3 rounded text-sm border">Youth Red Cross</div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Blood donation camps, tree plantation drives, village adoption programs, awareness campaigns, and disaster relief initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accommodation" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-iare-maroon mb-4">Hostel Facilities</h3>
                    <p className="text-gray-700 mb-4">
                      Our on-campus hostels provide a safe, comfortable, and conducive environment for students to live and study.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Home className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Separate Hostels</p>
                          <p className="text-sm text-gray-600">Separate hostels for boys and girls with 24/7 security</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Room Options</p>
                          <p className="text-sm text-gray-600">Single, double, and triple occupancy rooms available</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Utensils className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Mess Facilities</p>
                          <p className="text-sm text-gray-600">Hygienic and nutritious meals served in spacious dining halls</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Activity className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Recreation Areas</p>
                          <p className="text-sm text-gray-600">TV rooms, indoor game facilities, and study areas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Coffee className="w-5 h-5 text-iare-teal mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Other Amenities</p>
                          <p className="text-sm text-gray-600">Laundry services, Wi-Fi connectivity, and power backup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-iare-maroon mb-4">Engineering Hostel</h3>
                    <div className="mb-6">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-auto max-h-[400px] bg-gray-200">
                          <img src="https://content.jdmagicbox.com/v2/comp/tirupati/j5/9999px877.x877.171231223633.g5j5/catalogue/svuce-mens-hostel-s-v-university-tirupati-hostel-for-students-bnvy42d2jd.jpg" alt="Transportation" className="w-full h-full object-cover" />
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
      <Footer />
    </div>
  );
};

export default CampusLife;
