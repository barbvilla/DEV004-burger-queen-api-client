import { useOrder } from "../../context/orderProvider";

const Products = ({ products }) => {
  const { addToOrder, setProductQuantities } = useOrder();

  const handleAddToOrder = (product) => {
    addToOrder(product);
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[product.id] = (updatedQuantities[product.id] || 0) + 1;
      return updatedQuantities;
    });
  };

  return (
    <div className="products-card">
      {
        products.map((product) => (
          <div key={product.id} className="product">
            <h4>{product.name}</h4>
            <img src={product.image} />
            <p>${product.price}</p>
            <button onClick={() => handleAddToOrder(product)}>Agregar</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;

