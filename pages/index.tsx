import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Slider from '../components/Slider';
import useWindowSize from '../hooks/useWindowSize';

export default function Home(){
  const size = useWindowSize();

  useEffect(() => {
    document.title = "Flora Coban Talun";
    }, []);
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          {size.width !== undefined && size.width > 768 ? <Slider /> : <ImageCarousel />}
        </main>
      </div>
    );
};