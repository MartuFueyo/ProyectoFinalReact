import { useContext } from "react";
import { CartContext } from "./CartContext";
import trash from "../img/trash3.svg"
import { Link } from "react-router-dom";

const Cart = () =>{
    const {cart, removeItem, clear, totalProductos, sumaTotal} = useContext(CartContext);

    if (totalProductos() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                    <div className="alert alert-dark" role="alert"> No se encotraron productos en el Carrtio !</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-light-emphasis" >Productos Seleccionados</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-end"><button className="btn btn-dark btn btn-outline-dark" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.Imagen} alt={item.titulo} width={60} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.quantity} X ${item.Precio}</td>
                                        <td className="text-center align-middle">${item.quantity * item.Precio}</td>
                                        <td className="text-end align-middle"><button className="btn btn-light" onClick={() => removeItem(item.id)} title="Eliminar Producto"><img src={trash} alt="Eliminar Producto" width={35} /></button></td>
                                    </tr>

                                ))
                            }
                            <tr>
                                <td colSpan={3} className="text-end"> Total a Pagar :</td>
                                <td className="text-center">${sumaTotal()}</td>
                                <td><Link to={"/checkout"} className="btn btn-dark btn btn-outline-dark align-middle text-end" >Finalizar Compra</Link></td>
                            </tr>
                        </tbody>  
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;