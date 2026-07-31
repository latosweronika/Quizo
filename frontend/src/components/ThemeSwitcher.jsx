import { useState } from "react";
import Button from "./ui/Button";

function ThemeSwitcher(){
    const [open, setOpen] = useState(false);

    function changeTheme(theme){
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }

    return(
        <div className="relative">
            <Button onClick={()=> setOpen(!open)}> 
                Theme
            </Button>
        {open && (
        <div className=" absolute right-0 mt-2 w-full rounded-lg p-2 shadow-lg z-10 flex flex-col gap-2">

            <button onClick={()=> {changeTheme(""); setOpen(!open);}}
            className="rounded  bg-blue-600 px-3 py-2 text-white"
            > Blue </button>
            
            <button onClick={() => {changeTheme("theme-purple"); setOpen(!open);}}
                className="rounded bg-purple-600 px-3 py-2 text-white"
            > Purple </button>

            <button onClick={() => {changeTheme("theme-green"); setOpen(!open);}}
                className="rounded bg-green-600 px-3 py-2 text-white"
            > Green </button>

            <button onClick={() => {changeTheme("theme-dark-blue"); setOpen(!open);}}
                style={{ color: "#38bdf8" }} className="rounded bg-slate-800 px-3 py-2"
            > Dark</button>

            <button onClick={() => {changeTheme("theme-dark-purple"); setOpen(!open);}}
                style={{ color: "#9f55e4" }} className="rounded bg-slate-800 px-3 py-2"
            > Dark</button>
        </div>
        )}
        </div>
    );
}

export default ThemeSwitcher;