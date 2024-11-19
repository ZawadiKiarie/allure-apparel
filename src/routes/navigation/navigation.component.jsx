import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as AllureLogo } from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            Sign in
          </Link>
        </div>
      </div>
      {/* outlet describes where the route child will be placed-> always placed on the parent router */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation;