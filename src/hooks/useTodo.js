import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoreducer';

export const useTodo = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (title, description, date) => {
        if (title && description) {
            const newTodo = {
                id: Date.now(),
                title: title,
                description: description,
                date: date,
                done: false,
            };

            const action = {
                type: 'Add Todo',
                payload: newTodo,
            };

            dispatch(action);
        }
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Delete Todo',
            payload: id,
        };

        dispatch(action);
    };

    const handleCompleteTodo = (id) => {
        const action = {
            type: 'Complete Todo',
            payload: id,
        };

        dispatch(action);
    };

    const handleUpdateTodo = (updatedTodo) => {
        const action = {
            type: 'Update Todo',
            payload: updatedTodo,
        };

        dispatch(action);
    };

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    };
};
