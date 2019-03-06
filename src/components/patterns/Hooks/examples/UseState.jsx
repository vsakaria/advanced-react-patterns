import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("default value");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
};

export default Input;
