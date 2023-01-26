/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import altogic from "../API/Altogic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [sessions, setSessions] = useState(null);
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const sendReq = async () => {
      const resp = await getAllSessions();
      setSessions(resp.sessions);
    };

    if (altogic.auth.getSession()) {
      setIsAuth(true);
      sendReq();
    }

    setUser(user ?? null);
    setSessions(sessions ?? null);
  }, [isAuth, user]);

  const signOutCurrentSession = async () => {
    try {
      const resp = await altogic.auth.signOut();

      if (resp.errors === null) {
        setIsAuth(false);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllSessions = async () => {
    try {
      return await altogic.auth.getAllSessions();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const values = {
    isAuth,
    setIsAuth,
    signOutCurrentSession,
    getAllSessions,
    sessions,
    user,
    setUser,
    setSessions,
    admin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };