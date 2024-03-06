import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
