import classes from '../styles/Illustration.module.css'
import SignUpLogo from '../assets/images/signup.svg';

export default function Illustration() {
  return (
    <>
      <div className={classes.illustration}>
        <img src={SignUpLogo} alt="Signup" />
      </div>
    </>
  );
}


