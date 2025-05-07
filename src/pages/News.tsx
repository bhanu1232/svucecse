import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ChevronRight, ArrowUpRight, Search, Youtube, Play, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from 'fs';

const parseNewsDate = (dateStr: string) => {
  return new Date(dateStr);
};

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [searchValue, setSearchValue] = useState("");

  const newsCategories = [
    "All News",
    "Achievements", "Events", "Videos"
  ];

  const youtubeVideos = [
    {
      title: "SVUCE College Annual Day Celebrations",
      date: "March 15, 2023",
      videoId: "https://www.youtube.com/live/qB9DlzXAo7U?si=Ebqw11h7ntq2sIjB",
      thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIYX8RgCp99EuQDOYgwzSM3l64j7Z-dkZqA&s`,
      description: "Highlights from the Annual Day celebrations at Sri Venkateswara University College of Engineering"
    },
    {
      title: "SVUCE CSE Department Activities",
      date: "February 10, 2023",
      videoId: "https://youtu.be/sdajc_fKuyM?si=ErcL-QPukQD1rAng",
      thumbnail: `https://i.ytimg.com/vi/sdajc_fKuyM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaOQOwiPdNChXOYugCJXq1qb_DTA`,
      description: "Overview of activities and achievements in the Computer Science department"
    },
    {
      title: "Latest Campus Tour - SVUCE",
      date: "January 25, 2023",
      videoId: "q-5RVsGRnQ0",
      thumbnail: `https://img.collegepravesh.com/2021/07/SVU-Tirupati.jpg`,
      description: "Take a virtual tour of our beautiful campus and state-of-the-art facilities"
    },
    {
      title: "SVUCE CSE Tech feasr 2025 (Cynosure)",
      date: "March 27, 2025",
      videoId: "https://youtu.be/9DbSHaOsLfI?si=wgllJo3dewpHimBp",
      thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxNbWLAhvVvEIAQ66t3uGzpa3NA7GDHQaKA&s`,
      description: "Details about the Tech Fest 2025 organized by the Department of CSE"
    }
  ];

  const allNews = [
    {
      title: "Rapsody Games Cup Winners",
      date: "April 20, 2025",
      category: "Achievements",
      image: "https://m.media-amazon.com/images/I/71-GGuLKfGL.jpg",
      excerpt: "CSE students won the Rapsody Games Cup 2025, showcasing exceptional gaming skills and teamwork in a highly competitive environment.",
      link: "https://m.media-amazon.com/images/I/71-GGuLKfGL.jpg"
    },
    {
      title: "EvoluMIN hackathon winners",
      date: "January 20, 2025",
      category: "Achievements",
      image: "/hack.jpeg",
      excerpt: "CSE students achieved 1st place at the National Hackathon 2025, demonstrating outstanding technical and creative capability.",
      link: "https://media.licdn.com/dms/image/v2/D5622AQH1LmKtT8ueRA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731817817808?e=1748476800&v=beta&t=o53LnORso5ihXkrIZUqgiobwb5ZDo9eVL6tqneqtBFg"
    },
    {
      title: "CareerSmith Workshop",
      date: "March 20, 2025",
      category: "Events",
      image: "/career.jpeg",
      excerpt: "A hands-on workshop on Full Stack Development conducted by CareerSmith at our college, empowering students with end-to-end web development skills.",
      link: "https://www.linkedin.com/company/careersmith-edu-tech-pvt-ltd/about/"
    },
    {
      title: "Tedx",
      date: "April 13, 2025",
      category: "Events",
      image: "/ted.jpeg",
      excerpt: "An inspiring TEDx event hosted at our college, showcasing powerful talks and ideas worth spreading by thought leaders and changemakers.",
      link: "https://www.tedxsvu.in/"
    },
    {
      title: "Musical night",
      date: "April 13, 2025",
      category: "Events",
      image: "/music.jpeg",
      excerpt: "A mesmerizing Musical Night filled with soulful performances, electrifying energy, and unforgettable melodies.",
      link: "/music.jpeg"
    },
    {
      title: "CSE Students Launch Startup NxtJob",
      date: "February 15, 2024",
      category: "Startups",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdzi8PrqIbpc13aY3JrryoN6ZhLMhDjAyuPiriHazeOdU780i25N3bu6Zbs1Rccaw3zE&usqp=CAU",
      excerpt: "Shaik Asif Ali from the CSE department launched a startup called NxtJob, contributing to AI integration and extensive testing using modern frameworks.",
      link: "https://www.linkedin.com/company/nxtjob-ai/?originalSubdomain=in"
    },
    {
      title: "Student Bags Onsite Internship at Amazon",
      date: "January 30, 2024",
      category: "Achievements",
      image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-50208,resizemode-75,msid-96359529/small-biz/trade/exports/insights/amazon-is-ubiquitous-but-it-isnt-invincible-anymore.jpg",
      excerpt: "Shaik Asma Naaz, a student from CSE, secured a prestigious onsite internship at Amazon, Chennai.",
      link: "#"
    },
    {
      title: "Department Tech fest Cynosure",
      date: "March 27, 2025",
      category: "Events",
      image: "https://i.ytimg.com/vi/TxDouP5ffG4/maxresdefault.jpg",
      excerpt: "The department hosted a national-level Tech Fest with a wide array of technical and non-technical events, drawing participation from across the country.",
      link: "https://cunosure2k25-zxl9.vercel.app/"
    },

    {
      title: "CSE Department Conducts Skill Development Seminars",
      date: "November 15, 2023",
      category: "Events",
      image: "sem.jpeg",
      excerpt: "The department organized multiple seminars on skill development and digital learning, including sessions on AI, machine learning, and education technologies.",
      link: "sem.jpeg"
    },

    {
      title: "Students Crack GATE, CAT & Enter Premier Institutes",
      date: "March 10, 2024",
      category: "Achievements",
      image: "https://ijkenggacademy.in/wp-content/uploads/2022/11/gate.jpeg",
      excerpt: "CSE students secured admissions into IIT Madras, IISC Bangalore, IIM Lucknow, and more through GATE & CAT with top scores.",
      link: "https://drive.google.com/file/d/1btnDEald5z2jug1BEHnKCU9hBQpz3aly/view?usp=sharing"
    },
    {
      title: "Industrial Visit to Tech Mahindra",
      date: "January 15, 2025",
      category: "Industrial Visit",
      image: "/techm.jpeg",
      excerpt: "An insightful industrial visit to Tech Mahindra, providing students with real-world exposure to IT infrastructure, corporate culture, and industry practices.",
      link: "https://www.techmahindra.com/"
    },
    {
      title: "Placement at Fanatics – 18 LPA",
      date: "August 28, 2024",
      category: "Achievements",
      image: "/fanatics.jpeg",
      excerpt: "Congratulations to our student for securing a prestigious placement at Fanatics with an impressive package of 18 LPA, showcasing the talent and potential nurtured at our institution.",
      link: "https://www.fanaticsinc.com/"
    }


  ];

  const archiveNews = [
    { title: "R20 CSE Scheme Of Syllabus", date: "February 25, 2025", category: "Events", link: "https://drive.google.com/file/d/1A5yFUQpFCfsOq_mKGREEQQVJL5wUv6cT/view?usp=sharing" },
    { title: "Department News Letter", date: "February 15, 2025", category: "Students", link: "" },
    { title: "Department Journel", date: "February 10, 2025", category: "Faculty", link: "" },
  ];

  const sortedNews = allNews.slice().sort((a, b) => parseNewsDate(b.date).getTime() - parseNewsDate(a.date).getTime());

  const filteredByCategory = activeCategory === "All News"
    ? sortedNews
    : sortedNews.filter(news => news.category === activeCategory);

  const filteredNews = filteredByCategory.filter(news =>
    news.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    (news.excerpt && news.excerpt.toLowerCase().includes(searchValue.toLowerCase())) ||
    (news.category && news.category.toLowerCase().includes(searchValue.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-white border-b shadow-md">
          <div className="container mx-auto px-4 py-4">
            <Tabs defaultValue="All News" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex flex-wrap overflow-x-auto bg-white h-auto gap-2 py-3">
                {newsCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all data-[state=active]:bg-iare-blue data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:hover:bg-gray-200"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Category Info */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-iare-blue font-medium">Currently viewing:</span>
              <span className="bg-iare-blue text-white px-3 py-1 rounded-full text-sm">{activeCategory}</span>
            </div>
            <span className="text-sm text-gray-500">
              {activeCategory === "Videos" ? (
                `${youtubeVideos.length} ${youtubeVideos.length === 1 ? 'result' : 'results'} found`
              ) : (
                `${filteredNews.length} ${filteredNews.length === 1 ? 'result' : 'results'} found`
              )}
            </span>
          </div>
        </div>

        {/* Content Area */}
        {activeCategory === "Videos" ? (
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Youtube className="text-red-600" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">SVUCE YouTube Channel</h2>
                </div>
                <a
                  href="https://www.youtube.com/@svucestudentversion5669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iare-blue hover:text-blue-700 text-sm font-semibold flex items-center"
                >
                  Visit Channel <ExternalLink size={16} className="ml-1" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeVideos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border hover:shadow-md overflow-hidden transition-all hover:-translate-y-1"
                  >
                    <div className="relative group h-56 overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 text-white p-4 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <Play size={24} />
                        </div>
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded">YouTube</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} /> {video.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                      <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 text-sm font-medium inline-flex items-center mt-3">
                        Watch Video <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest News</h2>

              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.map((news, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border hover:shadow-md overflow-hidden transition-all hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{news.category}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} /> {news.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{news.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                        <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-iare-blue hover:text-blue-700 text-sm font-medium inline-flex items-center mt-3">
                          View Details <ChevronRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center">
                  <p className="text-gray-500 mb-4">No news found in the "{activeCategory}" category.</p>
                  <button
                    onClick={() => { setActiveCategory("All News"); setSearchValue(""); }}
                    className="bg-iare-blue text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    View All News
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Important Documents */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Documents</h2>
            <div className="bg-white rounded-xl border overflow-hidden divide-y">
              {archiveNews.map((doc, index) => (
                <a href={doc.link} key={index} target="_blank" rel="noopener noreferrer" className="block p-5 hover:bg-gray-100 transition">
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-800 font-medium">{doc.title}</h3>
                    <ChevronRight size={20} className="text-iare-blue" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  );
};

export default News;
