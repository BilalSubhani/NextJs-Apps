import Link from "next/link";


export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to Next.js 🚀</h1>
        <p className="mt-4 text-gray-600">
          This is your first project using the App Router and Tailwind!
        </p>
        <Link href="/about" className="text-blue-500 underline mt-4 block">Go to About</Link>
      </div>
    </main>
  );
}
