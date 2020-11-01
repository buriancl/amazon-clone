import React from "react";

//State Management
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./Reducer";

//React Router
import { useHistory } from "react-router-dom";

// Converts floating point numbers (floats) into currency format
import CurrencyFormat from "react-currency-format";

// Styles
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
