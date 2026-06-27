

const Navbar =() => {
  return (
  <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
<h2 className="text-xl font-bold italic tracking-wide text-cyan-400">
  Nitish Kumar
</h2>
  <ul className="flex gap-6">
   <li><a href="#about">About</a></li>
     <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
         <li><a href="#contact">Contact</a></li>
  </ul>
  </div>
  </nav>
  )
}

export default Navbar
