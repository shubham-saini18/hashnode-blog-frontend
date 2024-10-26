import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-20 text-center animate-fadeIn">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
      <p className="text-lg mb-8">Explore insights, stories, and expertise.</p>
      <Link href="/dashboard">
        <a className="px-6 py-3 bg-white text-black rounded-md shadow-lg transform transition-transform hover:scale-105">
          Get Started
        </a>
      </Link>
    </div>
  );
}
