import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const handleAuthSubmit = (data) => {
    const user = {
      name: data.name || "User",
      email: data.email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name || "User")}&background=random`,
    };
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/login", { replace: true });
  };

  const protectedLayout = () => {
    <Layout user={currentUser} onLogout={handleLogout}>
      <Outlet />
    </Layout>;
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
            <Login
              onSubmit={handleAuthSubmit}
              onSwithMode={() => navigate("/signup")}
            />
          </div>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
            <SignUp
              onSubmit={handleAuthSubmit}
              onSwithMode={() => navigate("/login")}
            />
          </div>
        }
      ></Route>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
