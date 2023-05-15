import React from 'react';
import { useForm } from 'react-hook-form';

export const TodoAdd = ({ handleNewTodo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange"
    });

    const onFormSubmit = (data) => {
        let newTodo = {
            id: new Date().getTime(),
            title: data.title,
            description: data.description || '',
            done: false,
        };

        handleNewTodo(newTodo);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input
                type='text'
                className='input-add'
                name='title'
                {...register('title', { required: true, minLength: 3 })}
                placeholder='¿Qué hay que hacer?'
            />
            {errors.title && errors.title.type === 'required' && (
                <p>Campo Obligatorio</p>
            )}
            {errors.title && errors.title.type === 'minLength' && (
                <p>El campo debe tener al menos 3 caracteres</p>
            )}

            <input
                type='text'
                className='input-add'
                name='description'
                {...register('description')}
                placeholder='Descripción'
            />

            <button className='btn-add' type='submit'>
                Agregar
            </button>
        </form>
    );
};
