import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    return setText(e.target.value);
  };

  const openButton = () => {
    return setOpen(!open);
  };

  const closeButton = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />

      <button onClick={openButton}>表示</button>

      <ChildArea open={open} closeButton={closeButton} />
    </div>
  );
}
