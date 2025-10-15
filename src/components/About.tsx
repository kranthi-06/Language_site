import { motion } from "framer-motion";

const features = [
  { icon: "🌎", title: "Global Curriculum", desc: "Structured, internationally-aligned syllabus for real outcomes." },
  { icon: "🎓", title: "Certified Trainers", desc: "Learn with experienced, certified language educators." },
  { icon: "💬", title: "Interactive Learning", desc: "Practice speaking and listening with immersive sessions." },
];

export default function About() {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">About Amigo’s</h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-[#1C1C1C]/80">
        At Amigo’s Foreign Languages Academy, we bring the world closer through the power of communication. Our structured courses
        help you achieve fluency step-by-step — from basics to professional mastery — guided by certified experts.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07, duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <div className="text-3xl" aria-hidden>{f.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-[#1C1C1C]/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


