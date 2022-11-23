import React, { useState } from "react";
import "./cadastroStyle.css";
import { ButtonComponent } from "../../componentes/button";
import { TextFieldComponent } from "../../componentes/textfield";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { useNavigate } from 'react-router-dom';
import { addUser, useAppSelector } from "../../store/storeLogin";
import { useDispatch } from "react-redux";

function handleForm() {}

const Cadastro = () => {
  const dispatch = useDispatch();
  const usersState = useAppSelector((state) => state.userReducer);

  const [user, setUser] = useState({
    nome: '',
    email: '',
    password: ''
  });
  const handleSubmit = () => {
    dispatch(addUser(user));
  }
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
                label="Nome"
                type="text"
                name="nome"
                onChange={(e) => setUser({...user, nome: e.target.value})}
              />
            </div>
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
                title="Cadatrar"
                onClick={() => {handleSubmit(); navigate('/cadastrar')}}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;
