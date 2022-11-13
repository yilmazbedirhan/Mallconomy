import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { AppContext } from '../context/AppContext';
import classes from './ActionDetailItem.module.scss';
//import { LoadContext } from '../context/LoadContext';

const ActionDetailItem = props => {
  const [completed, setCompleted] = useContext(AppContext);
  //const [remainActions, setRemainActions] = useContext(LoadContext);

  const router = useRouter();

  const buttonHandler = () => {
    router.push('/congratulations');

    setCompleted(prevPoint => {
      return [
        ...prevPoint,
        {
          id: props.id,
          key: props.id,
          title: props.title,
          description: props.description,
          point: props.point,
          image: props.image
        }
      ];
    });
  };

  return (
    <div className={classes.card}>
      <Card>
        <section className={classes.detail}>
          <div className={classes.image}>
            <Image
              src={props.image}
              alt="Picture of the author"
              width="72px"
              height="72px"
            />
          </div>

          <h2>+{props.point} Points</h2>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className={classes.button}>
            <Button onClick={buttonHandler}>Earn points</Button>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default ActionDetailItem;
