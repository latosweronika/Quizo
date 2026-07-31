import { useEffect, useState, useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import api from "../sevices/api";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardCard from "../components/DashboardCard";
import CategoryCard from "../components/CategoryCard";
import RecentResults from "../components/RecentResults";
import { AuthContext } from "../context/AuthContext";



function Home(){
    const { user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [results, setResults] = useState([]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try{
                const categoriesRes = await api.get("/categories");
                const resultsRes = await api.get("results");

                setCategories(categoriesRes.data);
                setResults(resultsRes.data);
            }catch(err){
                console.error(err);
                setError("Error with fetching data");
            }finally{
                setLoading(false);
            }
        }

        if (user){
            fetchData();
        }

    }, [user]);

    if (loading){
        return <p>Loading...</p>
    }
    
    return (
        <div className="min-h-screen p-6" style={{backgroundColor: "var(--background)"}}>
            <Navbar/>
            <Hero name={user?.name}/>
            <section className="grid gap-6 md:grid-cols-3">
                <DashboardCard 
                title="Quizy"
                button="more"
                />

                <DashboardCard 
                title="Tests"
                button="more"
                />

                <DashboardCard 
                title="Results"
                button="more"
                />

            </section>

        </div>
    );
}

export default Home;