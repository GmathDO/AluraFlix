import style from "./NuevoVideo.module.css"
import Formulario from "../../components/Formulario"

const NuevoVideo = ({agregarPelicula}) => {
    return(
        <Formulario texto="CREAR TARJETA" required agregarPelicula={agregarPelicula}/>
    )
}

export default NuevoVideo