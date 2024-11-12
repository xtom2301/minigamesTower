import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages";

const App = () => {
  return (
    <div className="mx-6">
      <Router>
        <div className="md:max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
