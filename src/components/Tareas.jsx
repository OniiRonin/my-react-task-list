import React, { useEffect } from 'react';
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { TaskList } from './Task/TaskList';
import { useTodo } from '../hooks/useTodo';
import { ModalTask } from './Task/ModalTask';

export const Tareas = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const bgColor = useColorModeValue("#fff", "#071b2f");
  const textColor = useColorModeValue("black", "white");

  useEffect(() => {
    // Proximamente
  }, [todos]);

  return (
    <Box p={4} className="container" bg={bgColor}>
      <ModalTask handleNewTask={handleNewTodo} />
      <Stack spacing={4} mb={4}>
        <Heading as="h1" size="lg" color={textColor}>
          Gestor de Tareas
        </Heading>
        <Heading as="h2" size="md" color="gray.500">
          Total: {todosCount} | Pendientes: {pendingTodosCount}
        </Heading>
      </Stack>
      <TaskList
        tasks={todos}
        handleUpdateTask={handleUpdateTodo}
        handleDeleteTask={handleDeleteTodo}
        handleCompleteTask={handleCompleteTodo}
      />
    </Box>
  );
};
