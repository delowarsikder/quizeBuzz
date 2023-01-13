import Account from "./Account";
import classes from '../styles/Nav.module.css';
import logo from '../assets/images/logo-bg.png';
// import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href={"index.html"} className={classes.brand}>
              <img src={logo} alt="Learn with Fun" />
              <h3>Hands On Learning</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}

export default Nav;

