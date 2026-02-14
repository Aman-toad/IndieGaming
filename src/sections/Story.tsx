import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StoryItem = ({ title, desc, align = "left" }: { title: string, desc: string, align?: "left" | "right" }) => (
  <div className={`flex w-full ${align === "right" ? "justify-end" : "justify-start"} my-20 opacity-0 story-item`}>
    <div className={`w-full md:w-1/2 p-6 border-l-2 ${align === "right" ? "border-r-2 border-l-0 text-right" : "border-cyan-500"} bg-black/50 backdrop-blur-md`}>
      <h3 className="text-2xl md:text-4xl font-black text-white uppercase mb-2">{title}</h3>
      <p className="text-cyan-100/70 font-mono text-sm md:text-base">{desc}</p>
    </div>
  </div>
);

const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.story-item');

    items.forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Set initial state based on alignment
      const isRight = i % 2 !== 0;
      gsap.set(item, { x: isRight ? 100 : -100 });
    });

    // Background tunnel speed effect
    gsap.to(containerRef.current, {
      backgroundPosition: "0% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="story" className="relative min-h-[200vh] w-screen py-20 px-4 md:px-20 z-10 overflow-hidden">
      {/* Warp lines background effect */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,transparent_0%,cyan_50%,transparent_100%)] bg-[length:100%_200px]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-center text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-900 mb-32">
          THE VOYAGE
        </h2>

        <StoryItem
          title="sector 01: departure"
          desc="Leaving the safety of the known world. The sensors pick up strange energy readings from the Abyss."
        />

        <StoryItem
          title="sector 02: turbulence"
          desc="Navigating through the debris of fallen civilizations. Shield integrity holding at 85%."
          align="right"
        />

        <StoryItem
          title="sector 03: the signal"
          desc="A distress beacon from the Breakers. They are waiting for reinforcements."
        />

        <StoryItem
          title="sector 04: arrival"
          desc="Entering orbit. The Overgrowth comes into view. Prepare for landing."
          align="right"
        />
      </div>
    </section>
  );
};

export default Story;
