import React from "react";
import "./App.css";
import ReducerPractice from "./ReducerPractice";
import Product from "./components/Product";
import { useStateValue } from "../src/StateProvider";
import Condi from "./components/Condi";
import ContactForm from "./components/ContactForm";

function App() {
  const [{ isLogged }, dispatch] = useStateValue();
  return (
    <div className="App">
      {/* {isLogged ? <Condi /> : <h1>This is garbage</h1>} */}
      <Product />
      Booom
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
