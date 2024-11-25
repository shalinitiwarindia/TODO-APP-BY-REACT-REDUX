export const ADD_TODO = "ADD_TODO";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const AddTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const getTodos = () => async (dispatch) => {
  const data = await fetch("http://localhost:8080/todos").then((x)=>x.json());
  dispatch(AddTodo(data));
};

export const sort = (by) => {
  return {
    type:SORT,
    payload:by,
  };
};


export const filter = (text) => {
  return {
     type:FILTER,
     payload:text,
  };
};

export const deleteTodo = (id) => {
  return {
     type:DELETE_TODO,
     payload:id,
  };
};

export const toggleTodo = (id) => {
  return {
     type:TOGGLE_TODO,
     payload:id,
  };
};
// export const getTodos = async () => {
//     fetch("http://localhost:8080/todos")
//     .then((x) => x.json())
//     .then((data)=> {
//         dispatch(AddTodo(data));
//     }); 
// }
