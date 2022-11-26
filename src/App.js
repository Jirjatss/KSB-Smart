import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Card/CardLoginRegister";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div className="App font-signika bg-[#e1dfdf]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
