import React, { useState } from 'react'

function Calculate() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-600 min-h-screen text-white"> 
      <div className="bg-slate-800 p-4 rounded-lg shadow-lg w-80">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-left text-lg border rounded"
        />
        <div className="text-left text-xl font-bold py-2">{result}</div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button
            className="col-span-2 p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={clearInput}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}


export default Calculate;