import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../sevices/api";

function Sigin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSignIn(e){
        e.preventDefault();
        try {
            await api.post("/users", {name, email, password });
            alert("Registration successful. Please log in.");
            navigate("/login");
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("An error occurred during sign-in.");
        }
    }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}  

export default Sigin;