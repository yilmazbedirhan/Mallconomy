import Image from 'next/image';
import img from '../public/cover.png';
import Card from '../components/ui/Card';
import classes from './index.module.scss';
import Button from '../components/ui/Button';
import { useRouter } from 'next/router';

const HomePage = props => {
  const router = useRouter();

  const startHandler = () => {
    router.push('/actions');
  };

  return (
    <div className={classes.home}>
      <div className={classes.logo}>
        <h1>TestCase APP</h1>
        <h3>“Pixel Perfect”</h3>
      </div>

      <div className={classes.image}>
        <Image
          src={img}
          alt="Picture of the author"
          width="300px"
          height="272px"
        />
      </div>

      <div className={classes.card}>
        <Card>
          <div className={classes.content}>
            <h2>Welcome to the TestCase APP!</h2>
            <p>
              I created this exercise to show insights about my development
              skills.
            </p>
            <div className={classes.button}>
              <Button onClick={startHandler}>Start</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
