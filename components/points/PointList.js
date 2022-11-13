import PointItem from './PointItem';
import classes from './PointList.module.scss';

function PointList(props) {
  return (
    <div className={classes.actions}>
      <div className={classes.action_list}>
        <h2>Completed actions</h2>
        <ul className={classes.list}>
          {props.actions.map(task => (
            <PointItem
              key={task.id}
              id={task.id}
              title={task.title}
              point={task.point}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PointList;
