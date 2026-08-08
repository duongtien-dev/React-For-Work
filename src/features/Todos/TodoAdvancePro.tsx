import { useState } from 'react';

import Button from '@/components/common/Button/Index';
import InputText from '@/components/common/InputText';
import Switch from '@/components/common/Switch';
import TextArea from '@/components/common/TextArea';

import type { ITodo } from '@/models/Todo';
import TodoCard from './TodoCard';

const INITIAL_TODO: ITodo = {
    name: '',
    description: '',
    completed: false,
};

export default function TodoAdvancePro() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [newTodo, setNewTodo] = useState<ITodo>(INITIAL_TODO);

    const handleChangeTodo = (key: string, value: any) => {
        setNewTodo((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // key = "name"
    // value = "Học React"

    // newTodo = {
    //     name: 'Học React',
    //     description: '',
    //     completed: false,
    // }

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

        setTodos((prev) => [
            {
                ...newTodo,
                name,
                description,
            },
            ...prev,
        ]);

        setNewTodo(INITIAL_TODO);
    };

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">
                    Todo App
                </h1>

                <div className="mb-6 flex flex-col gap-3">
                    <InputText
                        name="name"
                        value={newTodo.name}
                        onChange={(value) =>
                            handleChangeTodo('name', value)
                        }
                        placeholder="Nhập nội dung công việc"
                        className="flex-1 bg-white"
                    />

                    <TextArea
                        name="description"
                        value={newTodo.description}
                        onChange={(value) =>
                            handleChangeTodo('description', value)
                        }
                        placeholder="Nhập mô tả công việc"
                    />

                    <div className="flex items-center gap-2">
                        <label htmlFor="completed">
                            Hoàn thành
                        </label>

                        <Switch
                            id="completed"
                            checked={newTodo.completed}
                            onChange={(checked) =>
                                handleChangeTodo('completed', checked)
                            }
                        />
                    </div>

                    <Button onClick={handleCreateTodo}>
                        Thêm công việc
                    </Button>
                </div>

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
