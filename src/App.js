/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect, useState } from "react";
import Login from "./app_router/login/Login";
import AppRouter from "./app_router/AppRouter";


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
function App() {

    // gestione logout
    const [personData, setPersonData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // verifico l'esistenza de ltoken di autenticazione
    useEffect(() => {
        const nome = localStorage.getItem("nome");
        const cognome = localStorage.getItem("cognome");

        if (nome && cognome) {
            setIsAuthenticated(true);
        }
    },[])

    // definisco il logout
    const handleLogout = () => {
        localStorage.removeItem("nome");
        localStorage.removeItem("cognome");
        setPersonData(null);
        setIsAuthenticated(false);
    }

    return <div>
        {!isAuthenticated ? (
            <Login setPersonData={setPersonData} setIsAuthenticated={setIsAuthenticated}/>
        ) : (
            <AppRouter personData={personData} handleLogout={handleLogout}/>
        )}
    </div>
}

export default App;