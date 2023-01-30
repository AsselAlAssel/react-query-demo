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
                <li>
                    <NavLink to="/RQParallelQueries">RQ Parallel Queries</NavLink>
                </li>
                <li>
                    <NavLink to="/DependQuery">DependQuery</NavLink>
                </li>
                <li>
                    <NavLink to="/pagination">pagination</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav