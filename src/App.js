import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import GenerateStep1 from "./Pages/GenerateStep1";
import GenerateLoading from "./Pages/GenerateLoading";
import GenerateStep2 from "./Pages/GenerateStep2";
import Workbook from "./Pages/MyWorkbook";
import MyWorkbook from "./Pages/MyWorkbook";
import Book from "./Pages/Book";
import Question from "./Pages/Question";
import KakaoRedirect from "./Pages/KakaoRedirect";
import AudioPage from "./Pages/AudioPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {<Route path="/oauth" element={<KakaoRedirect />} />}
            {/*kakao Redirect 화면 */}
            <Route path="/generate/step1" element={<GenerateStep1 />} />
            <Route path="/generate/step2" element={<GenerateStep2 />} />
            <Route path="/generate/loading" element={<GenerateLoading />} />
            <Route path="/myworkbook" element={<MyWorkbook />} />
            <Route path="/myworkbook/:workbookid/:name" element={<Book />} />
            <Route path="/question" element={<Question />} />
            <Route path="/audio" element={<AudioPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
