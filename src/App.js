import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import MyPage from "./pages/MyPage";
import SeekedClip from "../src/pages/SeekedClip"
import SavedClip from "../src/pages/SavedClip"
import ClickImage from "../src/pages/ClickImage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/second" element={<Second />}></Route>
        <Route path="/third" element={<Third />}></Route>
        <Route path="/fourth" element={<Fourth />}></Route>
        <Route path="/MyPage/Saved" element={<SavedClip />}></Route>
        <Route path="/MyPage/Seeked" element={<SeekedClip />}></Route>
        <Route path="/click" element={<ClickImage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
