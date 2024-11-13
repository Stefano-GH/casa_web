/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Footer.css";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Footer = () => {

    const currentYear = new Date().getFullYear();

    return <footer>
        <p>@ {currentYear} Tutti i diritto sono riservati.</p>
    </footer>
}

export default Footer;