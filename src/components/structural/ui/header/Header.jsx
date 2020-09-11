import React from 'react';
import styles from 'components/structural/ui/header/Header.module.scss';
import MobileMenu from 'components/dynamic/ui/mobileMenu/MobileMenu';

function Header() {
  return (
    <div className={styles.header}>
      <MobileMenu />
    </div>
  );
}

export default Header;
