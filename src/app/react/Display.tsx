import * as React from "react";

import Input from "./Input";

function Display() {
  return (
    <div>
      <Input type="number" placeholder="Enter a number" />
      <br />
      <Input type="text" placeholder="Enter a text" />
      <br />
      <Input type="email" placeholder="Enter a email" />
    </div>
  );
}

export default Display;
