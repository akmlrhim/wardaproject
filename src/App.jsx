import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stifin from "./pages/business/Stifin";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-150">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/bisnis/stifin"
          element={<Stifin />}
        />
      </Routes>
    </div>
  );
}

export default App;
