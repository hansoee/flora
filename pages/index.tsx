import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Flora Coban Talun";
    }, []);
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <ImageCarousel />
        </main>
      </div>
    );
};

export default Home;
