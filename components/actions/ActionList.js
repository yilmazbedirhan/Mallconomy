import ActionItem from './ActionItem';
import classes from './ActionList.module.scss';

function ActionList(props) {
  return (
    <div className={classes.actions}>
      <div className={classes.action_list}>
        <h2>Actions to be completed</h2>
        <ul className={classes.list}>
          {props.actions.map(task => (
            <ActionItem
              key={task.id}
              id={task.id}
              title={task.title}
              point={task.point}
              image={task.image}
              description={task.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActionList;
