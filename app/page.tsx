import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-extrabold mb-6">Welcome to the Admin Portal</h1>
      <p className="mb-6 text-lg">Use the navigation below to access admin features.</p>
      <Link href="/admin/roles" className="text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2">
        Manage Admin Roles
      </Link>
    </main>
  );
}
