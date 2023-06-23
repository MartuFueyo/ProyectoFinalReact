import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd=(quantity) => {
        addItem(item, quantity);
    }


    useEffect(()=> {
        setItem(producto);
    }, [producto]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={producto.Imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <h1 className="text-light-emphasis">{producto.titulo}</h1>
                    <h3>{producto.descripcion}</h3>
                    <p><b>${producto.Precio}</b></p>
                    <ItemCount stock={producto.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;