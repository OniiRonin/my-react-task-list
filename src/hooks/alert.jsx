import Swal from "sweetalert2";

export const confirmDeleteTodo = (onDelete) => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete();
      Swal.fire("Eliminado", "La tarea se eliminó correctamente", "success");
    }
  });
};

export const showAddTodoAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Tarea agregada",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const showCompleteTodoAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Tarea completada",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const confirmUncompleteTodo = (onUncomplete) => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Desea marcar la tarea como pendiente de nuevo?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, marcar como pendiente",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      onUncomplete();
      Swal.fire(
        "Tarea pendiente",
        "La tarea se ha marcado como pendiente de nuevo",
        "success"
      );
    }
  });
};

export const showNewTodoAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Nueva tarea agregada",
    showConfirmButton: false,
    timer: 1500,
  });
};
