import React from "react";
import * as S from "./styles"
import { Header } from "../../componentes/header";
import { Button, RadioGroup } from "@mui/material";


const Home = ( ) => {
  return (
    <S.Container>
      <Header
         style={{ backgroundColor: "rgb(57, 71, 203)" }}
         isLogin={true}
         title="Welcome to your Wallet!"
      />
        <div className="container-inferior">
            <div className="valor">
              
            </div>
        </div>
        <div className="container-two">
        <Button onClick={() => {alert('clicked');}}>Expenses</Button>
        </div>
        <div className="container-three">
        <Button onClick={() => {alert('clicked');}}>New Expenses</Button>
        </div>
     
    </S.Container>
  );
};
export default Home;

