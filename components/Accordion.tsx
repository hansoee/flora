import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { images } from "../public/data/imageData";

import { Typography, Grid } from '@mui/material'

const FAQ = () => {
    return (
        <Grid
            container
            gap={2}
            sx={{ px: 8, mb: 20, maxWidth: "1000px", mx: "auto" }}
        >
        {images.map((image, index) => (
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
        ))}
        </Grid>
    );
};

export default FAQ;