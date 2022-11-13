import ActionDetailItem from '../../components/actions/ActionDetailItem';
import Layout from '../../components/layout/Layout';
import './index.module.scss';

const ActionDetail = () => {
  return (
    <Layout>
      <div className={classes.page}>
        <ActionDetailItem />
      </div>
    </Layout>
  );
};

export default ActionDetail;
