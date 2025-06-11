import React, { useEffect, useMemo, useState } from "react";
import { findPrimes } from "../utility/constant";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isdarkTheme, setIsDarkTheme] = useState(false);

  useEffect(()=>{
    console.log('text change use  effect')
  },[text])

  const prime = useMemo(() => {
    console.log("Calucalted prime-", text);
    return findPrimes(text);
  },[text]);

  return (
    <div
      className={
        "border border-black m-5 p-5 w-96 h-96 " +
        (isdarkTheme && "bg-black text-white")
      }
    >
      <button
        className="m-2 p-2 bg-green-50"
        onClick={() => setIsDarkTheme(!isdarkTheme)}
      >
        toggle
      </button>
      <input
        type="number"
        className="border border-black p-2"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-5">
        <p className="font-bold">Prime of Input: {prime}</p>
      </div>
    </div>
  );
};

export default Demo;
