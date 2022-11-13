import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './ActionItem.module.scss';

function ActionItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + props.id);
  };

  return (
    <li className={classes.item} onClick={showDetailsHandler}>
      <Card>
        <div className={classes.card}>
          <div className={classes.text}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
          <div className={classes.point}>
            <p>+{props.point}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ActionItem;
