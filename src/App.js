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
import NewMain from "./Components/NewMain";
import NewBook from "./Pages/NewBook";
import Question2 from "./Pages/Question2";
import Step1 from "./Test/Step1";
import Step2 from "./Test/Step2";
import Step3 from "./Test/Step3";
import Step4 from "./Test/Step4";
import Step5 from "./Test/Step5";

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
            {<Route path="/step1" element={<Step1 />} />}
            {/*step1 */}
            {<Route path="/step2" element={<Step2 />} />}
            {/*step2 */}
            {<Route path="/step3" element={<Step3 />} />}
            {/*step3 */}
            {<Route path="/step4" element={<Step4 />} />}
            {/*step4 */}
            {<Route path="/step5" element={<Step5 />} />}
            {/*step5 */}

            <Route path="/generate/step1" element={<GenerateStep1 />} />
            <Route path="/generate/step2" element={<GenerateStep2 />} />
            <Route path="/generate/loading" element={<GenerateLoading />} />
            <Route path="/myworkbook" element={<MyWorkbook />} />
            <Route path="/myworkbook/:workbookid/:name" element={<Book />} />
            <Route path="/question" element={<Question />} />
            <Route path="/audio" element={<AudioPage />} />
            <Route path="/newmain" element={<NewMain />} />
            <Route path="/book/:bookid" element={<NewBook />} />
            <Route path="/question2" element={<Question2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
