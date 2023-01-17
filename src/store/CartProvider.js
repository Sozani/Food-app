import CartContext from "./Cart-context";
const CartProvider = (props) => {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
export default CartProvider;
