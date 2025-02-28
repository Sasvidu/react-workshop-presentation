"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push('/Intro');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-blue-950 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-300 mb-4 animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16">
            🌀
          </h1>
          <p className="text-lg text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}