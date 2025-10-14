import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Browse from "../Components/Browse";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
