import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([])
  const [productQuantities, setProductQuantities] = useState({});

  const addToOrder = product => {
    const existingProduct = order.find((item) => item.id === product.id)

    if (existingProduct) {
      const updateOrder = order.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item
      });
      setOrder(updateOrder);
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  }
  const increaseQuantity = (product) => {
    const updatedOrder = order.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setOrder(updatedOrder);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  }

  const decreaseQuantity = (product) => {
    const updatedOrder = order.map((item) => {
      if (item.id === product.id) {
        if (item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
  
    // Filtra los productos cuya cantidad sea mayor o igual a 1
    const filteredOrder = updatedOrder.filter((item) => item.quantity >= 1);
  
    setOrder(filteredOrder);
  
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) - 1,
    }));
  }

  const clearOrder = () => {
    setOrder([]);
    setProductQuantities({});
  }

  const orderContextValue = {
    order,
    addToOrder,
    increaseQuantity,
    decreaseQuantity,
    clearOrder,
    productQuantities,
    setProductQuantities,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
}

