import "./Header.css"
import { Link, useResolvedPath } from "react-router-dom"
import Button from "../Button"
import NavButton from "../NavButton"

const Header = () => {
    const url = useResolvedPath().pathname
    
    return (
        <nav className="header">
            <img src="/img/logo.svg" alt="logo AluraFlix" className="desktop-content"/>
            <div className="boton-container desktop-content">
                <Link to="/">
                    <Button>HOME</Button>
                </Link>
                <Link to="/nuevovideo">
                    <Button>NUEVO VIDEO</Button>
                </Link>
            </div>
            <div className="boton-container-mobile mobile-content">
                <Link to="/">
                    {
                        url === "/" ?
                        <NavButton>
                            <img src="/img/HomeIconActive.svg" alt="Home Icon" />
                            <span>Home</span>
                        </NavButton> :
                        <img src="/img/HomeIcon.svg" alt="Home Icon" className="icon"/>
                    }
                </Link>
                <Link to="/nuevovideo">
                    {
                        url === "/nuevovideo" ?
                        <NavButton>
                            <img src="/img/NuevoVideoIconActive.svg" alt="Nuevo Video Icon" />
                            <span>Nuevo Video</span>
                        </NavButton> :
                        <img src="/img/NuevoVideoIcon.svg" alt="Nuevo Video Icon" className="icon"/>
                    }
                </Link>
            </div>
        </nav>
    )
}

export default Header