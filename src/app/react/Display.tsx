import * as React from "react";

import Input from "./Input";

function Display() {
  return (
    <div className="t-10">
      <Input type="number" placeholder="Enter a number" />
      <br />
      <Input type="time" placeholder="Enter a email" />
      <br />
      <Input type="date" />
    </div>
  );
}

export default Display;
