import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NoPage from "./pages/NoPage";
import Footerr from "./components/Footerr";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import BlogPage from "./pages/BlogPage";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader"; // Import your Loader component
import Maintenance from "./pages/Maintenance";
import BlogList from "./pages/BlogList";
import AboutPage from "./pages/AboutPage";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, e.g., loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time (in milliseconds) as needed
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        {isLoading ? (
          <Loader /> // Display the loader while loading
        ) : (
          <>
          <NavBar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/blog-list" element={<BlogList />} />
              <Route path="/blogs/:id" element={<BlogPage />} />
              <Route path="/about/" element={<AboutPage/>} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footerr />
          </>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
