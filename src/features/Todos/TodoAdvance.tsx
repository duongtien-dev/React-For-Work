import { useState } from 'react';

import InputText from '@/components/common/InputText';
import TextArea from '@/components/common/TextArea';
import Button from '@/components/common/Button/Index';
import Switch from '@/components/common/Switch';

import type { ITodo } from '@/models/Todo';
import TodoCard from './TodoCard';


export default function TodoAdvance() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const [newTodo, setNewTodo] = useState<ITodo>({
        name: '',
        description: '',
        completed: false,
    });

    // Input / TextArea
    const handleChangeTodo = (e: any) => {
        const { name, value } = e.target;

        setNewTodo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Switch
    const handleChangeCompleted = (e: any) => {
        setNewTodo((prev) => ({
            ...prev,
            completed: e.target.checked,
        }));
    };

    const handleCreateTodo = () => {
        const name = newTodo.name.trim();
        const description = newTodo.description.trim();

        if (!name) {
            alert('Vui lòng nhập nội dung công việc');
            return;
        }

        if (!description) {
            alert('Vui lòng nhập mô tả công việc');
            return;
        }

        const todo: ITodo = {
            ...newTodo,
            name,
            description,
        };

        setTodos((prev) => [todo, ...prev]);

        setNewTodo({
            name: '',
            description: '',
            completed: false,
        });
    };

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">
                    Todo App
                </h1>

                {/* Form */}
                <div className="mb-6 flex flex-col gap-3">
                    <InputText
                        name="name"
                        value={newTodo.name}
                        onChange={handleChangeTodo}
                        placeholder="Nhập nội dung công việc"
                        className="flex-1 bg-white"
                    />

                    <TextArea
                        name="description"
                        value={newTodo.description}
                        onChange={handleChangeTodo}
                        placeholder="Nhập mô tả công việc"
                    />

                    <div className="flex items-center gap-2">
                        <label htmlFor="completed">
                            Hoàn thành
                        </label>

                        <Switch
                            id="completed"
                            checked={newTodo.completed}
                            onChange={handleChangeCompleted}
                        />
                    </div>

                    <Button onClick={handleCreateTodo}>
                        Thêm công việc
                    </Button>
                </div>

                {/* Todo List */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    {todos.length > 0 ? (
                        <div className="divide-y divide-gray-200">
                            {todos.map((todo, index) => (
                                <TodoCard
                                    key={index}
                                    todo={todo}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-40 items-center justify-center">
                            <p className="text-gray-500">
                                Không có công việc nào.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
