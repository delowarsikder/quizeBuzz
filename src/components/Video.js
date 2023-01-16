
import classes from "../styles/grid-list.module.css"
import studyMaterials from '../assets/images/study-materials.jpg'

export default function Video() {
  return (
    <div className={classes.video}>
      <img src={studyMaterials} alt="" />
      <p>Video title</p>
      <div className={classes.qmeta}>
        <p>Sample Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}

