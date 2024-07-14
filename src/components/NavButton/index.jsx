import style from "./NavButton.module.css"

const NavButton = ({children}) =>{
    return (
        <button className={style.navButton}>{children}</button>
    )
}

export default NavButton