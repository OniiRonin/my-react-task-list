import React from 'react';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

export const TaskUpdate = ({ task, handleTaskFieldChange }) => {
    return (
        <div>
            <FormControl id="taskTitle" mb={4}>
                <FormLabel>Título de la tarea</FormLabel>
                <Input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleTaskFieldChange}
                />
            </FormControl>
            <FormControl id="taskDescription" mb={4}>
                <FormLabel>Descripción de la tarea</FormLabel>
                <Textarea
                    name="description"
                    value={task.description}
                    onChange={handleTaskFieldChange}
                />
            </FormControl>
            <FormControl id="taskDate" mb={4}>
                <FormLabel>Fecha de la tarea</FormLabel>
                <Input
                    type="date"
                    name="date"
                    value={task.date}
                    onChange={handleTaskFieldChange}
                />
            </FormControl>
        </div>
    );
};