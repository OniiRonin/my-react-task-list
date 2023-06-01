import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";
import {
  confirmDeleteTodo,
  showAddTodoAlert,
  showCompleteTodoAlert,
  confirmUncompleteTodo,
  showNewTodoAlert,
} from "../hooks/alert";

function Tareas() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const onDeleteTodo = (id) => {
    confirmDeleteTodo(() => {
      handleDeleteTodo(id);
    });
  };

  const onCompleteTodo = (id) => {
    handleCompleteTodo(id);
    showCompleteTodoAlert();
  };

  const onUncompleteTodo = (id) => {
    confirmUncompleteTodo(() => {
      handleUpdateTodo(id, { completed: false });
    });
  };

  const onNewTodo = (todo) => {
    handleNewTodo(todo);
    showNewTodoAlert();
  };

  return (
    <Box className="tareas">
      <Box className="card-to-do">
        <Heading as="h1" color="blue.500">
          Lista de tareas
        </Heading>
        <Box className="counter-todos">
          <Text>
            N° Tareas: <span>{todosCount}</span>
          </Text>
          <Text>
            Pendientes: <span>{pendingTodosCount}</span>
          </Text>
        </Box>

        <Box className="add-todo">
          <Heading as="h3" color="blue.500">
            Agregar Tarea
          </Heading>
          <TodoAdd handleNewTodo={onNewTodo} showAddTodoAlert={showAddTodoAlert} />
        </Box>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={onDeleteTodo}
          handleCompleteTodo={onCompleteTodo}
          handleUncompleteTodo={onUncompleteTodo}
        />
      </Box>
    </Box>
  );
}

export default Tareas;
