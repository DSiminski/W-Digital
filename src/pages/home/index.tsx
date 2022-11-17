import React from "react";
import "./styles.css";

import { Header } from "../../componentes/header";
import { Button, RadioGroup } from "@mui/material";
import { Footer } from "../../componentes/footer";
import { TextBox } from "../../componentes/textBox";
import { useNavigate } from 'react-router-dom';



const Home = () => {

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
            onClick={() => navigate('/historico')}
          >
            Expenses
          </Button>
        </div>

        <div className="container-input">
          <Button
            className="container-value"
            onClick={() => navigate('/register')}
          >
            New Expenses
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
