import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
    todo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <li>
            <div className="todo-item-container">
                <span onClick={() => handleCompleteTodo(todo.id)}>
                    <label
                        className={`container-done ${todo.done ? 'active' : ''}`}
                    ></label>
                </span>
                <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
                <button
                    className="btn-delete"
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};
