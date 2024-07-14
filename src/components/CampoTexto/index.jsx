import style from "./CampoTexto.module.css"

const CampoTexto = ({titulo, type, placeholder, color, valor, setValor, required}) => {
    return (
        <div className={style.container}>
            <label className={style.texto}>{titulo}</label>
            <input type={type} placeholder={placeholder} style={{borderColor: color, outlineColor: color}} className={style.campoInput} value={valor} onChange={(e) => setValor(e.target.value)} required={required}/>
        </div>
        
    )
}

export default CampoTexto