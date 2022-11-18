import React from "react";
import "./styles.css";

import { Header } from "../../componentes/header";
import { Button } from "@mui/material";
import { Footer } from "../../componentes/footer";
import { useNavigate } from "react-router-dom";

import { TextFieldComponent } from "../../componentes/textfield";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  const handleFunction = () => {};
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Home"
      />
      <div className="container-home">
        <div className="container-inferior">
          <div className="valor"></div>
        </div>

        <div className="container-input">
          <Button
            className="container-value"
            onClick={() => navigate("/historico")}
          >
            Expenses
          </Button>
        </div>

        <div className="container-input">
          <Button
            className="container-value"
            onClick={() => navigate("/register")}
          >
            New Expenses
          </Button>
        </div>

        <div className="container-Accordion">
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
              <Typography style={{ color: "#fff" }}>R$ 500,00</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >

             
                 
                 <TextFieldComponent
                    style={{ width: "80%"}}
                    label="Valor"
                    type="number"
                  />
                <Button
                  className="container-value"
                  onClick={() => handleFunction()}
                  style={{
                    width: "45%",
                    backgroundColor: "rgb(187, 186, 186)",
                    margin: "10px"
                  }}
                >
                  Salvar
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
