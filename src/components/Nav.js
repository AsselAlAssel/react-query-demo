import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/superheros">superheros</NavLink>
                </li>
                <li>
                    <NavLink to="/RQSuperheros">RQSuperheros</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav