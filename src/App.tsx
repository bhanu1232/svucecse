
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentServices from "./pages/StudentServices";
import LearningTechnologies from "./pages/student-services/LearningTechnologies";
import ExperientialLearning from "./pages/student-services/ExperientialLearning";
import SelfLearning from "./pages/student-services/SelfLearning";
import CareerGuidance from "./pages/student-services/CareerGuidance";
import CounsellingSystem from "./pages/student-services/CounsellingSystem";
import MakersSpace from "./pages/student-services/MakersSpace";
import StudentDevelopment from "./pages/student-services/StudentDevelopment";
import Certifications from "./pages/student-services/Certifications";
import Scholarships from "./pages/student-services/Scholarships";
import MedicalCentre from "./pages/student-services/MedicalCentre";
import EmployabilitySkills from "./pages/student-services/EmployabilitySkills";
import CompetencyBuilding from "./pages/student-services/CompetencyBuilding";
import SupportHub from "./pages/student-services/SupportHub";
import Projects from "./pages/student-services/Projects";
import Innovation from "./pages/student-services/Innovation";
import Placements from "./pages/Placements";
import Departments from "./pages/Departments";
import CampusLife from "./pages/CampusLife";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/about-us/Leadership";
import NAAC from "./pages/NAAC";
import News from "./pages/News";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/student-services/learning-technologies" element={<LearningTechnologies />} />
          <Route path="/student-services/experiential-learning" element={<ExperientialLearning />} />
          <Route path="/student-services/self-learning" element={<SelfLearning />} />
          <Route path="/student-services/career-guidance" element={<CareerGuidance />} />
          <Route path="/student-services/counselling-system" element={<CounsellingSystem />} />
          <Route path="/student-services/makers-space" element={<MakersSpace />} />
          <Route path="/student-services/development-program" element={<StudentDevelopment />} />
          <Route path="/student-services/certifications" element={<Certifications />} />
          <Route path="/student-services/scholarships" element={<Scholarships />} />
          <Route path="/student-services/medical-centre" element={<MedicalCentre />} />
          <Route path="/student-services/employability" element={<EmployabilitySkills />} />
          <Route path="/student-services/competency" element={<CompetencyBuilding />} />
          <Route path="/student-services/support-hub" element={<SupportHub />} />
          <Route path="/student-services/projects" element={<Projects />} />
          <Route path="/student-services/innovation" element={<Innovation />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/news" element={<News />} />
          
          {/* About Us routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          
          {/* NAAC route */}
          <Route path="/naac" element={<NAAC />} />
          
          {/* Placeholder routes - these would be implemented in a full project */}
          <Route path="/study-with-us" element={<NotFound />} />
          <Route path="/research" element={<NotFound />} />
          <Route path="/iqac" element={<NotFound />} />
          <Route path="/student-services/co-curricular" element={<NotFound />} />
          <Route path="/student-services/international" element={<NotFound />} />
          <Route path="/events" element={<NotFound />} />
          <Route path="/admissions" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/programs" element={<NotFound />} />
          
          {/* Campus Life subpages */}
          <Route path="/campus-life/clubs" element={<NotFound />} />
          <Route path="/campus-life/events" element={<NotFound />} />
          <Route path="/campus-life/sports" element={<NotFound />} />
          <Route path="/campus-life/accommodation" element={<NotFound />} />
          <Route path="/campus-life/dining" element={<NotFound />} />
          <Route path="/campus-life/transportation" element={<NotFound />} />
          <Route path="/campus-life/infrastructure" element={<NotFound />} />
          <Route path="/campus-life/green-initiatives" element={<NotFound />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
