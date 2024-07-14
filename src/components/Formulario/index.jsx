import style from "./Formulario.module.css"
import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import TextArea from "../TextArea"
import Button from "../Button"

const Formulario = ({display, texto, color, required, agregarPelicula}) => {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datos = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        agregarPelicula(datos)
    }

    const limpiar = () => {
        setTitulo("")
        setCategoria("")
        setImagen("")
        setVideo("")
        setDescripcion("")
    }

    return (
        <>
            <div className={style.titulo} style={{display: display}}>
                <h1 className={style.texto}>NUEVO VIDEO</h1>
                <p className={style.texto}>Complete el formulario para crear una nueva tarjeta de video</p>
            </div>
            <form className={style.formulario} onSubmit={manejarEnvio} style={{borderColor: color}}>
                <h1 className={style.formularioTitulo} style={{borderColor: color, color: color}} >{texto}</h1>
                <CampoTexto titulo="Título" placeholder="titulo del video" color={color} valor={titulo} setValor={setTitulo} required={required}/>
                <ListaOpciones titulo="Categoria" placeholder="escoja una categoria" color={color} valor={categoria} setValor={setCategoria} required={required}/>
                <CampoTexto titulo="Imagen" placeholder="link de la imagen" color={color} valor={imagen} setValor={setImagen} required={required}/>
                <CampoTexto titulo="Video" placeholder="link del video" color={color} valor={video} setValor={setVideo} required={required} />
                <TextArea titulo="Descripción" placeholder="¿de qué se trata este video?" color={color} valor={descripcion} setValor={setDescripcion} required={required} />
                <div className={style.botonContainer}>
                    <Button>GUARDAR</Button>
                    <Button onClick={limpiar}>LIMPIAR</Button>
                </div>
            </form>
        </>
    )
}

export default Formulario