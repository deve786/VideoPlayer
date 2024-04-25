


import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

import Home from "./pages/Home";
import History from "./pages/History";
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/history" element={<History/>}></Route>
      </Routes>
    </div>
  );
}
