import "./../styles/navbar.css";
import { FaGithub } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import AtmosLogoWind from "./AtmosLogoWind";
interface NavbarProps {
    goHome: () => void;
}

function Navbar({ goHome }: NavbarProps) {
    return (
        <nav className="navbar">

            <div className="logo" onClick={goHome}>
                <AtmosLogoWind size={42}/>
                <span>Atmos</span>
            </div>

            <div className="nav-icons">
                <a
                    href="https://github.com/Bhavish193/Atmos"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                >
                    <FaGithub />
                </a>

                <FiMoon />
            </div>
        </nav>
    );
}

export default Navbar;