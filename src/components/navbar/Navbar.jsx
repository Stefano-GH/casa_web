/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Navbar = () => {
    const [profileHovered, setProfileHovered] = useState(false);

    const hoveredStyle = (isHovered) => ({
        color: isHovered ? `${COLOR_4}` : `${COLOR_3}`
    })

    return <nav style={{ backgroundColor:`${COLOR_1}`, color:`${COLOR_3}` }}>
        <div className="profile-wrapper" style={hoveredStyle(profileHovered)}>
            <FontAwesomeIcon icon={faUser} />
        </div>
    </nav>
}

export default Navbar;