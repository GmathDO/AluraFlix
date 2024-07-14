import style from "./ListaOpciones.module.css"

const ListaOpciones = ({titulo, color, valor, setValor, required}) => {

    const categorias = [
        "accion",
        "ciencia ficcion",
        "comedia",
        "drama",
        "musical",
        "romance",
        "terror"
    ]

    return(
        <div className={style.container}>
            <label className={style.texto}>{titulo}</label>
            <select className={style.campoSelect} style={{borderColor: color, outlineColor: color}} value={valor} onChange={(e) => {setValor(e.target.value)}} required={required} >
                <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
                {categorias.map( (categoria, index) => <option key={index}>{categoria}</option> )}
            </select>
        </div>
    )
}

export default ListaOpciones