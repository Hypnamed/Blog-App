import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import ProfileView from "./Pages/Profile/ProfileView";
import Verification from "./Pages/Auth/Verification";
import AuthRedirect from "./Pages/Auth/AuthRedirect";
import RequiresNoAuth from "./Components/Routes/RequiresNoAuth";
import RequiresAuth from "./Components/Routes/RequiresAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={
            <RequiresNoAuth>
              <SignUp />
            </RequiresNoAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequiresNoAuth>
              <Login />
            </RequiresNoAuth>
          }
        />
        <Route
          path="/verification"
          element={
            <RequiresNoAuth>
              <Verification />
            </RequiresNoAuth>
          }
        />
        <Route
          path="/auth-redirect"
          element={
            <RequiresAuth>
              <AuthRedirect />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfileView />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
