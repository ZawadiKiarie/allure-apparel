import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import { ReactComponent as AllureLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);//whenever a value inside of useContext changes, it tells the component to rerender it. A glorified hook into another component that will rerender its subsequent hooked components whenever the UserProvider component updates itself when useState is triggered. However when it rerenders the hooked component it will not rerender the DOM(return statement) if the value from usercontext is not used in it.
  const { isCartOpen } = useContext(CartDropdownContext);

  // console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <AllureLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign out</span>
            ): (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      {/* outlet describes where the route child will be placed-> always placed on the parent router */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation;