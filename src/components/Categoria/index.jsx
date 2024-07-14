import style from "./Categoria.module.css"
import Video from "../Video"

const Categoria = ({categoria, peliculas, setPeliculaSeleccionada, eliminarPelicula}) => {
    
    const { titulo, color} = categoria
    
    return (<>
        { peliculas.length > 0 &&
            <section className={style.container} >
                <div className={style.categoriaTexto} style={{background: color}}>
                    <h1>{titulo}</h1>
                </div>
                <div className={style.videoContainer}>
                    {peliculas.map( pelicula => <Video datos={pelicula} color={color} setPeliculaSeleccionada={setPeliculaSeleccionada} eliminarPelicula={eliminarPelicula}  key={pelicula.titulo}/> )}
                </div>
            </section>
        }
    </>)
}

export default Categoria