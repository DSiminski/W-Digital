import "./registerStyle.css";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { Accordion, AccordionActions, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { TextFieldComponent } from "../../componentes/textfield";

const Register = () => {
  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Register"
      />
      <div className="container-register">
        <div className="conteiner-text">
          <TextFieldComponent
            style={{ width: "100%", color: "#ffff" }}
            label="Nome"
            type="text"
          />
        </div>

        <div className="conteiner-text">
          <TextFieldComponent
            style={{ width: "100%" }}
            label="Valor"
            type="number"
          />
            <form className="register-form">
            <div className="wrap-input">
              <TextFieldComponent
                style={{ width: "100%" }}
                label="Nome"
                type="text"
              />
            </div>

            <div className="wrap-input">
              <TextFieldComponent
                style={{ width: "100%" }}
                label="Valor"
                type="text"
              />
            </div>

            <div className="container-accordion">
              <Accordion>
              <AccordionActions title="Método de pagamentos"><p>Débito, crédito e á vista.</p></AccordionActions>

              </Accordion>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;

