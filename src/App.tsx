import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

// import { Home } from "./Home";
// import { Page1 } from "./Page1";
// import { Page2 } from "./Page2";
// import { Page1DetailA } from "./Page1DetailA";
// import { Page1DetailB } from "./Page1DetailB";

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
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        {/* <Home />
        
        <Page2 /> */}
        <button onClick={openButton}>表示</button>

        <ChildArea open={open} closeButton={closeButton} />
      </div>
      {/* <Routes>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page1/detailB" element={<Page1DetailB />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes> */}
      <Router />
    </BrowserRouter>
  );
}
