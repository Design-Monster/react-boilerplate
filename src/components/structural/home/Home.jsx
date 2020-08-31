import React from 'react';
import styles from 'components/structural/home/Home.module.scss';
import ChildExample from 'components/structural/childExample/ChildExample';

function Home() {
  return (
    <div className={styles.home}>
      <ChildExample />
    </div>
  );
}

export default Home;
