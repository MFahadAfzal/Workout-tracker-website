import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
        <h1 className="text-white text-2xl font-medium mb-1">Create account</h1>
        <p className="text-gray-500 text-sm mb-8">Start tracking your workouts</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Full name</label>
            <input type="text" placeholder="John Smith" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Email</label>
            <input type="email" placeholder="you@email.com" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Password</label>
            <input type="password" placeholder="••••••••" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2">
            Create account
          </button>

          <p className="text-gray-500 text-sm text-center">
            Already have an account?{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}