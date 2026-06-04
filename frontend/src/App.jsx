import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ChadhavaDetails from "./pages/ChadhavaDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chadhava" element={<ChadhavaDetails />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;