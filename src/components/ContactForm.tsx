import { useEffect, useMemo, useRef, useState } from "react";
import type { Language, Level } from "@/pages";

type Props = {
  selected: { language: Language | null; level: Level | null };
  highlight?: boolean;
};

export default function ContactForm({ selected, highlight }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    address: "",
  });
  const [language, setLanguage] = useState<Language | "">(selected.language ?? "");
  const [level, setLevel] = useState<Level | "">(selected.level ?? "");

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlight) {
      cardRef.current?.classList.add("ring-2", "ring-[var(--brand-accent)]");
      const t = setTimeout(() => cardRef.current?.classList.remove("ring-2", "ring-[var(--brand-accent)]"), 1500);
      return () => clearTimeout(t);
    }
  }, [highlight]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const data = {
      access_key: "b158a542-69f3-433e-9ad6-3332ec4f68ec", // <-- Replace with your actual API key
      name: form.name,
      email: form.email,
      phone: form.phone,
      qualification: form.qualification,
      address: form.address,
      language: language || selected.language,
      level: level || selected.level,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Submission failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">Enroll Now</h2>
      <p className="mt-2 text-center text-[#1C1C1C]/80">Fill in your details to join your chosen course.</p>
      <div ref={cardRef} className="card mt-8 p-8 border border-[var(--brand-accent)]/30 max-w-4xl mx-auto">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-3xl">✅</div>
            <p className="mt-3 font-medium">Your enrollment request has been received!</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
            {/* Hidden field for Web3Forms API key (for reference, not needed in fetch) */}
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_API_KEY" />
            <div className="sm:col-span-1">
              <label className="text-sm">Name</label>
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Email</label>
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Contact Number</label>
              <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Qualification</label>
              <input value={form.qualification} onChange={e=>setForm({...form, qualification:e.target.value})} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Address</label>
              <input value={form.address} onChange={e=>setForm({...form, address:e.target.value})} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Selected Language</label>
              <select value={language} onChange={(e)=>setLanguage(e.target.value as Language)} className="mt-1 w-full border rounded-lg px-3 py-2 bg-white">
                <option value="">{selected.language ?? "Choose language"}</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Russian">Russian</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Selected Level</label>
              <select value={level} onChange={(e)=>setLevel(e.target.value as Level)} className="mt-1 w-full border rounded-lg px-3 py-2 bg-white">
                <option value="">{selected.level ?? "Choose level"}</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn w-full bg-[var(--brand-primary)] text-white shadow-md hover:shadow-lg" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enrollment"}
              </button>
            </div>
            {error && (
              <div className="sm:col-span-2 text-red-600 text-center mt-2">{error}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}


