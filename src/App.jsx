import './App.css'
import { Counter } from "./component/Counter";
import { Todos } from "./component/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
