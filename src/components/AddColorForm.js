import React from "react";
import useInput from "../hooks/useInput";
import useColors from "../hooks/useColors";

export default function AddColorForm() {
  const { addColor } = useColors();
  const [nameProps, resetName] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event) => {
    event.preventDefault();
    addColor(nameProps.value, colorProps.value);
    resetName();
    resetColor();
  };

  return (
    <form>
      <input {...nameProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="color" required />
      <button onClick={submit}>Add Color</button>
    </form>
  );
}
