import Button from "@/components/common/Button/Index"
import { useState } from "react"
// hooks - useState - lưu trữ dữ liệu cục bộ
// quản lý kiểu dữ liệu: string - number - boolean - array - object - function

interface Course {
    id: number;
    name: string;
    price: number;
}

export default function CountState() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [color, setColor] = useState(false)
    const [number, setNumber] = useState([1, 2, 3, 4, 5])
    const [course, setCourse] = useState<Course>()

    const [courses, setCourses] = useState<Course[]>([])

    const handleDeleteCourse = (courseId: number) => {
        setCourses(courses.filter(course => course.id !== courseId))
    }

    // console.log('count', count)
    const handleChangeName = () => {
        setName('Bảo')
    }

    const handleChangeAgeIncrement = () => {
        if (age < 100) {
            setAge(age + 20)
        }
    }

    // const handleChangeAgeDecrement = () => {
    //     if (age > 0) {
    //         setAge(age - 10)
    //     }
    // }

    const handleChangeColor = () => {
        setColor(!color)
    }

    const handleChangeNumberIncrement = () => {
        setNumber([...number, number.length + 1])
    }

    return (
        <div className="flex flex-col gap-2">
            {/* <p>Name: {name}</p>
            <div className="flex gap-2">
                <Button onClick={handleChangeName}>
                    Đổi tên 2
                </Button>
            </div>
            */}
            <p>Age: {age}</p>
            <div className="flex gap-2">
                <Button onClick={() => setAge(age + 20)}>
                    Tăng 20 tuổi
                </Button>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => setAge(age - 10)}>
                    Giảm 10 tuổi
                </Button>
            </div>
            <p>Color: {color ? 'red' : 'blue'}</p>
            <div className="flex gap-2">
                <Button onClick={handleChangeColor}>
                    Đổi màu
                </Button>
            </div>

            <p>Number: {number.join(', ')}</p>
            <div className="flex gap-2">
                <Button onClick={handleChangeNumberIncrement}>
                    Tăng số
                </Button>
            </div>
        </div>
    )
}

// arrow function
// spread operator
// ...number: copy toàn bộ dữ liệu của number
// number.length + 1: thêm 1 vào dữ liệu của number
// setNumber([...number, number.length + 1]): copy toàn bộ dữ liệu của number và thêm 1 vào dữ liệu của number
// setNumber([...number, number.length + 1]): copy toàn bộ dữ liệu của number và thêm 1 vào dữ liệu của number
