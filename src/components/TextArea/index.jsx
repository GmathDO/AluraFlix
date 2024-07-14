import style from "./TextArea.module.css"

const TextArea = ({titulo, placeholder, color , valor, setValor, required}) => {
    return (
        <div className={style.container}>
            <label className={style.texto}>{titulo}</label>
            <textarea className={style.campoText} placeholder={placeholder} style={{borderColor: color, outlineColor: color}} value={valor} onChange={(e) => setValor(e.target.value)} required={required} />
        </div>  
    )
}

export default TextArea