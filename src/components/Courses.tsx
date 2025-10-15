import { motion } from "framer-motion";
import classNames from "classnames";
import type { Language, Level } from "@/pages";

const languages: Array<{
  key: Language;
  flag: string;
  color: string;
  description: string;
}> = [
  { key: "Spanish", flag: "🇪🇸", color: "#F94144", description: "Learn vibrant Spanish for travel and career." },
  { key: "French", flag: "🇫🇷", color: "#577590", description: "Master elegant French pronunciation and grammar." },
  { key: "German", flag: "🇩🇪", color: "#F9C74F", description: "Build strong fundamentals in German." },
  { key: "Japanese", flag: "🇯🇵", color: "#90BE6D", description: "Explore Japanese with interactive learning." },
  { key: "Russian", flag: "🇷🇺", color: "#577590", description: "Achieve confidence in Russian conversation." },
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
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-5"
            style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)" }}
          >
            <div className="text-4xl" aria-hidden>{lang.flag}</div>
            <h3 className="mt-3 text-xl font-semibold">{lang.key}</h3>
            <p className="mt-1 text-sm text-[#1C1C1C]/70">{lang.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => onChooseLevel(lang.key, level)}
                  className={classNames("btn text-[#1C1C1C]", "shadow-sm")}
                  style={{ backgroundColor: lang.color }}
                >
                  {level}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


