import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { SVG_LOGO } from "../Utils/Constant";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-white-600 via-teal-500 to-green-400 p-4 flex justify-between items-center rounded-md shadow-lg">
      <div
        className="text-white font-bold text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
       {SVG_LOGO}
      </div>
      
      <div>
        {user ? (
          <>
            <span className="text-white mr-4">Welcome, {user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 px-4 py-2 rounded mr-4 text-white hover:bg-blue-700"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-700"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
