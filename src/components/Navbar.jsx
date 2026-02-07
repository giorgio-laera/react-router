import { NavLink, Link } from "react-router-dom"
import style from '../Modules/Navbar.module.css'
function NavBar() {
    return (<div className={style.navbar}>
        <p>Mamma ho perso l’acquisto</p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Products">Shop</NavLink>
            <NavLink to="/about">Chi siamo</NavLink>
        </nav>

    </div>

    )
}
export default NavBar