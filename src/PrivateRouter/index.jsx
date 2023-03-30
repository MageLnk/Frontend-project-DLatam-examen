import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};