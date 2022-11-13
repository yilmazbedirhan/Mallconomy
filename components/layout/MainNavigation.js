import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppContext } from '../context/AppContext';
import PointButton from '../ui/PointButton';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
  const [completed, setCompleted] = useContext(AppContext);

  let completedData = completed;
  const initialValue = 0;

  let sumOfPoints = completedData
    .map(element => element.point)
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const router = useRouter();

  const buttonHandler = () => {
    router.push('/points');
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/actions">
          <a className={classes.text}>
            TestCase <p className={classes.app}>APP</p>
          </a>
        </Link>
      </div>
      <div className={classes.button}>
        <PointButton onClick={buttonHandler}>Points: {sumOfPoints}</PointButton>
      </div>
    </header>
  );
}

export default MainNavigation;
