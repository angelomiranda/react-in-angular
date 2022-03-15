import * as React from "react";
import Input from "./Input"; // simulating react components
import User from "./User"; // api call

function ReactApp({ increment, decrement }) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h3>Importing ReactJS in AngularJS</h3>
      <User />
      <Input type="number" /> <br />
      <Input type="email" /> <br />
      <Input type="text" /> <br />
    </div>
  );
}

export default ReactApp;
