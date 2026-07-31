import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ThemeSwicher from "./ThemeSwitcher";

function Navbar() {
  const {user, setUser} = useContext(AuthContext);

  function logout(){
    localStorage.removeItem("token");
    setUser(null);
    window.location.href="/"
  }
  return (
    <nav className="mb-8 flex items-center justify-between rounded-xl px-6 py-4 shadow" style={{backgroundColor: "var(--card)"}}>
      <h1 className="text-2xl font-bold " style={{ color: "var(--text)"}}>
        Quizo
      </h1>

      <div className="flex flex-row justify-between gap-4">
      <ThemeSwicher/>

      <button
        className="
          rounded-lg
          bg-red-500
          px-4 py-2
          font-semibold
          text-white
          hover:bg-red-600
        "
        onClick={logout}
      >
        Logout
      </button>
      </div>
    </nav>
  );
}

export default Navbar;