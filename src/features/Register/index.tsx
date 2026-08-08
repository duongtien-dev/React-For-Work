import Button from '@/components/common/Button/Index'
import InputText from '@/components/common/InputText'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = async () => {
        // console.log('form', name, email, password, phone)

        const response = await axios.post('https://nestjs-api-coursera.onrender.com/auth/register', {
            fullName,
            email,
            password,
            phone
        })
        if ((response.data as any).statusCode === 200) {
            toast.success('Đăng ký thành công')
        } else {
            toast.error('Đăng ký thất bại')
        }
    }


    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>Đăng ký</h1>
            <div className='flex flex-col gap-2 w-[400px]'>
                <InputText
                    value={fullName}
                    onChange={(value) => setFullName(value)} // e.target.value
                    placeholder='Tên đăng nhập'
                />
                <InputText
                    value={email}
                    onChange={(value) => setEmail(value)}
                    placeholder='Email'
                />
                <InputText
                    value={password}
                    onChange={(value) => setPassword(value)}
                    placeholder='Mật khẩu'
                />
                <InputText
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    placeholder='Số điện thoại'
                />
            </div>

            <Button onClick={handleRegister}>Tạo tài khoản</Button>
        </div>
    )
}

export default Register
