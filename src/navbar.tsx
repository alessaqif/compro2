import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backendless from "../src/lib/backendless";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ✅ CHECK LOGIN (SUPER CLEAN)
  useEffect(() => {
    const checkUser = async () => {
      try {
        const isValid = await Backendless.UserService.isValidLogin();

        if (!isValid) {
          // 🔥 paksa clear session kalau tidak valid
          await Backendless.UserService.logout();
          localStorage.clear();
          setUser(null);
        } else {
          const currentUser = await Backendless.UserService.getCurrentUser();
          setUser(currentUser);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // ✅ LOGOUT → KE HOME + REFRESH
  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      localStorage.clear(); // 🔥 wajib
      setUser(null);

      // 🔥 ke home + refresh
      window.location.href = "/";
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <header className="sticky w-full bg-black shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="/logo2.png" className="h-14 w-auto" alt="logo" />
        </Link>

        {/* Desktop */}
        <ul className="text-white hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
          <li><Link to="/catalog" className="hover:text-blue-600">PRODUCT</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">BLOG</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">ABOUT US</Link></li>

          <li>
            {!loading && (
              user ? (
                <button onClick={handleLogout} className="hover:text-red-500">
                  LOGOUT
                </button>
              ) : (
                <Link to="/login" className="hover:text-blue-600">
                  LOGIN
                </Link>
              )
            )}
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t shadow-md text-black">
          <li className="px-6 py-3"><Link to="/">HOME</Link></li>
          <li className="px-6 py-3"><Link to="/catalog">PRODUCT</Link></li>
          <li className="px-6 py-3"><Link to="/blog">BLOG</Link></li>
          <li className="px-6 py-3"><Link to="/about">ABOUT US</Link></li>

          <li className="px-6 py-3">
            {!loading && (
              user ? (
                <button onClick={handleLogout} className="text-red-500">
                  LOGOUT
                </button>
              ) : (
                <Link to="/login">LOGIN</Link>
              )
            )}
          </li>
        </ul>
      )}
    </header>
  );
}