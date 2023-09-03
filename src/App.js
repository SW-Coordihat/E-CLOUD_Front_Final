import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/first" element={<First />}></Route>
        <Route path="/second" element={<Second />}></Route>
        <Route path="/third" element={<Third />}></Route>
        <Route path="/fourth" element={<Fourth />}></Route>
        <Route path="/fifth" element={<Fifth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
