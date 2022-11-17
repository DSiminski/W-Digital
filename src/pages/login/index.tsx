import React from "react";
import { LoginTypes } from "./login.types";
import "./loginStyle.css";
import { ButtonComponent } from "../../componentes/button";
import { TextFieldComponent } from "../../componentes/textfield";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { Footer } from "../../componentes/footer";
import { useNavigate } from 'react-router-dom';

import { Accordions } from "../../componentes/Accordion2";

function handleForm() {}

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Welcome to your Wallet!"
      />
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <div className="wrap-input">
              <TextFieldComponent
                style={{ width: "100%" }}
                label="Email"
                type="text"
              />
            </div>

            <div className="wrap-input">
              <TextFieldComponent
                style={{ width: "100%" }}
                label="Senha"
                type="password"
              />
            </div>

            <div className="container-login-form-btn">
              <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Entrar"
                onClick={() => navigate('/home')}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
