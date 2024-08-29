"use client"
import Courses from "@/components/home/Courses";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
        <Navbar />
        <Courses/>
      </div>
    </>
  );
}
