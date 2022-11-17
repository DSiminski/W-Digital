import React from "react";
import { LoginTypes } from "./login.types";
import "./loginStyle.css";
import { ButtonComponent } from "../../componentes/button";
import { TextFieldComponent } from "../../componentes/textfield";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
function handleForm() {}

const Login = () => {
  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isLogin={true}
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
                onClick={() => handleForm()}
              />
            </div>
          </form>
        </div>
      </div>
      <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="Portfolio balance"
            valor="RS500,00"
          />
    </div>
  );
};

export default Login;
