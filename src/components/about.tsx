"use client";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 transition-colors duration-500">
      {/* Main About Content */}
      <div className="relative z-10 max-w-full md:max-w-5xl lg:max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          Yo! I’m <span className="font-semibold text-amber-400">Shubham Kumar</span> — a CS undergrad who’s all about building cool, functional, and clean digital stuff.
          Whether it’s crafting sleek web apps, experimenting with AI/ML, or exploring VR learning, I’m here for projects that push limits.
        </p>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          My stack? <span className="font-medium text-amber-400">Next.js</span>, <span className="font-medium text-amber-400">React</span>, <span className="font-medium text-amber-400">TypeScript</span>, plus some AI magic.
          If it’s innovative, impactful, or just plain fun — I’m in.
        </p>
      </div>
    </section>
  );
}
