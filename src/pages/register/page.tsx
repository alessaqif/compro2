import { useState } from "react";
import Backendless from "backendless";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../navbar";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = new Backendless.User() as any;

      user.name = name;
      user.username = username;
      user.email = email;
      user.password = password;

      await Backendless.UserService.register(user);

      alert("Register berhasil!");
      navigate("/login"); // ✅ pindah halaman
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen flex">
      
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src="/default2.jpg"
          alt="register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md space-y-6">
          
          {/* Logo */}
          <div>
            <img
              src="/logo3.png"
              alt="logo"
              className="w-28"
            />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Create account
            </h2>
            <p className="text-gray-500 text-sm">
              Register to get started
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Username"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main></>
  );
}