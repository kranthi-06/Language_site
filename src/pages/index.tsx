import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export type Language = "Spanish" | "French" | "German" | "Japanese" | "Russian";
export type Level = "Beginner" | "Intermediate" | "Advanced";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<{ language: Language | null; level: Level | null }>({ language: null, level: null });
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const language = url.searchParams.get("language") as Language | null;
    const level = url.searchParams.get("level") as Level | null;
    if (language && level) {
      setSelected({ language, level });
      requestAnimationFrame(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setHighlight(true);
        setTimeout(() => setHighlight(false), 1500);
      });
    }
  }, []);

  const onChooseLevel = (language: Language, level: Level) => {
    setSelected({ language, level });
    const url = new URL(window.location.href);
    url.searchParams.set("language", language);
    url.searchParams.set("level", level);
    window.history.replaceState({}, "", url.toString());
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1500);
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>Amigo’s Foreign Languages Academy</title>
      </Head>
      <Navbar onEnrollClick={scrollToContact} />
      <main>
        <section id="home">
          <Hero onExploreCourses={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })} />
        </section>
        <section id="courses" className="container-page py-16">
          <Courses onChooseLevel={onChooseLevel} />
        </section>
        <section id="about" className="container-page py-16">
          <About />
        </section>
        <section id="contact" ref={contactRef} className="container-page py-16">
          <ContactForm selected={selected} highlight={highlight} />
        </section>
      </main>
      <Footer />
    </>
  );
}
