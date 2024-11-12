import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ColorGuesser, Home, Unscramble } from "./pages";

const App = () => {
  return (
    <div className="mx-6">
      <Router>
        <div className="md:max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color-guesser" element={<ColorGuesser />} />
            <Route path="/unscramble" element={<Unscramble />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
