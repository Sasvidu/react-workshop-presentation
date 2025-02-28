// app/react/why-react/page.js
import Link from "next/link";
import Image from "next/image";

export default function WhyReactSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-300 to-rose-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-700 drop-shadow-md mb-6 animate-pulse">
          Why React?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 md:mb-20">
          Used by some of the biggest names in tech!
        </p>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 mb-8 md:mb-16 justify-center items-center">
          <Image
            src="/InstagramLogo.webp"
            width={120}
            height={120}
            alt="Instagram Logo"
            className="animate-bounce"
          />
          <Image
            src="/AirbnbLogo.png"
            width={120}
            height={120}
            alt="Airbnb Logo"
            className="animate-bounce"
          />
          <Image
            src="/NetflixLogo.png"
            width={120}
            height={120}
            alt="Netflix Logo"
            className="animate-bounce"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link
            href="/React"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </Link>
          <Link
            href="/Setup"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}