/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Login.css";
import { useState } from "react";
import { LoginData } from "../../data/LoginData.js";

const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Login = ( {setPersonData, setIsAuthenticated} ) => {

    // gestisco i dati dell'utente
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [error, setError] = useState("");

    // gestisco l'invio del form
    const handleSUbmit = (e) => {
        e.preventDefault();

        // validazione semplice
        if (!nome) {
            setError("Inserire il nome.");
            return;
        } else if(!cognome) {
            setError("Inserire il cognome.");
            return;
        } else {

            for (var i in LoginData) {
                if (nome === LoginData[i].nome && LoginData[i].cognome) {
                    setPersonData(LoginData[i]);
                }
            }

            localStorage.setItem("nome", nome);
            localStorage.setItem("Cognome", cognome);
            setIsAuthenticated(true);
        }
    }

    return <div className="login-wrapper" style={{ backgroundColor:COLOR_3 }}>
        <div className="login-container">
            <h2>Benvenuti</h2>
            {error && <p className="login-error">Attenzione! {error}</p>}

            <div className="login-form-container">
                <form id="loginForm">
                    <div>
                        <label>Nome:</label>
                        <input type="nome" value={nome} placeholder="Inserisci il tuo nome" on onChange={(e) => setNome(e.target.value.toLowerCase())} />
                    </div>
                    <div>
                        <label>Cognome:</label>
                        <input type="cognome" value={cognome} placeholder="Inserisci il tuo cognome" on onChange={(e) => setCognome(e.target.value.toLowerCase())} />
                    </div>
                </form>
                <button type="submit" onClick={(e) => handleSUbmit(e)} style={{ backgroundColor:COLOR_4 }}>Accedi</button>
            </div>
        </div>
    </div>
};

export default Login;