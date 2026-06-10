import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ChadhavaDetails from "./pages/ChadhavaDetails";
import AdminChadhavaList from "./pages/AdminChadhavaList";
import AdminAddChadhava from "./pages/AdminAddChadhava";
import AdminEditChadhava from "./pages/AdminEditChadhava";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chadhava" element={<ChadhavaDetails />} />

        <Route path="/admin/chadhava" element={<AdminChadhavaList />} />

        <Route path="/admin/chadhava/add" element={<AdminAddChadhava />} />
        <Route path="/admin/chadhava/edit/:id" element={<AdminEditChadhava />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
