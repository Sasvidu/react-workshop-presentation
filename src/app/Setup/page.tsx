// app/setup/page.js
import Link from 'next/link';
import Image from 'next/image';

export default function SetupSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 to-indigo-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 drop-shadow-md mb-8 md:mb-18 animate-pulse">
          Let's Get Set Up!
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        {/* Node.js Installation (Row 1) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full p-4 mb-8">
          <div className="mb-4 md:mr-8"> {/* Added margin-right for spacing on larger screens */}
            <Image
              src="/NodeLogo.png"
              width={120}
              height={120}
              alt="Node.js Logo"
              className="transition-transform duration-300 hover:scale-110 hover:rotate-6"
            />
          </div>
          <div> {/* Wrapped text content in a div */}
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              Install Node.js
            </h2>
            <p className="text-gray-700 mb-4">
              Verify installation with:
            </p>
            <pre className="bg-gray-100 p-3 rounded-md text-sm md:text-base">
              <code>node -v</code>
            </pre>
          </div>
        </div>

        <hr className='w-full md:w-3/4 border-t border-indigo-300 mb-8' />

        {/* Next.js Initialization (Row 2) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full p-4">
          <div className="mb-4 md:mr-8"> {/* Added margin-right for spacing on larger screens */}
            <Image
              src="/NextLogo.svg"
              width={120}
              height={120}
              alt="Next.js Logo"
              className="transition-transform duration-300 hover:scale-110 hover:rotate-6"
            />
          </div>
          <div> {/* Wrapped text content in a div */}
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              Create Next.js App
            </h2>
            <p className="text-gray-700 mb-4">
              Initialize a new project:
            </p>
            <pre className="bg-gray-100 p-3 rounded-md text-sm md:text-base">
              <code>npx create-next-app my-app</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8 md:mt-16">
        <Link
          href="/WhyReact"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Previous
        </Link>
        <Link
          href="/Tailwind"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Next
        </Link>
      </div>
    </div>
  );
}