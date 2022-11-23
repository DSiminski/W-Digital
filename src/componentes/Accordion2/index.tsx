import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BasicTable } from "../../componentes/BasicTable";

interface AccordionProps {
  expanded?: string;
  isTable?: boolean;
}

export const Accordions = ({expanded, isTable}: AccordionProps) => {
  return (
    <div>

      <Accordion  style={{ borderRadius: "15px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "rgb(57, 71, 203)", borderRadius: "15px" }}
        >
          <Typography style={{ color: "#ffff" }} >Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicTable/>
          </Typography>
        </AccordionDetails>
      </Accordion> 


      


      
    </div>
  );
};
