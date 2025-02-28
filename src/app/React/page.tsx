import Link from "next/link";

export default function ReactSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">What is React?</h1>
      <p className="text-lg mb-8">A library for building user interfaces.</p>
      <Link
        href="/Intro"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Previous
      </Link>
      <Link
        href="/slide3"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </Link>
    </div>
  );
}
