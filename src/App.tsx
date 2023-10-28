import CampaignProvider from "providers/CampaignProvider";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));

function App() {
  return (
    <CampaignProvider>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </CampaignProvider>
  );
}

export default App;
