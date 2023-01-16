import classes from '../styles/Answer.module.css'

export default function Answer({ className, text, ...rest }) {
  return (
    <label className={`${className} ${classes.answer}`} {...rest}>
      <input type="checkbox" {...rest} />
      {text}
    </label>
  );
}


