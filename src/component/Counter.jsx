import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/Counter/action";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);
  console.log("Rendering Counter");
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>

      <hr />
    </div>
  );
};
