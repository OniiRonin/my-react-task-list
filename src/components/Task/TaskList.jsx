import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { TaskItem } from './TaskItem';

export const TaskList = ({
    tasks,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) => {
    return (
        <VStack mt={4} align="start" spacing={2} width="100%">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                />
            ))}
        </VStack>
    );
};
