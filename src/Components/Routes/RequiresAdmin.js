import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const RequiresAdmin = ({ children }) => {
  const { admin } = useAuth();

  if (admin === undefined) {
    return <Navigate to="/" />;
  }

  return admin === true ? <>{children}</> : <Navigate to="/" />;
};

export default RequiresAdmin;