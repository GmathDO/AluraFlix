import style from "./NotFound.module.css"

const NotFound = () => {
    return (
        <section className={style.container}>
            <h1 className={style.textNumber}>
                404
            </h1>
            <p className={style.text}>
                NOT FOUND
            </p>
        </section>
    )
}

export default NotFound