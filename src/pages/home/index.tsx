import React from "react";
import { Header } from "../../componentes/header";
import { Button, RadioGroup } from "@mui/material";
import { Footer } from "../../componentes/footer";


const Home = ( ) => {
  return (
    <div className="container">
      <Header
<<<<<<< HEAD
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Home"
=======
         style={{ backgroundColor: "rgb(57, 71, 203)" }}
         isHome={true}
         title="Welcome to your Wallet!"
>>>>>>> c023fa5d9539c4de77602436425f59abce5ed86e
      />
      <div className="container-home">
        <div className="container-inferior">
<<<<<<< HEAD
            <div className="valor"></div>
=======
            <div className="valor">
            </div>
>>>>>>> c023fa5d9539c4de77602436425f59abce5ed86e
        </div>
      </div>
      <div className="container-two">
        <Button onClick={() => {alert('clicked');}}>Expenses</Button>
      </div>
      <div className="container-three">
        <Button onClick={() => {alert('clicked');}}>New Expenses</Button>
<<<<<<< HEAD
      </div>
      <Footer/>
    </div>
     
      
=======
        </div>

        <Footer/>
    </S.Container>
>>>>>>> c023fa5d9539c4de77602436425f59abce5ed86e
  );
};
export default Home;

