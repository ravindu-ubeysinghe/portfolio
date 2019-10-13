import React from 'react';
import cx from 'classnames';

// Import local components
import ImageSidebar from '../../views/ImageSidebar/ImageSidebar';
import RightSidebar from '../../views/RightSidebar/RightSidebar';

// Import main stylesheet
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <ImageSidebar className={cx([styles.col4, styles.left])} />
      <RightSidebar className={cx([styles.col8, styles.right])} />
    </div>
  );
}
