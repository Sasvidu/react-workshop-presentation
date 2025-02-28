import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to React & Next.js!</h1>
      <p className="text-lg mb-8">Let's build something awesome together.</p>
      <Link
        href="/slide2"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </Link>
    </div>
  );
}
