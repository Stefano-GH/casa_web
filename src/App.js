/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import supabase from "./SupabaseClient.js"
import { communications } from "./data/Data.js";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Gatti from "./pages/gatti/Gatti.jsx";
import Regole from "./pages/regole/Regole";




/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
function App() {
    /*const [communications, setCommunications] = useState([]);

    useEffect(() => {
        const fetchCommunications = async() => {
            const { data,error } = await supabase
                .from("Communications")
                .select('*');
            
            if (error) {
                console.log("Errore: ", error);
            } else {
                setCommunications(data);
                console.log(data);
            }
        };
        fetchCommunications();
    },[])*/

    return <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/casa_web" element={<Home communications={communications} />} />
            <Route path="/casa_web/gatti" element={<Gatti />} />
            <Route path="/casa_web/rules" element={<Regole />} />
        </Routes>

    </BrowserRouter>
}

export default App;