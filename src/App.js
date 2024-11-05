/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Regole from "./pages/regole/Regole";



/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
function App() {

    return <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Regole />} />
        </Routes>

    </BrowserRouter>
}

export default App;