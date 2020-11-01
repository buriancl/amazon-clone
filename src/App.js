import React, { useEffect } from "react";

//Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Authentication
import { auth } from "./firebase";

// State Management
import { useStateValue } from "./StateProvider";

//Style
import "./App.css";

const promise = loadStripe("pk_test_NAbdGv65PtfIVBHCsEqJihBD00HqUNavdG");

//State Management from StateProvider
function App() {
  const [{}, dispatch] = useStateValue();

  //Authentication
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>> ", authUser);

      if (authUser) {
        //user just logged in or was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
