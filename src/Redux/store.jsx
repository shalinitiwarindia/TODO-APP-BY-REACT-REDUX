import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import { counterReducer } from "./Counter/reducer";
  import { todosReducer } from "./Todos/reducer";
import { thunk } from "redux-thunk";
  const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
  });

  // const middleware1 = (store) => (next) => (action) => {
  //   if(typeof action === "function"){
  //     return action(store.dispatch);
  //   }
  //   next(action);
  // }
  
  // const middleware1 = (store) => (next) => (action) => {
  //   console.log("Entering Mw1");
  //   next(action);
  //   console.log("Exit");
  // };
  export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // applyMiddleware(middleware1),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  // console.log("State", store.getState());
  
