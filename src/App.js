import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

import FlyingText from "./Components/FlyingText";
import Generate from "./Pages/Generate";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<FlyingText />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
