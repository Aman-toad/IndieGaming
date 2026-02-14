import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Armory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;

    const xSet = gsap.quickSetter(section, "--x", "px");
    const ySet = gsap.quickSetter(section, "--y", "px");

    const handleMouseMove = (e: MouseEvent) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      xSet(e.clientX - rect.left);
      ySet(e.clientY - rect.top);
    };

    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-black py-24 px-10 overflow-hidden">

      <h2 className="text-cyan-400 font-mono text-sm tracking-widest mb-4">// ARSENAL_LOADOUT</h2>
      <h1 className="text-white text-5xl font-black italic mb-12">CHOOSE YOUR PATH</h1>

      <div className="bento-grid grid grid-cols-12 gap-4 h-175">

        <div className="bento-card col-span-8 bg-zinc-900/50 rounded-3xl overflow-hidden relative border border-white/10 group">
          <div className="card-glow" /> 
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700" src="/videos/blade.mp4" />
          <div className="relative p-10 h-full flex flex-col justify-end z-10">
            <h3 className="text-3xl font-bold text-white">THE STAR CASTER</h3>
            <p className="text-zinc-400 max-w-md">Master the blade that bends light. High-velocity strikes with built-in phase shifting.</p>
          </div>
        </div>

        <div className="col-span-4 grid grid-rows-2 gap-4">
      
          <div className="bento-card bg-zinc-900/50 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="card-glow" />
            <div className="relative z-10">
              <img src="/img/phase.webp" className='w-full rounded-2xl' />
              <span className="text-pink-500 font-mono text-xs">MODULE 01</span>
              <h3 className="text-2xl font-bold text-white mt-2">PHASE DASH</h3>
            </div>
          </div>

          <div className="bento-card bg-zinc-900/50 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="card-glow" />
            <div className="relative z-10">
              <img src="/img/loadout.webp" className='w-full rounded-2xl' />
              <span className="text-cyan-400 font-mono text-xs">MODULE 02</span>
              <h3 className="text-2xl font-bold text-white mt-2">RAIL GUN</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
