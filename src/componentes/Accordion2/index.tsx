import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BasicTable } from "../../componentes/BasicTable";

interface AccordionProps {
  expanded?: string;
}

export const Accordions = ({expanded }: AccordionProps) => {
  return (
    <div>

       <Accordion expanded={expanded === "painelTable"} >
        <AccordionSummary
          style={{ backgroundColor: "rgb(57, 71, 203)" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }} 
          style={{ color: "#ffff" }}
          >
            Historic
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
