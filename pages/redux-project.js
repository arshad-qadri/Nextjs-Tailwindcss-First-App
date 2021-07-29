import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../Redux/Actions";

const reduxproject = () => {
  const num = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center text-center">
      <div className="">
        <h1 className="text-4xl my-10 font-bold">{num}</h1>
        <button
          className="bg-yellow-500 p-2 px-4 text-white text-2xl hover:bg-yellow-400 m-2"
          onClick={() => dispatch(inc())}
        >
          +
        </button>
        <button
          className="bg-yellow-500 p-2 px-4 text-white text-2xl hover:bg-yellow-400 m-2"
          onClick={() => dispatch(dec())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default reduxproject;
