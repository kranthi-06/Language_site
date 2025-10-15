import { motion } from "framer-motion";

type Tutor = {
  name: string;
  language: string;
  experience: string;
  img: string;
};

const tutors: Tutor[] = [
  { name: "Maria Gonzalez", language: "Spanish", experience: "6+ years experience", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Louis Dupont", language: "French", experience: "8+ years experience", img: "https://i.pravatar.cc/100?img=2" },
  { name: "Klara Schmidt", language: "German", experience: "5+ years experience", img: "https://i.pravatar.cc/100?img=3" },
  { name: "Aiko Tanaka", language: "Japanese", experience: "7+ years experience", img: "https://i.pravatar.cc/100?img=4" },
  { name: "Ivan Petrov", language: "Russian", experience: "9+ years experience", img: "https://i.pravatar.cc/100?img=5" },
];

export default function Instructors() {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">Meet Our Expert Instructors</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {tutors.map((tutor, idx) => (
          <motion.div
            key={tutor.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-5 text-center"
            style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)" }}
          >
            <img src={tutor.img} alt={tutor.name} className="mx-auto w-20 h-20 rounded-full object-cover" />
            <h3 className="mt-3 text-lg font-semibold">{tutor.name}</h3>
            <p className="text-sm text-[#1C1C1C]/70">{tutor.language}</p>
            <p className="text-sm text-[#1C1C1C]/70">{tutor.experience}</p>
            <button className="btn mt-4 bg-[var(--brand-primary)] text-white shadow-md hover:shadow-lg">Book a Demo</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


