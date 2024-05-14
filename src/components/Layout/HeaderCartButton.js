import { useContext } from "react";
import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";


const HeaderCartButton = (props) => {

 const cartCntxt = useContext(CartContext);

 let quantity=0;
 cartCntxt.items.forEach(item=>{
  quantity = quantity  +  Number(item.quantity)
 })

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>  
      
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
