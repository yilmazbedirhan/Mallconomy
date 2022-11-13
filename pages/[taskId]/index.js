import ActionDetailItem from '../../components/actions/ActionDetailItem';
import Layout from '../../components/layout/Layout';
import classes from './index.module.scss';

const ActionDetails = props => {
  return (
    <div className={classes.page}>
      <Layout>
        <ActionDetailItem
          id={props.taskData.id}
          key={props.taskData.id}
          title={props.taskData.title}
          description={props.taskData.description}
          point={props.taskData.point}
          image={props.taskData.image}
        />
      </Layout>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://cdn.mallconomy.com/testcase/actions.json');

  const actionsCollection = await res.json();

  const actions = actionsCollection.map(task => ({
    id: task.id
  }));

  return {
    fallback: false,
    paths: actions.map(task => ({
      params: { taskId: task.id.toString() }
    }))
  };
}

export async function getStaticProps(context) {
  const taskId = context.params.taskId;

  const res = await fetch('https://cdn.mallconomy.com/testcase/actions.json');
  const actionsCollection = await res.json();

  const selectedtask = actionsCollection.find(task => task.id == taskId);

  return {
    props: {
      taskData: {
        id: selectedtask.id,
        title: selectedtask.title,
        description: selectedtask.description,
        point: selectedtask.point,
        image: selectedtask.image,
        key: selectedtask.id
      }
    }
  };
}

export default ActionDetails;
