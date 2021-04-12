import React from "react";
import useInput from "../hooks/useInput";

const Home = () => {
  const input = useInput("", "Number");
  return (
    <div>
      <div>
        <h2>#1. Input</h2>
        <input placeholder="input value" {...input} />
        <button onClick={() => alert(input.value)}>click</button>
      </div>
    </div>
  );
};

export default Home;
