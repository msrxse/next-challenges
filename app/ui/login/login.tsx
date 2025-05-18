'use client'

import { Button } from '@/app/ui/button'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Data:', { username, password })
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h2 className="fond-bold mb-6 text-center text-2xl text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
          <Button type="submit" className="flex w-full justify-center">
            Log in
          </Button>
        </form>
      </div>
    </div>
  )
}
