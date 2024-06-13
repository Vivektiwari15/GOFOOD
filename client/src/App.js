import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exat path="/" element={<Home />}></Route>
          <Route exat path="/login" element={<Login/>}></Route>
          <Route exat path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
