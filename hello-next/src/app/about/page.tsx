import React from "react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <section className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
                <p className="text-gray-600 mb-2">
                    Welcome to our website! We are passionate about building modern web applications with Next.js and TypeScript.
                </p>
                <p className="text-gray-600">
                    Our mission is to deliver high-quality, performant, and accessible web experiences for everyone.
                </p>

                <Link href="/" className="text-blue-500 underline mt-4 block">Go back Home</Link>
            </section>
        </main>
    );
}