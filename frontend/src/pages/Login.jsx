import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import api from "../sevices/api";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ showPassword, setShowPassword] = useState(false);

  const { loadUser} = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      
      const token = response.data.token;
      localStorage.setItem("token", token);
      
      await loadUser();
      navigate("/");

    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "Invalid email or password");
    
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
       <Card className="w-full max-w-md">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Quizo
        </h1>
        <p className="mb-8 text-center text-slate-500">
          Login to your account to continue 
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Hasło"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <Alert>{error}</Alert>}

          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
        <Link
          to="/signin"
          className="
            mt-4 block w-full rounded-lg
            bg-slate-200 px-4 py-3
            text-center font-semibold text-slate-800
            transition hover:bg-slate-300">
          Create an account
        </Link>
      </Card>
      </div>
  );
}

export default Login;