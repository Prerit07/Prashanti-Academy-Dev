import AboutAcademy from "@/components/AboutAcademy";
import AboutTrainer from "@/components/AboutTrainer";
import CoursesSection from "@/components/CoursesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <main className="">
       <Header/>
       <Hero/>
       <AboutAcademy/>
       <AboutTrainer/>
       <CoursesSection/>
      </main>
    </div>
  );
}
