import classes from "./Cart .module.css";
const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", price: 12.99, amount: 2 }].map(
    (item) => <li>item.name</li>
  );

  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  );
};
export default Cart;
