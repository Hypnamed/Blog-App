import { Navigate } from "react-router-dom";
import altogic from "../../API/Altogic";

const RequiresAuth = ({ children }) => {
  const auth = altogic.auth.getSession() && altogic.auth.getSession().token;

  return auth ? children : <Navigate to="/login" />;
};

export default RequiresAuth;