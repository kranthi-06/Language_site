import Link from "next/link";
import { useCallback } from "react";

type Props = { onEnrollClick?: () => void };

export default function Navbar({ onEnrollClick }: Props) {
  const scrollTo = useCallback((id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/5">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="#home" onClick={scrollTo("home")} className="font-serif text-xl font-semibold text-[#1C1C1C]">
          Amigo’s Academy
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={scrollTo("home")} className="accent-underline">Home</button>
          <button onClick={scrollTo("courses")} className="accent-underline">Courses</button>
          <button onClick={scrollTo("about")} className="accent-underline">About</button>
          <button onClick={scrollTo("contact")} className="accent-underline">Contact</button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onEnrollClick}
            className="btn bg-[var(--brand-primary)] text-white shadow-md hover:shadow-lg"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}


