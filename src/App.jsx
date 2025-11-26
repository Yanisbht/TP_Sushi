import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MenuDetail from "./pages/MenuDetail";

function App() {
  return (
    <BrowserRouter>
      {}
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
        </Routes>
      </div>

      {}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p className="mb-0">© 2025 SushiFast — Tous droits réservés</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
