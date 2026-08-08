import InputText from '@/components/common/InputText';
import type { ITodo } from '@/models/Todo';
import { useState } from 'react';
import TodoCard from './TodoCard';
import Button from '@/components/common/Button/Index';
import TextArea from '@/components/common/TextArea';
import Switch from '@/components/common/Switch';

// B1: tạo interface cho công việc
// B2: tạo state danh sách công việc và hiển thị UI danh sách công việc ra màn hình (bao gồm UI components TodoCard)
// B3: UI form InputText (tên công việc), TextArea (mô tả công việc), Switch (trạng thái hoàn thành), Button (thêm công việc) + state input nhập nội dung công việc (todoName, todoDescription, todoCompleted)
// B4: khi nhập nội dung công việc vào input và click button thêm công việc thì công việc mới sẽ được thêm vào danh sách công việc và cập nhật state todos, reset state input nhập nội dung công việc (todoName, todoDescription, todoCompleted) + validate nếu có
// tìm hiểu: 1. cập nhật một công việc trong danh sách công việc - 2. xóa một công việc trong danh sách công việc, 3 - hiển thị chi tiết 1 công việc (modal, page detail)

export default function TodoApp() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    // state input nhập nội dung công việc
    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [todoCompleted, setTodoCompleted] = useState(false);

    //  arrow function
    const handleCreateTodo = () => {
        if (!todoName.trim()) {
            alert('Vui long nhap noi dung cong viec');
            return;
        };
        if (!todoDescription.trim()) {
            alert('Vui long nhap mo ta cong viec');
            return;
        };

        const newTodo: ITodo = {
            name: todoName,
            description: todoDescription,
            completed: todoCompleted
        }

        setTodos((prev) => [newTodo, ...prev]); // thêm công việc mới vào danh sách công việc và cập nhật state todos, prev: danh sách công việc cũ
        setTodoName('')
        setTodoDescription('')
        setTodoCompleted(false)
    }

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">
                    Todo App
                </h1>

                {/* Form */}
                <div className="mb-6 flex flex-col gap-2">
                    <InputText
                        value={todoName} // value cua input
                        onChange={e => setTodoName(e.target.value)} // even nguoi dung nhap va cap nhat state todoName
                        placeholder='Nhập nội dung công việc'
                        className='bg-white flex-1'
                    />
                    <TextArea
                        value={todoDescription}
                        onChange={e => setTodoDescription(e.target.value)}
                        placeholder='Nhap mo ta cong viec'
                    />

                    <div className="flex items-center gap-2">
                        <label>Hoàn thành</label>
                        <Switch
                            checked={todoCompleted}
                            onChange={e => setTodoCompleted(e.target.checked)}
                        />
                    </div>

                    <Button onClick={handleCreateTodo}>
                        Thêm công việc
                    </Button>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="divide-y divide-gray-200">
                        {
                            todos.length > 0 ? todos.map((todo, index) => (
                                <TodoCard key={index} todo={todo} />
                            )) : (
                                <div className="flex items-center justify-center h-screen">
                                    <p className="text-gray-500">Khong co cong viec nao.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

// toan tu 3 ngoi

// tuoi > 18 ? duoc vao bar : khong duoc vao bar

// if(tuoi > 18) {
//     return 'duoc vao bar';
// } else {
//     return 'khong duoc vao bar';
// }
