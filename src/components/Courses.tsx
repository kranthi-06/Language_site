import { motion } from "framer-motion";
import classNames from "classnames";
import type { Language, Level } from "@/pages";

const languages: Array<{
  key: Language;
  flag: string;
  color: string;
  description: string;
  hours: string;
  batches: string;
}> = [
  { key: "Spanish", flag: "🇪🇸", color: "#F94144", description: "Learn vibrant Spanish for travel and career.", hours: "30–40 hrs", batches: "Weekend & Weekday" },
  { key: "French", flag: "🇫🇷", color: "#577590", description: "Master elegant French pronunciation and grammar.", hours: "30–40 hrs", batches: "Weekend & Weekday" },
  { key: "German", flag: "🇩🇪", color: "#F9C74F", description: "Build strong fundamentals in German.", hours: "30–40 hrs", batches: "Weekday" },
  { key: "Japanese", flag: "🇯🇵", color: "#90BE6D", description: "Explore Japanese with interactive learning.", hours: "35–45 hrs", batches: "Weekend" },
  { key: "Russian", flag: "🇷🇺", color: "#577590", description: "Achieve confidence in Russian conversation.", hours: "30–40 hrs", batches: "Weekday" },
];

type Props = {
  onChooseLevel: (language: Language, level: Level) => void;
};

const levels: Level[] = ["Beginner", "Intermediate", "Advanced"];

export default function Courses({ onChooseLevel }: Props) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">Choose Your Language and Level</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="card rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-6" style={{ background: "linear-gradient(180deg, #4B9CD3 0%, #6EB3E6 100%)" }}>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold">{lang.flag === "🇪🇸" ? "ES" : lang.flag === "🇫🇷" ? "FR" : lang.flag === "🇩🇪" ? "DE" : lang.flag === "🇯🇵" ? "JP" : "RU"}</div>
                <div>
                  <h3 className="text-xl font-semibold">{lang.key}</h3>
                  <p className="text-white/90 text-sm">{lang.description}</p>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="p-5 bg-white">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center gap-2 rounded-xl bg-[#F3F7FB] px-3 py-2">
                  <span className="text-[#4B9CD3]">🕒</span>
                  <span className="text-[#1C1C1C]/80">Duration: <span className="font-medium text-[#1C1C1C]">{lang.hours}</span></span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#F3F7FB] px-3 py-2">
                  <span className="text-[#4B9CD3]">📅</span>
                  <span className="text-[#1C1C1C]/80">Batches: <span className="font-medium text-[#1C1C1C]">{lang.batches}</span></span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex flex-wrap gap-4">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => onChooseLevel(lang.key, level)}
                    className="text-sm font-semibold"
                    style={{ color: level === "Beginner" ? "#2563EB" : level === "Intermediate" ? "#16A34A" : "#DC2626" }}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <button
                onClick={() => onChooseLevel(lang.key, "Beginner")}
                className="btn w-full mt-5 text-white shadow-md hover:shadow-lg"
                style={{ background: "linear-gradient(180deg, #4B9CD3 0%, #6EB3E6 100%)" }}
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


