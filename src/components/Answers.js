import classes from '../styles/Answers.module.css';
import Answer from './Answer';

export default function Answers() {
  return (
    <div className={classes.answers}>

      <Answer text="answer no 1" />
      <Answer text="answer no 2" />
      <Answer text="answer no 3" />
      <Answer className="wrong" text="answer no 4" />
      <Answer text="answer no 5" />
      <Answer text="answer no 6" />
      <Answer text="answer no 7" />
      <Answer text="answer no 8" />
      <Answer text="answer no 9" />
      <Answer text="answer no 10" />

    </div>
  );
}


