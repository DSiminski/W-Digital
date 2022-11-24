import "./historicoStyle.css";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";
import { Footer } from "../../componentes/footer";
import { ButtonComponent } from "../../componentes/button";
import { Navigate, useNavigate } from "react-router-dom"; 

const Historico = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Historico"
      />
      <div className="container-historico">
        <div className="conteiner-text">
          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="Portfolio balance"
            valor="RS500,00"
          />

          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="Total spent"
            valor="R$127,00"
          />
        </div>
        <BasicTable />
      </div>
      <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Voltar"
                onClick={() => navigate('/home')}
              />
      <Footer
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isEnd={false}
        bottom="Made by Maria Julia and Dayane"
      />
    
    </div>
  );
};

export default Historico;
function handleFunction(): void {
  throw new Error("Function not implemented.");
}

