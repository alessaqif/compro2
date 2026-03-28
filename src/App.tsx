import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Catalog from "./pages/catalog/page"; 
import Page from "./pages/blog/page";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login/page";
import CreateCatalog from "./pages/catalog/createcatalog";
import CreateBlog from "./pages/blog/createblog";
import RegisterPage from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/blog" element={<Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createcatalog" element={<CreateCatalog />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;