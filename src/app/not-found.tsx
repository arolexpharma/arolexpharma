import React from 'react';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100 text-center">
      <h1 className="text-9xl font-extrabold text-sky-500 mb-6">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-sky-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 transition-all">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
