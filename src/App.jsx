import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BusinessDetail from "./pages/BusinessDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="bisnis/:id"
            element={<BusinessDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
