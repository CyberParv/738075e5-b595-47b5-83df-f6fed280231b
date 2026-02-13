'use client';

import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export default function Table({ children }: TableProps) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      {children}
    </table>
  );
}
