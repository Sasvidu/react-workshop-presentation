import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-blue-950 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-200 drop-shadow-lg mb-6 animate-pulse">
          Hello, Web Wizards! ✨
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Ready to dive into the world of React? Let&apos;s build
          something amazing together!
        </p>

        <div className="relative inline-flex">
          <Link
            href="/React"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start the Adventure!
          </Link>
          <div className="absolute top-0 right-0 -mr-2 -mt-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 -mr-2 -mt-2 w-6 h-6 bg-cyan-400 rounded-full"></div>
        </div>
      </div>

      <div className="mt-20">
        <Image
          src="/Intro.png"
          width={150}
          height={150}
          alt="Welcome Illustration"
          className="max-w-xs md:max-w-md animate-bounce"
        />
      </div>
    </div>
  );
}
