import React from "react";
import { Header } from "../../componentes/header";
import { Button, RadioGroup } from "@mui/material";
import { Footer } from "../../componentes/footer";


const Home = ( ) => {
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
      </div>
      <div className="container-two">
        <Button onClick={() => {alert('clicked');}}>Expenses</Button>
      </div>
      <div className="container-three">
        <Button onClick={() => {alert('clicked');}}>New Expenses</Button>
      </div>
      <Footer/>
    </div>
       
  );
};
export default Home;

