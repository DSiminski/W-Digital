import "./historicoStyle.css";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";
import { Footer } from "../../componentes/footer";
import { Button } from "@mui/material";

const Historico = () => {
  return (
    <div className="container"  data-testid="historicoTest">
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
    
      <Footer/>
    </div>
  );
};

export default Historico;
function handleFunction(): void {
  throw new Error("Function not implemented.");
}

