import { Register } from "../pages/register";
import { Login } from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
