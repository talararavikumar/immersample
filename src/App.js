import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import Test from "./immerTest";

export default function App() {
  const values = useSelector((state) => state.secondLevel.arrSec);
  const dispatch = useDispatch();
  console.log(values);
  return (
    <div className="App" onClick={() => dispatch({ type: "add", payload: 4 })}>
      <Test />
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
