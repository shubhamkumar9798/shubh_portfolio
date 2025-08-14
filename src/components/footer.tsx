"use client";




export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Shubham Kumar. All rights reserved.
        </p>

        {/* Right Section (Social Links) */}
        {/* <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
