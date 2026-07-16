import "./../styles/navbar.css";
import { FaCloudSun, FaGithub } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <FaCloudSun />
                <span>Atmos</span>
            </div>

            <div className="nav-icons">
                <FaGithub />
                <FiMoon />
            </div>
        </nav>
    );
}

export default Navbar;