import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <Suspense fallback={<p>Loading...</p>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </SmoothScroll>
  );
}

export default App;
