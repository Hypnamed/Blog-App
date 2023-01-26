import { Navigate } from "react-router-dom";
import altogic from "../../API/Altogic";

const RequiresNoAuth = ({ children }) => {
  const auth = altogic.auth.getSession() && altogic.auth.getSession().token;

  return auth ? <Navigate to="/" /> : children;
};

export default RequiresNoAuth;
