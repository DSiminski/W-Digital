import "./registerStyle.css";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
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
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
