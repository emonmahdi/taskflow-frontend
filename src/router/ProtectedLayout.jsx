// src/routes/ProtectedLayout.jsx
import { Navigate, Outlet, useOutletContext } from "react-router";

const ProtectedLayout = () => {
  const { currentUser } = useOutletContext();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
