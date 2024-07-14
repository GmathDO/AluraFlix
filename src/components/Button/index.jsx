import style from "./Button.module.css"

const Button = ({children}) => {

    return (
        <button className={style.boton}>{children}</button>
    )
}

export default Button