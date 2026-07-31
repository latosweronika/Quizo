import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../sevices/api";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";

function Sigin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSignIn(e){
        e.preventDefault();
        setError("");
        setLoading(true);
  
        try {
            await api.post("/user", {name, email, password });
            alert("Registration successful. Please log in.");
            navigate("/login");
        } catch (err) {
            console.error("Error during sign-in:", err);
            alert("An error occurred during sign-in.");
            setError(err.response?.data?.message || "An error occurred during sign-in.");
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
          Sign In to continue 
        </p>

      <form onSubmit={handleSignIn} className="space-y-5">
        <Input
          label="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      <Link
          to="/login"
          className="
            mt-4 block w-full rounded-lg
            bg-slate-200 px-4 py-3
            text-center font-semibold text-slate-800
            transition hover:bg-slate-300">
          Already have an account? Log in
        </Link>
    </Card>
    </div>
  );
}  

export default Sigin;