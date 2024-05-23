import React, { useState } from "react";

//create your first component
const Home = () => {
  const [counter, setCounter] = useState("000000");

  const updateCounter = () => {
    setCounter((lastCount) => {
      const newCounter = parseInt(lastCount) + 1;
      const stringCounter = newCounter.toString();
      const paddedCounter = stringCounter.padStart(6, "0");
      return paddedCounter;
    });
  };

  useState(() => {
    setInterval(updateCounter, 1000);
  });

  return (
    <div className="text-center">
      <h1 className="title mt-3">Simple Counter</h1>
      <div className="box containter-fluid d-flex justify-content-center mt-5 p-2">
        <h1 className="digit1 p-2">{counter[0]}</h1>
        <h1 className="digit2 p-2">{counter[1]}</h1>
        <h1 className="digit3 p-2">{counter[2]}</h1>
        <h1 className="digit4 p-2">{counter[3]}</h1>
        <h1 className="digit5 p-2">{counter[4]}</h1>
        <h1 className="digit6 p-2">{counter[5]}</h1>
      </div>
    </div>
  );
};

export default Home;
