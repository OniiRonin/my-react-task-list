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
    <>
      <div className="tareas">
        <div className="card-to-do">
          <h1>Lista de tareas</h1>
          <div className="counter-todos">
            <h3>
              N° Tareas: <span>{todosCount}</span>
            </h3>
            <h3>
              Pendientes: <span>{pendingTodosCount}</span>
            </h3>
          </div>

          <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <TodoAdd
              handleNewTodo={onNewTodo}
              showAddTodoAlert={showAddTodoAlert}
            />
          </div>

          <TodoList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={onDeleteTodo}
            handleCompleteTodo={onCompleteTodo}
            handleUncompleteTodo={onUncompleteTodo}
          />
        </div>
      </div>
    </>
  );
}

export default Tareas;
