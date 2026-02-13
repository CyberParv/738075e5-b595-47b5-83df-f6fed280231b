import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Section'
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <nav>
          <Link href="/admin/roles" className="hover:underline">
            Roles
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-6 bg-white">
        {children}
      </main>
      <footer className="bg-gray-100 text-gray-600 text-center py-4">
        &copy; 2024 Admin Portal
      </footer>
    </div>
  );
}
