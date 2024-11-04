/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";



/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
function App() {

  return <BrowserRouter>
    <Navbar />
  </BrowserRouter>
}

export default App;