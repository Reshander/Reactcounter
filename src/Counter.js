import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(count == 0);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <div>
        <p>{count}</p>
      </div>
      <div style={{ padding: "20px", margin: "20px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
          style={{ padding: "5px", margin: "10px" }}
          >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={handleReset}
          style={{padding: "5px", margin: "10px" }}
        >
         Reset
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
          style={{ padding: "5px", margin: "10px" }}
        >
          decrease
        </button>
      </div>
    </div>
  );
}
