import { Link } from "react-router-dom";
import bag from "../img/bag.png"
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () =>{
    const {totalProductos} = useContext(CartContext);

    return (
        (totalProductos() > 0) ? <Link className= "btn btn-dark btn btn-outline-light position-relative " fill="dark" to={"/cart"}>
            <img src={bag} alt="Carrito" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProductos()} </span>
        </Link>: ""
    )
}

export default CartWidget;