import * as React from "react";

function Counter({ increment, decrement }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
