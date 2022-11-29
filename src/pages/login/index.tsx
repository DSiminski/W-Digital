import "./loginStyle.css";
import { ButtonComponent } from "../../componentes/button";
import { TextFieldComponent } from "../../componentes/textfield";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react"

const Login = () => {

  function handleCadastro(){
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [validoEmail, setValidoEmail] = useState('true');
  const [validoSenha, setValidoSenha] = useState('true');

  function validateEmail(email: string) {
    var filter =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    return String(email).search(filter) != -1;
  }
  function validatePassword(password: string) {
    var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return String(password).search(filter) != -1;
  }

  function validadeFilds(email: string, password: string) {
    let valid = true;
    console.clear();

    if (!validateEmail(email)) {
      valid = false;
      setValidoEmail("false");
    }
    if (!validatePassword(password)) {
      valid = false;
      setValidoSenha("false");
    }

    console.log(valid);

    return valid;
  }

  function useLogin() {
    if (validadeFilds(email, password)) {
      navigate("/home");
    }
  }

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
            {validoEmail === 'true' ? <TextFieldComponent 
                    label="Email" 
                    value={email} type="email"
                    data-testid="emailTest"
                    onChange={(e) => setEmail(e.target.value) }
                    /> : <TextFieldComponent  
                                   label="Email"
                                    value={email} type="email"
                                    onChange={(e) => setEmail(e.target.value) }
                                    error = {true}
                                    msg= "Imail Invalido"

                    />}
            </div>

            <div className="wrap-input">
            {validoSenha === 'true' ? <TextFieldComponent 
                    value={password} type="password"
                    data-testid="senhaTest"
                    onChange={(e) => setPassword(e.target.value) }
                    /> : <TextFieldComponent 
                                    value={password} type="password"
                                    label="Senha"
                                    onChange={(e) => setPassword(e.target.value) }
                                    error = {true}
                                    msg= "Senha Invalida"
                    />}
              
            </div>

            <div className="container-login-form-btn">
              <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Entrar"
                onClick={useLogin}
              />
            </div>

            <div className="container-login-form-btn" >
                 <h3  style={{color: '' }}> </h3> <h3 className="container-login-form-btn" onClick={handleCadastro} style={{color: "rgb(57, 71, 203)"}}> Cadastar </h3>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


