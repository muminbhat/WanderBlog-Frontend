import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NoPage from "./pages/NoPage";
import Footerr from "./components/Footerr";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import BlogPage from "./pages/BlogPage";
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage/>}/>
        <Route path="/blogs/:id" element={<BlogPage />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footerr />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
