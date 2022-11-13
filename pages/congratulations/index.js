import { useRouter } from 'next/router';
import classes from './index.module.scss';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import checkSign from '../../public/Vector.png';

const Congratulations = props => {
  const router = useRouter();

  const showActionsHandler = () => {
    router.push('/actions');
  };

  return (
    <div className={classes.page}>
      <Layout>
        <div className={classes.card}>
          <Card>
            <div className={classes.detail}>
              <div className={classes.image}>
                <Image
                  src={checkSign}
                  alt="Picture of the author"
                  width="72px"
                  height="72px"
                />
              </div>
              <h1>Congratulations!</h1>
              <p>
                You've earned points for your participation! Keep Up the great
                work!
              </p>
              <div className={classes.button}>
                <Button onClick={showActionsHandler}>Close</Button>
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Congratulations;
