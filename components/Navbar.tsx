import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-gray-900 p-4">
      <Link href="/">Home</Link>
      <Link href="/workout">Log Workout</Link>
      <Link href="/history">History</Link>
    </nav>
  )
}