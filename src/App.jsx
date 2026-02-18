import { Navigate, Route, Routes } from "react-router-dom";
import Stifin from "./pages/business/Stifin";
import StifinUmum from "./pages/business/StifinUmum";
import KangenWater from "./pages/business/KangenWater";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-150">
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/stifin-umum"
              replace
            />
          }
        />

        <Route
          path="/stifin-anak"
          element={<Stifin />}
        />

        <Route
          path="/stifin-umum"
          element={<StifinUmum />}
        />

        <Route
          path="/kangen-water"
          element={<KangenWater />}
        />
      </Routes>
    </div>
  );
}

export default App;
