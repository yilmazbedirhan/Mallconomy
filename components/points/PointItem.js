import Card from '../ui/Card';
import classes from './PointItem.module.scss';

function PointItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.card}>
          <h3>{props.title}</h3>
          <p>+{props.point}</p>
        </div>
      </Card>
    </li>
  );
}

export default PointItem;
