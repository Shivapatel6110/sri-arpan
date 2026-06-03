import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import ChadhavaForm from "./pages/ChadhavaForm";
import CharityForm from "./pages/CharityForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/booking" element={<BookingForm />} />

        <Route path="/chadhava" element={<ChadhavaForm />} />

        <Route path="/charity" element={<CharityForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;