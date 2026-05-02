'use client'
import Link from "next/link"
import { useState } from 'react'
import { createAccount } from '@/utils/db/db.client'
import { useRouter } from "next/navigation"

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSignup = async() => {
      if( firstName === '' || lastName === ''){
        setError("Please put in your first and last name")
        return
      }
      const {data, error}  = await createAccount(email, password, firstName, lastName)
      if (!data.user){
        setError(error?.message?? '')
      } else {
        router.push('/workout')
      } 
    }
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 w-full max-w-sm">
        <h1 className="text-white text-2xl font-medium mb-1">Create account</h1>
        <p className="text-gray-500 text-sm mb-8">Start tracking your workouts</p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">First name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Last name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"/>
          </div>

          <button onClick={handleSignup} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-sm font-medium mt-2">
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