import Button from '@/components/common/Button/Index'
import InputText from '@/components/common/InputText'
import axios from 'axios'
import React, { useCallback, useState, FormEvent } from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      setError(null)
      setSuccess(null)

      if (!email || !password) {
        setError('Email and password are required')
        return
      }

      setLoading(true)
      try {
        const { data } = await axios.post(
          'https://nestjs-api-coursera.onrender.com/auth/login',
          { email, password }
        )

        // handle response as needed (store token, redirect, etc.)
        console.log('response: ', data)
        setSuccess('Logged in successfully')
      } catch (err: any) {
        console.error(err)
        const message = err?.response?.data?.message || err.message || 'Login failed'
        setError(message)
      } finally {
        setLoading(false)
      }
    },
    [email, password]
  )

  return (
    <div className="flex flex-col justify-center h-screen gap-5 w-[500px] mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <label htmlFor="email">Email</label>
        <InputText
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <InputText
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600" role="alert">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <Button type="submit" disabled={loading}>{loading ? 'Logging...' : 'Login'}</Button>
      </form>
    </div>
  )
}

export default Login
