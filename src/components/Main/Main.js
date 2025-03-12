import React from 'react';
import styles from './main.module.scss';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

const Main = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <LeftSection />
          </div>
          <div className={styles.rightSection}>
            <RightSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
