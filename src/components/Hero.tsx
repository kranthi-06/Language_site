import { motion } from "framer-motion";
import Image from "next/image";

type Props = { onExploreCourses: () => void };

export default function Hero({ onExploreCourses }: Props) {
  return (
    <div className="gradient-hero">
      <div className="container-page py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-serif text-4xl sm:text-5xl font-semibold text-[#1C1C1C]"
            >
              Learn Languages. Connect Cultures.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-[#1C1C1C]/80"
            >
              Join Amigo’s Foreign Languages Academy to master Spanish, French, German, Japanese, and Russian.
            </motion.p>
            <div className="mt-8">
              <button onClick={onExploreCourses} className="btn bg-[var(--brand-accent)] text-[#1C1C1C] shadow-md hover:shadow-lg">
                Explore Courses
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[#1C1C1C]/80">
              <a href="https://www.instagram.com/amigosforeignlanguages/?utm_source=ig_web_button_share_sheet" aria-label="Instagram" className="accent-underline">Instagram</a>
              
              <a href="https://api.whatsapp.com/send/?phone=8688447525&text&type=phone_number&app_absent=0" aria-label="WhatsApp" className="accent-underline">WhatsApp</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] md:aspect-square card overflow-hidden"
          >
            <Image
              src="/hero.jpg"
              alt="Global education"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}


