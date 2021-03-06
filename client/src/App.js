import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import CustomizedPractice from "./pages/CustomizedPractice/CustomizedPractice";
import RecommendedPractice from "./pages/RecommendedPractice/RecommendedPractice";

// use react-router  v6, syntax is a little different
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/customizedpractice" element={<CustomizedPractice />} />
        <Route path="/recommendedpractice" element={<RecommendedPractice />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
