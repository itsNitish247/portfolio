const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800 hover:border-cyan-500 transition">
          <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
          <p className="text-slate-400 mt-2">Years Experience</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800 hover:border-cyan-500 transition">
          <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
          <p className="text-slate-400 mt-2">Projects Built</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800 hover:border-cyan-500 transition">
          <h3 className="text-4xl font-bold text-cyan-400">40+</h3>
          <p className="text-slate-400 mt-2">REST APIs</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800 hover:border-cyan-500 transition">
          <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
          <p className="text-slate-400 mt-2">Technologies</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;