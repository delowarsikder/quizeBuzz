
import classes from "../styles/grid-list.module.css"
import studyMaterials from '../assets/images/study-materials.jpg'

export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={studyMaterials} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}