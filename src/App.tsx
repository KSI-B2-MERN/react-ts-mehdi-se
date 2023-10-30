import Login from "./pages/Login";
import Navbar from "./pages/navbar";
import Signup from "./pages/sign-up";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="absolute top-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
