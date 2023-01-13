import classes from '../styles/Account.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Account() {
  return (

    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Router>
        <a href={"signup.html"}>Signup</a>
      </Router>
    </div>
  );
}

export default Account;

