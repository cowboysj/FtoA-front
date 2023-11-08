import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

import GenerateStep1 from "./Pages/GenerateStep1";
import GenerateLoading from "./Pages/GenerateLoading";
import GenerateStep2 from "./Pages/GenerateStep2";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate/step1" element={<GenerateStep1 />} />
          <Route path="/generate/step2" element={<GenerateStep2 />} />
          <Route path="/generate/loading" element={<GenerateLoading />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
