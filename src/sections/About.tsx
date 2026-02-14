import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo('.mission-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#about-mission',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: true,
        }
      }
    );
  });

  return (
    <section id="about" className="relative min-h-screen w-screen flex flex-col items-center justify-center text-center z-10">
      <div id="about-mission" className="relative">
        <h2 className="font-general text-sm uppercase text-cyan-400 tracking-[0.5em] mb-10 mission-text">
                    // MISSION: CLASSIFIED
        </h2>

        <AnimatedTitle
          title="PREP<b>A</b>RE FOR <br /> L<b>I</b>GHTSPEED"
          containerClass="!text-white mission-text"
        />

        <div className="mt-10 max-w-2xl text-blue-100/80 font-circular-web text-lg leading-relaxed mission-text">
          <p>
            The coordinates are set. The Overgrowth awaits.
            Your journey through the Hyper Light universe begins now.
          </p>
          <p className="mt-5 text-sm text-cyan-400/60 font-mono">
            SYSTEM CHECK: OPTIMAL <br />
            WEAPONS: ONLINE <br />
            PILOT: READY
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
