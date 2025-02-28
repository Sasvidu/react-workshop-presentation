import Link from 'next/link';
import Image from 'next/image';

export default function ReactSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-blue-950 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-cyan-300 drop-shadow-lg mb-6 animate-pulse">
          What is React? ⚛️
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          A JavaScript library for building interactive user interfaces.
        </p>

        <div className="flex space-x-4 justify-center">
          <Link
            href="/Intro"
            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </Link>
          <Link
            href="/WhyReact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <Image
          src="/React.png"
          width={150}
          height={150}
          alt="React Logo"
          className="max-w-xs md:max-w-md animate-bounce"
        />
      </div>
    </div>
  );
}