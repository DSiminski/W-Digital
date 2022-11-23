import React from "react";
import "./styles.css";

import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { TextBox } from "../../componentes/textBox";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { TextFieldComponent } from "../../componentes/textfield";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ButtonComponent } from "../../componentes/button";

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
          <div className="valor">
            
          </div>
        </div>

        <div className="container-input">
          <Button
            className="container-value"
            onClick={() => navigate ('/expense')}
          >
            New Expenses
          </Button>
        </div>
        
      </div>
      <div className=""
      <ButtonComponent
                position="left"
                themeColor="rgb(57, 71, 203)"
                title="Voltar"
                onClick={() => navigate('/home')}
              />
  
    <Footer />
    </div>
       
  );
};
export default Home;
