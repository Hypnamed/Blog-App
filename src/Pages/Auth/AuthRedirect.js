import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import altogic from "../../API/Altogic";

const AuthRedirect = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  useEffect(() => {
    const getUrl = async () => {
      const resp = await altogic.auth.getAuthGrant();
      if (resp.errors) {
        navigate("/signup", { state: { errors: resp.errors } });
      }
      if (resp.errors === null) {
        navigate("/profile");
        setIsAuth(true);
      }
    };
    getUrl();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default AuthRedirect;
