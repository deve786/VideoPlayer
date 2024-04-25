


import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

import Home from "./pages/Home";
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        
      </Routes>
    </div>
  );
}
