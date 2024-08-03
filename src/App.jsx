import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch current user
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        // Handle error (e.g., log it or show an error message)
        console.error("Failed to fetch current user:", error);
        dispatch(logout()); // Optionally dispatch logout in case of an error
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div>
      <Header/>
      <Footer/>
    </div>
  ) : (
    <Loading/>
  );
}

export default App;
