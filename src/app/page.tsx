import AboutAcademy from "@/components/AboutAcademy";
import AboutTrainer from "@/components/AboutTrainer";
import CoursesSection from "@/components/CoursesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketInsights from "@/components/MarketInsights";
import PreviousTrainings from "@/components/PreviousTrainings";
import StudentReviews from "@/components/StudentReviews";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <main className="">
       {/* <Header/> */}
       <Hero/>
       <AboutAcademy/>
       <AboutTrainer/>
       <CoursesSection/>
       <PreviousTrainings/>
       <StudentReviews/>
       <MarketInsights/>
      </main>
    </div>
  );
}
