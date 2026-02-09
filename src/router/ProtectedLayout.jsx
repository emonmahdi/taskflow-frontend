// // src/routes/ProtectedLayout.jsx
// import { Navigate, Outlet, useOutletContext } from "react-router";

// const ProtectedLayout = () => {
//   const { currentUser } = useOutletContext();

//   if (!currentUser) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedLayout;

// src/routes/ProtectedLayout.jsx
import { Navigate, Outlet, useOutletContext } from "react-router";

const ProtectedLayout = () => {
  const context = useOutletContext();

  // context can be undefined during routing
  if (!context?.currentUser) {
    return <Navigate to="/login" replace />;
  }

  // 🔥 VERY IMPORTANT: forward the context
  return <Outlet context={context} />;
};

export default ProtectedLayout;
