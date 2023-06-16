import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cart.slice";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const toggleAddProductToCart = () => {
    const newProductToCart = { id, title, quantity: 1, total: price, price };
    dispatch(cartActions.addProductToCart({ product: newProductToCart }));
  };

  const checkProductExistenceInCart = () => {
    const existence =  cartProducts.some((pr) => pr.id === id);
    return existence !==1;
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        {checkProductExistenceInCart && (
          <div className={classes.actions}>
            <button onClick={toggleAddProductToCart}>Add to Cart</button>
          </div>
        )}
      </Card>
    </li>
  );
};

export default ProductItem;
