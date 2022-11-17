import "./selectedExpenseStyle.css";
import { Header } from "../../componentes/header";
import { TextBox } from "../../componentes/textBox";
import { BasicTable } from "../../componentes/BasicTable";
import { Footer } from "../../componentes/footer";
import { Accordions } from '../../componentes/Accordion2'

const SelectedExpense = () => {
  return (
    <div className="container">
      <Header
        style={{ backgroundColor: "#0bff00" }}
        isHome={false}
        title="Expense Registered"
      />
      <div className="container-historico">
        <div className="conteiner-text">
          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="Total spent"
            valor="R$6,00"
          />

          <TextBox
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            title="portfolio balance"
            valor="R$ 500,00"
          />
        </div>
        <Accordions
        expanded = 'painelTable'
        />
        
      </div>

      <Footer/>
    </div>
  );
};

export default SelectedExpense;
