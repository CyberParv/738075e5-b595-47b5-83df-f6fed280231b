'use client';

'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      <p className="mb-6 text-center">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
