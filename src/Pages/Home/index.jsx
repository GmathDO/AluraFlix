import "./Home.css"
import Categoria from "../../components/Categoria"

const Home = ({peliculas, setPeliculaSeleccionada, eliminarPelicula}) => {

    const categorias = [
        {
            titulo: "accion",
            color: "#00C86F"
        },
        {
            titulo: "ciencia ficcion",
            color: "#6BD1FF"
        },
        {
            titulo: "comedia",
            color: "#FFBA05"
        },
        {
            titulo: "drama",
            color: "#7572A7"
        },
        {
            titulo: "musical",
            color: "#3A83FF"
        },
        {
            titulo: "romance",
            color: "#FB0F6A"
        },
        {
            titulo: "terror",
            color: "#9E0DBA"
        }
    ]

    return (
        <>
            {categorias.map(categoria => <Categoria categoria={categoria} peliculas={peliculas.filter( (pelicula) => pelicula.categoria === categoria.titulo )} key={categoria.titulo} setPeliculaSeleccionada={setPeliculaSeleccionada} eliminarPelicula={eliminarPelicula} /> )}
        </> 
    )
}

export default Home