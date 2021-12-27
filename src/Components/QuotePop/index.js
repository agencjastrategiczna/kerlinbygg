import style from './style.module.scss'

const QuotePop = () => {

        return(
                <div className={style.container}>
                        <div className={style.content}>
                                <div className={style.buttonWrapper}>

                                </div>

                                <h2>ZAMÓW WYCENĘ</h2>
                                <p>Wypełnij formularz i odbierz bezpłatną wycenę</p>

                                <div className={style.formWrapper}>
                                        <input type="text" placeholder="Email" />
                                        <input type="text" placeholder="Telefon" />
                                        <input type="text" placeholder="Imię" />
                                        <textarea type="text" placeholder="Krótki opis zecenia" />

                                        <button type="button">ZAMÓW WYCENĘ</button>
                                </div>
                        </div>
                </div>
        )
}

export default QuotePop;