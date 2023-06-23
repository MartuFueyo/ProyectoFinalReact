import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
    <>
        <div className="container row-md-4 my-3" >
            <div className="card border-dark mb-3">
            <Link to={`/item/${item.id}`} className="text-dark text-decoration-none">
                <img src={item.Imagen} className="card mx-auto img-fluid border border-white card-img-fluid w-25 h-50 p-10" width={90} 
                alt={item.titulo}/>
                    <div className="card-body">
                        <h3>{item.titulo}</h3>
                        <p className="card-text p-2">{item.descripcion}<br/><b>${item.Precio}</b></p>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
    
}

export default Item;