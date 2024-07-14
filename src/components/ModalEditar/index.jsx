import style from "./ModalEditar.module.css"
import FormularioEditar from "../FormularioEditar"

const ModalEditar = ({pelicula, setPeliculaSeleccionada}) => {
    return (
        <>
            { pelicula && <>
            <div className={style.overlay}></div>
            <dialog open={!!pelicula} className={style.container} onClose={() => setPeliculaSeleccionada(null)}>
                <FormularioEditar datos={pelicula} color="#2271D1" />
                <form method="dialog" className={style.botonCerrar}>
                    <button formMethod="dialog">
                        <img src="/img/CerrarIcon.svg" alt="Cerrar Icon" className={style.icon} />
                    </button>
                </form>
            </dialog>
            </>}
        </>
    )
}

export default ModalEditar