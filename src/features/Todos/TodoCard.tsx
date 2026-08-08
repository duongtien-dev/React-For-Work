import type { ITodo } from '@/models/Todo';
import React from 'react'

interface TodoCardProps {
    todo: ITodo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
    return (
        <div className="flex items-center gap-3 px-4 py-4">
            <span
                className={`flex-1 text-gray-800`}>
                {todo.name}
            </span>
            <span className={`flex-1 text-gray-800`}>
                {todo.description}
            </span>
            <span className={`flex-1 text-gray-800`}>
                {todo.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}
            </span>
        </div >
    )
}

export default TodoCard
