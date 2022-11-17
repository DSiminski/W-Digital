import React from "react";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";

const Register = () =>{
        return (
          <div className="container">
            <Header
              style={{ backgroundColor: "rgb(57, 71, 203)" }}
              isHome={false}
              title="Register"
            />
            <div className="container-register">
              <div className="conteiner-text">
               </div>
               </div>
      
            <Footer/>
          </div>
        );
      };
      
export default Register;
