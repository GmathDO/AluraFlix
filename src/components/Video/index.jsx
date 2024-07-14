import style from "./Video.module.css"
import lista from "../../../db.json"
import { Link } from "react-router-dom"

const Video = ({datos, color, setPeliculaSeleccionada, eliminarPelicula}) => {
    const { titulo, imagen, video, descripcion, id} = datos

    return (
        <div className={style.container} style={{borderColor: color}}>
            <Link to={`/${id}`}>
                <img src={imagen} alt="video" className={style.miniatura}/>
            </Link>
            <div className={style.optionsContainer}>
                <div className={style.option} onClick={() => eliminarPelicula(datos)}>
                    <img src="/img/BorrarIcon.svg" alt="Borrar Icon" />
                    <span>BORRAR</span>
                </div>
                <div className={style.option} onClick={() => setPeliculaSeleccionada(datos)}>
                    <img src="/img/EditarIcon.svg" alt="Editar Icon" />
                    <span>EDITAR</span>
                </div>
            </div>
        </div>
    )
}

export default Video