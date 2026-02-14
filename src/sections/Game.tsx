import { ArrowUpRight } from 'lucide-react';

const BentoCard = ({ title, subtitle, className = "" }: { title: string, subtitle: string, className?: string }) => (
  <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] ${className}`}>

    <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-3xl font-black uppercase text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-mono text-sm">{subtitle}</p>
      </div>

      <div className="self-end p-2 rounded-full bg-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
        <ArrowUpRight className="text-xl" />
      </div>
    </div>
  </div>
);

const Game = () => {
  return (
    <section id="game" className="relative min-h-screen bg-neutral-950 py-20 px-4 md:px-10">

      <div className="text-center mb-16">
        <h2 className="text-cyan-400 font-bold tracking-widest uppercase mb-2">System Override</h2>
        <h1 className="text-5xl md:text-7xl font-black text-white">GAME FEATURES</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4 max-w-7xl mx-auto h-[120vh]">

        {/* Large Hero Card */}
        <BentoCard
          title="Hyper Combat"
          subtitle="Fluid logic-defying mechanic"
          className="md:col-span-2 md:row-span-2 bg-[url('/img/katana.webp')] bg-cover bg-center"
        />

        {/* Tall Card */}
        <BentoCard
          title="Infinite Worlds"
          subtitle="Procedural Generation"
          className="md:col-span-1 md:row-span-2 bg-[url('/img/land.webp')] bg-cover bg-center"
        />

        {/* Small Card */}
        <BentoCard
          title="Co-Op"
          subtitle="3-Player Squads"
          className="md:col-span-1 md:row-span-1 bg-[url('/img/3player.jpg')]"
        />

        {/* Medium Card */}
        <BentoCard
          title="Arsenal"
          subtitle="100+ Weapons"
          className="md:col-span-1 md:row-span-1 bg-[url('/img/weapons.jpeg')]"
        />

        {/* Wide Card */}
        <BentoCard
          title="Loadouts"
          subtitle="Customize your Breaker"
          className="md:col-span-2 md:row-span-1 bg-[url('/img/gun.webp')]"
        />

        {/* Medium Card */}
        <BentoCard
          title="Boss Rush"
          subtitle="Endgame Content"
          className="md:col-span-1 md:row-span-2 bg-[url('/img/boss.png')]"
        />

        {/* Final Wide Card */}
        <BentoCard
          title="Communities"
          subtitle="Join the Hub"
          className="md:col-span-1 md:row-span-1 bg-[url('/img/comm.jpg')]"
        />
      </div>
    </section>
  );
};

export default Game;
