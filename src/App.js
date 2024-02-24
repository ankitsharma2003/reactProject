import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import News from "./components/news/News";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
