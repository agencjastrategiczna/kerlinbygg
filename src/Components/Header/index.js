import style from './style.module.scss'


const Header = (props) => {
        return(
                <div className={style.header}>
                        <h2>{props.title}</h2>
                </div>
        )
}

export default Header;