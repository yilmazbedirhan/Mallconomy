import React, { useContext } from 'react';
import { AppContext } from '../../components/context/AppContext';
import Layout from '../../components/layout/Layout';
import PointList from '../../components/points/PointList';

const Points = props => {
  const [completed, setCompleted] = useContext(AppContext);

  let completedData = completed;

  return (
    <Layout>
      <PointList actions={completedData} />
    </Layout>
  );
};
export default Points;
