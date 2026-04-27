import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-8 py-4">
      <h1 className="text-white font-bold text-xl">Workout Tracker</h1>
      <div className="flex gap-8">
        <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/workout" className="text-gray-300 hover:text-white">Log Workout</Link>
        <Link href="/history" className="text-gray-300 hover:text-white">History</Link>
      </div>
    </nav>
  )
}