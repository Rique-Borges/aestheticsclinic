// src/app/page.js
import HeroSection from "./components/herosection";
import Treatments from "./components/treatments";
import CTA from "./components/calltoaction";
import AboutMe from "./components/aboutme";
import VisitOurClinic from "./components/visitourclinic";
import ContactUs from "./components/contactus";
export default function Home() {
  return (
    <div>
      {/* Main content can be added here later */}
      <main className="min-h-screen bg-gray-20">
        <HeroSection/>
        {/*<Treatments/>
        <CTA/>
        <AboutMe/>
        <VisitOurClinic/>
        <ContactUs/>*/}
      </main>
    </div>
  );
}
