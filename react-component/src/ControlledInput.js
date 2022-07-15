import React, { useState } from "react";
import Display from "./Display";

const ControlledInput = () => {
  const [first, setfirst] = useState("hello");

  const popUp = (val) => {
    // alert("hi")
    setfirst(val.target.value);
  };

  return (
    <>
      <Display foo={first} />
      {/* <h1>{first}</h1> */}
      <input onClick={popUp} onChange={popUp} value={first} />
    </>
  );
};
export default ControlledInput;
