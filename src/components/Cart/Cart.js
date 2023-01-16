import classes from "./Cart .module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", price: 12.99, amount: 2 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div></div>
    </div>
  );
};
export default Cart;
