import { useOrder } from "../../context/orderProvider";

export function CostumerOrder () {
  const { order, increaseQuantity, decreaseQuantity, clearOrder, productQuantities } = useOrder()

  return (
    <>
    <ul className="orderProducts">
      {order.map(item => (
        <li key={item.id}>
          <p className="product-name">{item.name}</p>
          <p>${item.price}</p>
          <div id="qtbtn">
            <button id="remove" onClick={() => decreaseQuantity(item)}>-</button>
            <p>{productQuantities[item.id] || 0}</p>
            <button id="add" onClick={() => increaseQuantity(item)}>+</button>
            <p>$ {item.price * (productQuantities[item.id] || 0)}</p>
          </div>          
        </li>
      ))}
    </ul>
    <button onClick={clearOrder}>Eliminar Orden</button>
    <strong>Total $ </strong>
    </>
  );

}

export default CostumerOrder