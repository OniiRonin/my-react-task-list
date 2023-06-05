export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'Add Todo':
      return [...state, action.payload];

    case 'Delete Todo':
      return state.filter((todo) => todo.id !== action.payload);

    case 'Complete Todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    case 'Update Todo':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            description: action.payload.description,
            date: action.payload.date,
          };
        }

        return todo;
      });

    default:
      return state;
  }
};
