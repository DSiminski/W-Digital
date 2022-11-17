import "./historicoStyle.css";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";

const Historico = () => {
  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isLogin={false}
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
            title="Portfolio balance"
            valor="RS500,00"
          />
        </div>
        <BasicTable />
      </div>
    </div>
  );
};

export default Historico;
