import classes from '../styles/Answer.module.css';
import CheckBox from './CheckBox';

export default function Answer() {
  return (
    <>
      <CheckBox className={`${classes.answer} ${classes.correct}`} text="answer no 1" />
      <CheckBox className={`${classes.answer}`} text="answer no 2" />
      <CheckBox className={`${classes.answer}`} text="answer no 3" />
      <CheckBox className={`${classes.answer} ${classes.wrong}`} text="answer no 4" />
      <CheckBox className={`${classes.answer}`} text="answer no 5" />
    </>
  );
}


