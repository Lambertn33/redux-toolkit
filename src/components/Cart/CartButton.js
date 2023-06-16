import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart.slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const productsCount = useSelector(state => state.cart.products.length);
  console.log(productsCount);
  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{ productsCount }</span>
    </button>
  );
};

export default CartButton;
