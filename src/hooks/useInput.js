import { useState } from "react";

const useInput = (initValue = "", type = "String") => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    if (type === "String") {
      setValue(value);
    } else if (type === "Number") {
      if (isFinite(parseInt(value))) {
        setValue(parseInt(value));
      }
    }
  };

  return { value, onChange };
};

export default useInput;
