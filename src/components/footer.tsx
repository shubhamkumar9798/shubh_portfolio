"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 transition-colors duration-500 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Shubham Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
