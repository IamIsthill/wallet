import { Register } from "../pages/register";
import { BrowserRouter, Route, Routes } from "react-router";

import { landing } from "../pages/landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<landing />} />
      </Routes>
    </BrowserRouter>
  );
}
