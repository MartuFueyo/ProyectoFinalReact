import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"
const NavBar = () =>{
    return (
        <div className="row-md-8 text-end">
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                    <NavLink className="nav-link text-light mx-3" aria-current="page" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink className="nav-link text-light" to={"category/Botellas"}>Botellas</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink className="nav-link text-light" to={"category/Box"}>Box</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink className="nav-link text-light" to={"category/Botanicos"}>Botanicos</NavLink>
                </li>
            <CartWidget />
        </ul>
        </div>
    )
}

export default NavBar;