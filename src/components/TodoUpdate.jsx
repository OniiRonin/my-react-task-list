import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const { updateTitle, updateDescription, onInputChange } = useForm({
        updateTitle: todo.title,
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = todo.id;
        const title = updateTitle;
        const description = updateDescription;

        handleUpdateTodo(id, title, description);

        setDisabled(!disabled);

        focusInputRef.current.focus();
    };

    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type='text'
                className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
                name='updateTitle'
                value={updateTitle}
                onChange={onInputChange}
                placeholder='Título'
                readOnly={disabled}
                ref={focusInputRef}
            />

            <input
                type='text'
                className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder='Descripción'
                readOnly={disabled}
            />

            <button className='btn-edit' type='submit'>
                <FaEdit />
            </button>
        </form>
    );
};
