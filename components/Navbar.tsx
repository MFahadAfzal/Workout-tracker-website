'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  if (pathname === '/' || pathname === '/signup') return null

  return (
    <nav className="flex justify-between items-center bg-gray-900 px-8 py-4">
      <h1 className="text-white font-bold text-xl">Workout Tracker</h1>
      <div className="flex gap-8">
        <Link href="/workout" className="text-gray-300 hover:text-white">Workouts</Link>
        <Link href="/history" className="text-gray-300 hover:text-white">History</Link>
      </div>
    </nav>
  )
}