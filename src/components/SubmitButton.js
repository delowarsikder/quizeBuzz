import classes from '../styles/SubmitButton.module.css'

export default function SubmitButton() {
  return (
    <>
      <div className={classes.button}>
        <span>Submit now</span>
      </div>
      <div className="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </>
  );
}

