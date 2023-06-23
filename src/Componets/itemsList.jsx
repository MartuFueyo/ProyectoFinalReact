import Item from "./Item"

const ItemsList = ({productos}) => {
    return (
        <div className="container">
            {productos.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}



export default ItemsList; 