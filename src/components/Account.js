import classes from '../styles/Account.module.css';
import {Link} from 'react-router-dom'

function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>

    </div>
  );
}

export default Account;
