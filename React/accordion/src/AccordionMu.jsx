import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionMu = (props) => {
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
            {props.data.title}
        </AccordionSummary>
        <AccordionDetails>
            {props.data.description}
        </AccordionDetails>
    </Accordion>
  )
}

export default AccordionMu;