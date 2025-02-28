// app/tailwind/page.js
import Link from 'next/link';
import Image from 'next/image';

export default function TailwindSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-md mb-8 animate-pulse">
          Making it Pretty 🎀
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Style your app with Tailwind CSS, a utility-first CSS framework.
        </p>

        <div className="flex justify-center mt-16 mb-8 ">
          <Image
            src="/TailwindLogo.png"
            width={150}
            height={150}
            alt="Tailwind CSS Logo"
          />
        </div>

        <div className="mb-20">
          <Link
            href="https://tailwindcomponents.com/cheatsheet/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-2 px-6 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            🚀 Tailwind CSS Cheatsheet 🚀
          </Link>
        </div>

        <div className="flex space-x-4 justify-center">
          <Link
            href="/Setup"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </Link>
          <Link
            href="/UseState"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}