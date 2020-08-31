import React from 'react';
import styles from 'components/structural/childExample/ChildExample.module.scss';

function ChildExample() {
  return (
    <div className={styles.child}>
      Hello You are in the Child Example Component, which is inside the Home Component, which is being called in App.jsx route, which is being displayed by index.jsx at the src folder level.
    </div>
  );
}

export default ChildExample;
