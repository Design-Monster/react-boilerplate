import React from 'react';
import styles from 'components/dynamic/ui/mobileMenu/MobileMenu.module.scss';

function MobileMenu() {
  return (
    <div className={styles.something}>
      You are inside the components/dynamic/ui/mobileMenu component, which is being called by the components/structural/header component.
    </div>
  );
}

export default MobileMenu;
