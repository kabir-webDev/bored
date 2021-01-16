import React from "react";
import "./App.css";
import ReducerPractice from "./ReducerPractice";
import Product from "./components/Product";
import { useStateValue } from "../src/StateProvider";
import Condi from "./components/Condi";

function App() {
  const [{ isLogged }, dispatch] = useStateValue();
  console.log(isLogged);
  return (
    <div className="App">
      {isLogged ? <Condi /> : <h1>This is garbage</h1>}
      <Product />
    </div>
  );
}

export default App;
