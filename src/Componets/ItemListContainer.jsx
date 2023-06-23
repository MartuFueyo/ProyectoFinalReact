import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsList from "./itemsList";
import Cargando from "./Cargando";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState (true)
    const {id} = useParams ()
    
useEffect (() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
    getDocs(q).then (resultado => {
        if (resultado.size > 0) {
            setItems(resultado.docs.map(productos => ({id:productos.id, ...productos.data()})));
            setCargando(false); 
        } else {
            console.error ("Error !, No se ha encontrado el producto.")
        }
    })
}, [id]);

/*useEffect (() => {
    const db = getFirestore();
    const itemsCollection = collection (db, "Items");

    productos.forEach(producto => {
        addDoc(itemsCollection, productos)
    });
}, []);*/

    return (
        <div className="container my-5">
            <div className="row">  
                {cargando ? <Cargando /> : <ItemsList productos={items} />}
            </div>    
        </div>
    )
}

export default ItemListContainer;