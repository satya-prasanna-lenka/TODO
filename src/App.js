// import logo from './logo.svg';
import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <h1>Increment/Decrment Counter</h1>
        <p>By Klinton</p>
        <div className="number">
          <button onClick={() => dispatch(decNumber())}>
            <FaMinus />
          </button>
          <input type="text" value={myState} />
          <button onClick={() => dispatch(incNumber())}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
