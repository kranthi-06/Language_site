export default function Experts() {
  return (
    <section className="container-page py-12">
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center mb-8">Meet Our Experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Expert 1 */}
        <div className="card p-6 border border-[var(--brand-accent)]/30 bg-white shadow-md flex flex-col items-center">
          <img src="/nayeem.jpg" alt="Priya Sharma" className="w-32 h-32 rounded-full object-cover mb-4" />
          <div className="font-bold text-lg mb-2">Nayeem</div>
          <div className="mb-1 text-sm">Experience: 1 years</div>
          <div className="mb-1 text-sm">Languages: German</div>
          <div className="mb-1 text-sm">Specialization: Senior Diploma in German</div>
        </div>
        {/* Expert 2 */}
        <div className="card p-6 border border-[var(--brand-accent)]/30 bg-white shadow-md flex flex-col items-center">
          <img src="/krishna.jpg" alt="Rahul Verma" className="w-32 h-32 rounded-full object-cover mb-4" />
          <div className="font-bold text-lg mb-2">Krishna vamsi</div>
          <div className="mb-1 text-sm">Experience: 2 years</div>
          <div className="mb-1 text-sm">Languages: French</div>
          <div className="mb-1 text-sm">Specialization: Post Graduation Diploma in French Language</div>
        </div>
      </div>
    </section>
  );
}
