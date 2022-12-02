import "./registerStyle.css";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { Accordion, AccordionActions, Button } from "@mui/material";
import react from "react";
import { TextFieldComponent } from "../../componentes/textfield";
import { despesa } from "../../interface/despesa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  editaAtualizaValorDolar,
  editaDescricao,
  editaDataDaDespesa,
  editaMoeda,
  editaTag,
  editaValor,
  editaValorDolar,
  editaDespesas,
  editaMetodoDePagamento,
  editaValorTotal,
} from "../../redux/geralSlice";
import { ButtonComponent } from "../../componentes/button";

const Register = () => {
  let DateType: Date = new Date(Date.now());
  const dispatch = useDispatch();
  const stateGeral = useSelector((state: RootState) => state);

  react.useEffect(() => {
    dolarAtual();
  }, [stateGeral.geral.atualizaValorDolar]);

  const dolarAtual = async () => {
    try {
      const res = await fetch("https://economia.awesomeapi.com.br/json/all");
      const json = await res.json();
      dispatch(editaValorDolar(parseFloat(json.USD.bid)));
    } catch (error) {
      console.log(error);
    }
  };

  function calculoDoValorTotal() {
    const despesaExibidasLocal: despesa[] = stateGeral.geral.despesasExibidas;
    let valorTotalAtual = 0;
    despesaExibidasLocal.map((despesaAtual) => {
      let valorEmReal = parseFloat(despesaAtual.valor.toString());

      if (despesaAtual.moeda === "DOLAR") {
        valorEmReal = despesaAtual.valor * stateGeral.geral.valorDolar;
      }
      valorTotalAtual += valorEmReal;
    });
    dispatch(editaValorTotal(valorTotalAtual.toFixed(2)));
  }

  function cadastrarDespesa() {
    const newExpense: despesa = createExpense();
    clearExpense();
    dispatch(editaDespesas([...stateGeral.geral.despesas, newExpense]));
    atualizaValorDolar();
  }

  function atualizaValorDolar() {
    dispatch(editaAtualizaValorDolar(true));
  }

  function createExpense(): despesa {
    return {
      valor: stateGeral.geral.valor,
      metodoDePagamento: stateGeral.geral.metodoDePagamento,
      moeda: stateGeral.geral.moeda,
      tag: stateGeral.geral.tag,
      data: stateGeral.geral.dataDaDespesa,
      descricao: stateGeral.geral.descricao,
    };
  }

  function clearExpense() {
    dispatch(editaValor(0));
    dispatch(editaDescricao(""));
    dispatch(editaMoeda(""));
    dispatch(editaTag(""));
    dispatch(editaDataDaDespesa(DateType));
    dispatch(editaMetodoDePagamento(""));
  }

  return (
    <div className="container" data-testid="registerTest">
      <Header
        style={{ backgroundColor: "rgb(57, 71, 203)" }}
        isHome={false}
        title="Register"
      />
      ,
      <div className="container-register">
        <form className="register-form">
          <div className="wrap-input">
            <select
              style={{
                width: "15%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "15px",
                borderColor: "#6a7dfe",
                borderStyle: "solid",
                marginRight: "20px",
              }}
              data-testid="home-page-select-moeda"
              placeholder={"Moeda"}
              value={stateGeral.geral.moeda}
              onChange={(e) => dispatch(editaMoeda(e.target.value))}
            >
              <option value="BRL">BRL</option>
              <option value="DOLAR">USD</option>
            </select>

            <TextFieldComponent
              style={{ width: "78%" }}
              data-testid="home-page-input-valor"
              type="number"
              name="Valor"
              label="Valor"
              value={stateGeral.geral.valor}
              onChange={(e) => dispatch(editaValor(e.target.value))}
            />
          </div>
          <TextFieldComponent
            style={{ width: "100%" }}
            name="Nome"
            label="Descrição"
            value={stateGeral.geral.descricao}
            onChange={(e) => dispatch(editaDescricao(e.target.value))}
          />

          <div className="conteiner-select">
            <select
              data-testid="home-page-select-metodoDePagamento"
              placeholder={"Metodo de Pagamento"}
              value={stateGeral.geral.metodoDePagamento}
              onChange={(e) => dispatch(editaMetodoDePagamento(e.target.value))}
              style={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "8px",
                borderColor: "#6a7dfe",
                borderStyle: "solid",
              }}
            >
              <option value="DINHEIRO">Dinheiro</option>
              <option value="CARTÃO DE DÉBITO">Cartão de débito</option>
              <option value="CARTÃO DE CRÉDITO">Cartão de crédito</option>
            </select>
          </div>

          <div className="conteiner-select">
            <select
              style={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "8px",
                borderColor: "#6a7dfe",
                borderStyle: "solid",
              }}
              data-testid="home-page-select-tag"
              placeholder={"Tag"}
              value={stateGeral.geral.tag}
              onChange={(e) => dispatch(editaTag(e.target.value))}
            >
              <option value="ALIMENTAÇÃO">Alimentação</option>
              <option value="LAZER">Lazer</option>
              <option value="TRABALHO">Trabalho</option>
              <option value="TRANSPORTE">Transporte</option>
              <option value="SAÚDE">Saúde</option>
            </select>
          </div>

          <div className="container-login-form-btn">
            <ButtonComponent
              themeColor="rgb(57, 71, 203)"
              onClick={cadastrarDespesa}
              title="Entrar"
              value={"+ adicionar"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
