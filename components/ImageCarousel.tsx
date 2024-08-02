import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import { images } from '../public/data/imageData';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography, Grid } from '@mui/material'

export default function ImageCarousel(){
  return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.upperText}>
              <div className={styles.innerWrapper}>
                <h4 className={styles.subtitle}>{image.subtitle}</h4>
                <h1 className={styles.title}>{image.title}</h1>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.lowerText}>
              <div className={styles.innerWrapper}>
                <h2 className={styles.descTitle}>Fakta Menarik</h2>
                <p className={styles.description}>{image.description}</p>
              </div>
            </div>
            <Grid
            container
            gap={2}
            sx={{ px: 8, mb: 20, maxWidth: "1000px", mx: "auto" }}
            >
              <Grid xs={12} key={index}>
                  <Accordion>
                      <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel-content"
                          id="panel-header"
                      >
                          <Typography>Klasifikasi</Typography>
                      </AccordionSummary>
                      <AccordionDetails id="panel-content" sx={{ textAlign: "left" }}>
                          <Typography>Kingdom: {image.klasifikasi.kingdom}</Typography>
                          <Typography>Divisi: {image.klasifikasi.divisi}</Typography>
                          <Typography>Kelas: {image.klasifikasi.kelas}</Typography>
                          <Typography>Ordo: {image.klasifikasi.ordo}</Typography>
                          <Typography>Famili: {image.klasifikasi.famili}</Typography>
                          <Typography>Genus: {image.klasifikasi.genus}</Typography>
                          <Typography>Species: {image.klasifikasi.spesies}</Typography>
                      </AccordionDetails>
                  </Accordion>

                  <Accordion>
                      <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel-content"
                          id="panel-header"
                      >
                          <Typography>Habitat</Typography>
                      </AccordionSummary>
                      <AccordionDetails id="panel-content" sx={{ textAlign: "left" }}>
                          <Typography>{image.habitat}</Typography>
                      </AccordionDetails>
                  </Accordion>

                  <Accordion>
                      <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel-content"
                          id="panel-header"
                      >
                          <Typography>Manfaat</Typography>
                      </AccordionSummary>
                      <AccordionDetails id="panel-content" sx={{ textAlign: "left" }}>
                          {image.manfaat.map((item, i) => (
                              <li key={i}>
                                  <Typography>{i + 1}. {item}</Typography>
                              </li>
                          ))}
                      </AccordionDetails>
                  </Accordion>

                  <Accordion>
                      <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel-content"
                          id="panel-header"
                      >
                          <Typography>Morfologi</Typography>
                      </AccordionSummary>
                      <AccordionDetails id="panel-content" sx={{ textAlign: "left" }}>
                          <Typography>{image.morfologi}</Typography>
                      </AccordionDetails>
                  </Accordion>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};