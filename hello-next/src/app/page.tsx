import Link from "next/link";


export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-dark">
      <div className="bg-gray-800 p-10 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-white">Welcome to Next.js 🚀</h1>
        <p className="mt-4 text-gray">
          This is your first project using the App Router and Tailwind!
        </p>
        <Link href="/about" className="text-white-500 underline mt-4 block">Go to About</Link>
      </div>
    </main>
  );
}
