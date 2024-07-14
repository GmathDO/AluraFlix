import { useEffect, useState } from "react"
import NotFound from "../NotFound"
import style from "./Player.module.css"
import { useParams } from "react-router-dom"

const Player = ({peliculas}) => {

    const [pelicula, setPelicula] = useState([])
    
    const parametros = useParams()

    useEffect( () => {
        async function getPelicula(){
            const res = await fetch(`https://aluraflix-api.gerardo-duarte.workers.dev/api/peliculas/${parametros.id}`)
            if(res.ok) {
                const data = await res.json()
                setPelicula(...data)
            } else{
                setPelicula(null)
            }
        }
        getPelicula()
      },[])

    return(<>
        {pelicula ?
        <div className={style.container}>
            <div className={style.textContainer}>
                <h1>{pelicula.titulo}</h1>
                <p>{pelicula.descripcion}</p>
            </div>
            <iframe className={style.video} width="560" height="315" src={pelicula.video} title={pelicula.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> : <NotFound />
    }</>)
}

export default Player