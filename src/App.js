import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Switch from "./components/Switch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Switch />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
