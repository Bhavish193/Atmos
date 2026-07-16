import "./../styles/navbar.css";
import { FaCloudSun, FaGithub } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

interface NavbarProps {
    goHome: () => void;
}

function Navbar({ goHome }: NavbarProps) {
    return (
        <nav className="navbar">

            <div className="logo" onClick={goHome}>
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