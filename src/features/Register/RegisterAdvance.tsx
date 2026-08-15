import Button from '@/components/common/Button/Index'
import InputText from '@/components/common/InputText'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RegisterAdvance = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: ''
    })

    // key: string = "fullName" | "email" | "password" | "phone"
    // value: any = string | number | boolean | object | array | function | undefined | null
    const handleChange = (key: string, value: any) => {
        setFormData({ ...formData, [key]: value })
    }

    const validate = () => {
        if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
            toast.warning('Vui lòng nhập đầy đủ thông tin')
            return false
        }

        if (!formData.email.includes('@')) {
            toast.warning('Email không hợp lệ')
            return false
        }

        if (formData.password.length < 8) {
            toast.warning('Mật khẩu phải có ít nhất 8 ký tự')
            return false
        }

        if (formData.phone.length !== 10) {
            toast.warning('Số điện thoại phải có 10 chữ số')
            return false
        }

        return true
    }

    const handleRegister = async () => {
        const isValid = validate()
        if (!isValid) return

        try {
            const response = await axios.post('https://nestjs-api-coursera.onrender.com/auth/register', formData)
            if ((response.data as any).statusCode === 200) {
                toast.success('Đăng ký thành công')

                // reset form
                setFormData({
                    fullName: '',
                    email: '',
                    password: '',
                    phone: ''
                })
            }
        } catch (error) {
            toast.error('Đăng ký thất bại')
        }
    }

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>Đăng ký</h1>
            <div className='flex flex-col gap-2 w-[400px]'>
                <InputText
                    value={formData.fullName}
                    onChange={value => handleChange('fullName', value)} // e.target.value
                    placeholder='Tên đăng nhập'
                />
                <InputText
                    value={formData.email}
                    onChange={value => handleChange('email', value)}
                    placeholder='Email'
                />
                <InputText
                    value={formData.password}
                    onChange={value => handleChange('password', value)}
                    placeholder='Mật khẩu'
                    type='password'
                />
                <InputText
                    value={formData.phone}
                    onChange={value => handleChange('phone', value)}
                    placeholder='Số điện thoại'
                />
            </div>
            <Button onClick={handleRegister}>Tạo tài khoản</Button>
        </div>
    )
}

export default RegisterAdvance

// if (neu co token) { van o website} : 5p user -> xoa
// else { dang xuat }
// refreshToken: 7d deo co -> token
