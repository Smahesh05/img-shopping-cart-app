import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../CartContext";
import { hover } from "@testing-library/user-event/dist/hover";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i className={iconClassName} onClick={() => removeFromCart(item)}></i>
      <img src={item.url} width="100px" alt="imgae" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
