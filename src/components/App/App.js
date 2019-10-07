import React from 'react';

// Import local components
import ImageSidebar from '../ImageSidebar/ImageSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

// Import main stylesheet
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <ImageSidebar />
      <RightSidebar />
    </div>
  );
}
