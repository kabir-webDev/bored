import React from "react";
import { useStateValue } from "../StateProvider";

function Product() {
  const [{ users, isLogged }, dispatch] = useStateValue();

  const addHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      user: ["Toa", "Tihan", "Radwa"],
    });
  };

  const addLogged = () => {
    dispatch({
      type: "CLICK_TO_LOG",
      log: true,
    });
  };
  console.log(users);
  return (
    <div>
      {users.map((person) => (
        <h1>{person}</h1>
      ))}
      <button onClick={() => addHandler()}>Add To Something</button>
      <h1>{isLogged ? `User is Logged In` : `User is not Logged In`}</h1>
      <button onClick={() => addLogged()}>Check if</button> <br /> <br />
    </div>
  );
}

export default Product;
