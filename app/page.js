"use client";
import Loading from "./components/Loading";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { getProjects, getTags, getAchievements } from "./api/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [tags, setTags] = useState(["All"]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState({}); // [title, description, icon, link
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
    getAchievements().then((data) => {
      setAchievements(data);
    });
    getTags().then((data) => {
      setTags(data);
      const timeout = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timeout);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-bg">
      <Loading loading={loading} />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection data={achievements} />
        <SkillsSection />
        <ProjectsSection projects={projects} tags={tags} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
