import { Route, Routes } from "react-router-dom";
import "./App.css";
import MentorHome from "./components/MentorHome";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App font-signika bg-[#e1dfdf]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
