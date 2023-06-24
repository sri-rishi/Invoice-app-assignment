import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (quantity <= 0 || price <= 0) {
      alert(" Please enter postive values");
      setName("");
      setQuantity("");
      setPrice("");
      return;
    }

    const newItem = {
      name,
      quantity,
      price
    };

    setItems([...items, newItem]);
    setTotal(total + quantity * price);

    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Invoice App</h1>

      <form>
        <label>
          Item Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <br />
        <button type="button" onClick={addItem}>
          Add Item
        </button>
      </form>

      <h2>Invoice Items</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: {total}</h3>
    </div>
  );
}
