import React, { useState } from "react";

const [Counter, setCounter] = useState("000000");

const updateCounter = () => {
  setCounter((lastCount) => {
    const newCounter = parseInt(Counter) + 1;
    const stringCounter = newCounter.toString();
    const paddedCounter = stringCounter.padStart(6, "0");
    return paddedCounter;
  });
};

useState(() => {
  const Interval = setInterval(updateCounter, 1000);
  return () => clearInterval(Interval);
}, []);
