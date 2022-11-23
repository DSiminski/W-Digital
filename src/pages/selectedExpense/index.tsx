import "./selectedExpenseStyle.css";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";
import { Footer } from "../../componentes/footer";
import { Accordions } from "../../componentes/Accordion2";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { ButtonComponent } from "../../componentes/button";
import { Navigate, useNavigate } from "react-router-dom";

const SelectedExpense = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "#0bff00" }}
        isHome={false}
        title="Expense Registered"
      />
      <div className="container-historico">
        <div className="conteiner-text">
          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="Total spent"
            valor="R$6,00"
          />

          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="portfolio balance"
            valor="R$ 500,00"
          />
        </div>
        <Accordion style={{ borderRadius: "15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              backgroundColor: "rgb(57, 71, 203)",
              borderRadius: "15px",
            }}
          >
            <Typography style={{ color: "#ffff" }}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <BasicTable />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Entrar"
                onClick={() => navigate('/home')}
              />
      <Footer />
    </div>
  );
};

export default SelectedExpense;
function handleFunction(): void {
  throw new Error("Function not implemented.");
}

