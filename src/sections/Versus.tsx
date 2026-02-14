import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Versus = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.from(".char-left", { x: -200, opacity: 0, duration: 0.8, ease: "power2.out" })
      .from(".char-right", { x: 200, opacity: 0, duration: 0.8, ease: "power2.out" }, "<")
      .from(".vs-logo", { scale: 3, opacity: 0, rotation: 180, duration: 0.5, ease: "back.out(1.7)" }, "-=0.4")
      .to(".health-bar-fill", { width: "100%", duration: 1, ease: "power1.inOut" });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen w-screen bg-black overflow-hidden flex flex-col justify-center items-center">

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/img/gallery-1.webp')] bg-cover opacity-20 blur-sm pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black" />

      {/* Health Bars */}
      <div className="absolute top-20 w-full px-10 flex justify-between gap-10 z-20">
        <div className="w-1/2 h-6 bg-gray-800 skew-x-[-20deg] border border-white/20 relative overflow-hidden">
          <div className="health-bar-fill absolute top-0 left-0 h-full w-0 bg-linear-to-r from-red-600 to-red-400" />
        </div>
        <div className="w-1/2 h-6 bg-gray-800 skew-x-20 border border-white/20 relative overflow-hidden">
          <div className="health-bar-fill absolute top-0 right-0 h-full w-0 bg-linear-to-l from-blue-600 to-blue-400" />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex justify-between items-center z-10 h-[60vh]">
        {/* Character Left */}
        <div className="char-left relative w-1/2 h-full flex justify-center items-center">
          <img
            src="/img/hyper.jpg"
            alt="Breaker"
            className="h-full object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]"
          />
          <h2 className="absolute bottom-10 left-10 text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-500 to-white italic">
            BREAKER
          </h2>
        </div>

        {/* VS Logo */}
        <div className="vs-logo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <h1 className="text-9xl font-black italic text-yellow-400 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
            VS
          </h1>
        </div>

        {/* Character Right */}
        <div className="char-right relative w-1/2 h-full flex justify-center items-center">
          <img
            src="/img/abyss.png"
            alt="Enemy"
            className="h-full object-contain drop-shadow-[0_0_50px_rgba(0,100,255,0.4)] scale-x-[-1]"
          />
          <h2 className="absolute bottom-10 right-10 text-6xl font-black text-transparent bg-clip-text bg-linear-to-l from-blue-500 to-white italic">
            ABYSS
          </h2>
        </div>
      </div>

      <div className="absolute bottom-10 w-full text-center">
        <p className="font-mono text-gray-400 tracking-widest text-xs animate-pulse">
          PRESS START TO FIGHT
        </p>
      </div>
    </section>
  );
};

export default Versus;
