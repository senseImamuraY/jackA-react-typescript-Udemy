import { useState, memo } from "react";
// import {  } from "./App";

const style = {
  width: "100%",
  height: "300px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  // const [open, setOpen] = useState(false);

  const { open, closeButton } = props;
  console.log("ChildAreaがレンダリングされた！！！");
  const data = [...Array(20).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={closeButton}>close</button>
        </div>
      ) : null}
    </>
  );
});
