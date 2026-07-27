import Button from '@/components/common/Button/Index'
import InputText from '@/components/common/InputText'
import TextArea from '@/components/common/TextArea'
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        // console.log('email: ', email)
        // console.log('password: ', password)

        try {
            const response = await axios.post('https://nestjs-api-coursera.onrender.com/auth/login', {
                email,
                password
            })
            console.log('response: ', response)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <div className='flex flex-col justify-center h-screen gap-5 w-[500px] mx-auto'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <div className='flex flex-col gap-5'>
                <label htmlFor="email">Email</label>
                <InputText
                    type="text"
                    placeholder='email'
                    value={email} // gia tri cua input = state email
                    onChange={(e) => setEmail(e.target.value)} // khi nhap vao input, state email se thay doi
                />

                <label htmlFor="password">Password</label>
                <InputText
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}

export default Login
