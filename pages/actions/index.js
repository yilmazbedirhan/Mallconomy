import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../components/context/AppContext';
import { LoadContext } from '../../components/context/LoadContext';

import ActionList from '../../components/actions/ActionList';
import Layout from '../../components/layout/Layout';
import classes from './index.module.scss';

const Actions = props => {
  const [completed, setCompleted] = useContext(AppContext);
  const [remainActions, setRemainActions] = useContext(LoadContext);

  useEffect(() => {
    setRemainActions(props.actions);
  }, []);

  return (
    <div classes={classes.page}>
      <Layout>
        <ActionList actions={remainActions} />
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://cdn.mallconomy.com/testcase/actions.json');
  const actions = await res.json();

  return {
    props: {
      actions: actions.map(task => ({
        id: task.id,
        key: task.id,
        title: task.title,
        description: task.description,
        point: task.point,
        image: task.image
      }))
    },
    revalidate: 1
  };
}

export default Actions;
