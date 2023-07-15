import {
  baramoByAmunt,
  comao,
  increment,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-center mt-5 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="py-2 px-4 border mr-2 border-blue-400 text-lg"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(baramoByAmunt(5))}
          className="py-2 px-4 border mr-2 border-blue-400 text-lg"
        >
          Payloaddiye barai
        </button>
        <p>{count}</p>
        <button
          onClick={() => dispatch(comao())}
          className="py-2 ml-2 px-4 border border-red-400 text-lg"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
