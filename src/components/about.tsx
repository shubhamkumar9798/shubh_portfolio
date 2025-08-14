"use client";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500">
      {/* Background Overlay (optional, can match hero) */}
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-20 dark:opacity-10"></div>

      {/* Main About Content */}
      <div className="relative z-10 max-w-full md:max-w-5xl lg:max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
          Yo 👋, I’m <span className="font-semibold text-amber-600 dark:text-amber-400">Shubham Kumar</span> — a CS undergrad who’s all about building cool, functional, and clean digital stuff.
          Whether it’s crafting sleek web apps, experimenting with AI/ML, or exploring VR learning, I’m here for projects that push limits 🚀.
        </p>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
          My stack? <span className="font-medium text-amber-600 dark:text-amber-400">Next.js</span>, <span className="font-medium text-amber-600 dark:text-amber-400">React</span>, <span className="font-medium text-amber-600 dark:text-amber-400">TypeScript</span>, plus some AI magic.
          If it’s innovative, impactful, or just plain fun — I’m in 💡.
        </p>
      </div>
    </section>
  );
}
