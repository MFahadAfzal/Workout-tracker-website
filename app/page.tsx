'use client'
import Link from "next/link"
import { useState } from 'react'
import { login } from '@/utils/supabase/db'
import { useRouter } from "next/router"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const success = await login(email, password)
    if (success) router.push('/workout')
  }

  const handleSignup = () => {
  // your logic here
  }
  
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
        <h1 className="text-white text-2xl font-medium mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-8">Log in to your account</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2">
            Log in
          </button>

          <p className="text-gray-500 text-sm text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}