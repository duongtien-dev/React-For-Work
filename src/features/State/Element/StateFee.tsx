import Button from "@/components/common/Button/Index"
import { useState } from "react"
// hooks - useState - quan ly state(dữ liệu) cục bộ
// count: state, setCount: setState
// quản lý kiểu dữ liệu: string - number - boolean - array(number, string, boolean, object) - object - function

// function components global

interface IPhone {
    name: string;
    price: number;
    description: string;
    image: string;
}

export default function StateFee() {
    //  tao mon hoc
    const [courseName, setCourseName] = useState('') // '' -> 'react'
    const [coursePrice, setCoursePrice] = useState(0)
    const [courseDescription, setCourseDescription] = useState('')
    const [courseImage, setCourseImage] = useState('')

    const [isDeleteCourse, setIsDeleteCourse] = useState(false)
    const [categoriesPhone, setCategoriesPhone] = useState(['iPhone', 'Samsung', 'Nokia'])
    const [iphone, setIphone] = useState<IPhone>()

    const [listPhone, setListPhone] = useState<IPhone[]>([])

    //  arrow function local
    const handleChangeCourse = () => {
        setCourseName('React')
        setCoursePrice(1000000)
        setCourseDescription('React là một framework javascript')
        setCourseImage('https://react.dev/images/react-logo-og.png')
    }

    const handleDeleteCourse = () => {
        setIsDeleteCourse(coursePrice > 0 ? true : false)
    }

    return (
        <div className="flex flex-col gap-2">
            <p>Tên môn học: {courseName}</p>
            <p>Giá môn học: {coursePrice}</p>
            <p>Mô tả môn học: {courseDescription}</p>
            <p>Ảnh môn học: {courseImage}</p>
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={handleChangeCourse}>
                Nguoi dung nhap mon hoc
            </button>

            <button
                className="bg-red-500 text-white p-2 rounded-md"
                onClick={handleDeleteCourse}
            >
                {isDeleteCourse ? 'Xóa môn học' : 'Không xóa được môn học'}
            </button>

            <p>Danh sách loại điện thoại: {categoriesPhone.map((category) => category).join(', ')}</p>
        </div>
    )
}

// thay vi dung if else, co the dung toan tu 3 ngoi, let isBaoMet8 = 180;
// isBaoMet8 ? "Bao met 8" : "Bao < 8"

// arrow function
// spread operator
// ...number: copy toàn bộ dữ liệu của number
// number.length + 1: thêm 1 vào dữ liệu của number
// setNumber([...number, number.length + 1]): copy toàn bộ dữ liệu của number và thêm 1 vào dữ liệu của number
// setNumber([...number, number.length + 1]): copy toàn bộ dữ liệu của number và thêm 1 vào dữ liệu của number
