'use client';

import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  id: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
