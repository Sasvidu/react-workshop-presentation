import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function UseStateSlide() {
  const importCodeString = "import React, { useState } from 'react';";
  const initCodeString = "const [count, setCount] = useState(0);";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-green-300 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 drop-shadow-md mb-8 animate-pulse">
          React's useState Hook 🌈
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-10">
          Manage state in functional components with ease.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Importing useState
          </h2>
          <SyntaxHighlighter language="jsx" style={docco} className="rounded-md mb-4">
            {importCodeString}
          </SyntaxHighlighter>

          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Initializing useState
          </h2>
          <SyntaxHighlighter language="jsx" style={docco} className="rounded-md">
            {initCodeString}
          </SyntaxHighlighter>
        </div>

        <div className="flex space-x-4 justify-center">
          <Link
            href="/Tailwind"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </Link>
          <Link
            href="/TodoList"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}