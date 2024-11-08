/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { links } from "../../data/Data";
import { NavLink, useLocation } from "react-router-dom";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  STRUCTURE
  ----------------------------------------
*/
const Navbar = () => {

    // generazione degli stati dinamici
    const [profileHovered, setProfileHovered] = useState(false);
    const [linkHovered, setLinkHovered] = useState(Array(links.length).fill(false));
    const [burgerHovered, setBurgerHovered] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // stile dinamico 
    const hoveredStyle = (isHovered) => ({
        color: isHovered ? `${COLOR_4}` : `${COLOR_3}`
    })

    // gestione stato dinamico dei link
    const getHovered = (status, index) => {
        const updatedLinkHovered = [...linkHovered];
        if (status === "enter") {
            updatedLinkHovered[index] = true;
        } else if (status === "leave") {
            updatedLinkHovered[index] = false;
        }
        setLinkHovered(updatedLinkHovered);
    }

    return <nav style={{ backgroundColor:`${COLOR_1}`, color:`${COLOR_3}` }}>
        <div className="profile-wrapper" style={hoveredStyle(profileHovered)}>
            <FontAwesomeIcon className="profile-icon" icon={faUser} onMouseEnter={() => setProfileHovered(true)} onMouseLeave={() => setProfileHovered(false)}/>
        </div>

        <div className={isBurgerActive ? "link-wrapper show" : "link-wrapper"} style={{ backgroundColor:`${COLOR_1}` }}>
            {links.map((item, index) => (
                <div key={index} className="link-item" style={{
                    borderTop: isBurgerActive ? `1px solid ${COLOR_3}` : "none"
                }}>
                    <NavLink className="link-subitem" to={item.to} onClick={() => setIsBurgerActive(false)}>
                        <p style={{ ...hoveredStyle(linkHovered[index]), textDecoration: currentPath===item.to ? 'underline' : 'none' }}
                        onMouseEnter={() => getHovered("enter",index)} onMouseLeave={() => getHovered("leave",index)}>
                            {item.titolo}
                        </p>
                    </NavLink>
                </div>
            ))}
        </div>

        <div className="burger-wrapper" style={hoveredStyle(burgerHovered)} onClick={() => setIsBurgerActive(!isBurgerActive)}
        onMouseEnter={() => setBurgerHovered(true)} onMouseLeave={() => setBurgerHovered(false)}>
            &#9776;
        </div>
    </nav>
}

export default Navbar;