import React from "react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-dark px-4">
            <section className="bg-gray-800 rounded-lg shadow-md p-8 max-w-xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-white">About Us</h1>
                <p className="text-white-600 mb-2">
                    Welcome to our website! We are passionate about building modern web applications with Next.js and TypeScript.
                </p>
                <p className="text-white-600">
                    Our mission is to deliver high-quality, performant, and accessible web experiences for everyone.
                </p>

                <Link href="/" className="text-blue-500 underline mt-4 block">Go back Home</Link>
            </section>
        </main>
    );
}