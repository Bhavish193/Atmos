import "./../styles/navbar.css";
import { FaGithub } from "react-icons/fa";
import { MoonStar, SunMedium } from "lucide-react";
import AtmosLogoWind from "./AtmosLogoWind";

interface NavbarProps {
    goHome: () => void;
    dayMode: boolean;
    toggleDayMode: () => void;
}
function Navbar({goHome, dayMode, toggleDayMode,}: NavbarProps) {
    return (
        <nav className="navbar">

            <div className="logo" onClick={goHome}>
                <AtmosLogoWind className="logo-icon"/>
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

                <button
                    className="theme-toggle"
                    onClick={toggleDayMode}
                    aria-label="Toggle Theme"
                >
                    {dayMode ? (
                        <SunMedium size={20} strokeWidth={2.2} />
                    ) : (
                        <MoonStar size={20} strokeWidth={2.2} />
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;