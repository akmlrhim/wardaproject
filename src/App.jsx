import { Navigate, Route, Routes } from "react-router-dom";
import Stifin from "./pages/business/Stifin";
import StifinUmum from "./pages/business/StifinUmum";
import KangenWater from "./pages/business/KangenWater";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen">
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

        {/* Error Page  */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
