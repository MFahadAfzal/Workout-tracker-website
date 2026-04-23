import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/workout">Log Workout</Link>
      <Link href="/history">History</Link>
    </nav>
  )
}