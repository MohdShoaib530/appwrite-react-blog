import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full bg-gray-400 px-4 py-3">
      <div className="w-full  ">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  ) : (
    <div className="text-3xl lg:text-5xl min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}

export default App;
