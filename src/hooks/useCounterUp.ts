import { useState } from "react";

export const useCounterUp = (maxNumber: number, time: number) => {
  var [newValue, setNewValue] = useState(0);

  setTimeout(() => {
    if (newValue < maxNumber) {
      setNewValue(newValue + 1);
    }
  }, time);
  return newValue;
};
