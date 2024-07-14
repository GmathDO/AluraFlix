import style from "./FormularioEditar.module.css"
import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import TextArea from "../TextArea"
import Button from "../Button"

const FormularioEditar = ({datos, color, required}) => {

    const [titulo, setTitulo] = useState(datos.titulo)
    const [categoria, setCategoria] = useState(datos.categoria)
    const [imagen, setImagen] = useState(datos.imagen)
    const [video, setVideo] = useState(datos.video)
    const [descripcion, setDescripcion] = useState(datos.descripcion)

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datos = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        console.log(datos)
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
            <form className={style.formulario} onSubmit={manejarEnvio}>
                <h1 className={style.formularioTitulo} >EDITAR TARJETA</h1>
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

export default FormularioEditar