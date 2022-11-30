import {fireEvent, render, screen} from "@testing-library/react";
import {Provider, useSelector} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter} from "react-router-dom";
import register from '../pages/register';

function renderizaPagina(element) {
    render(
        <Provider store={store}>
            <BrowserRouter>
                {element}
            </BrowserRouter>
        </Provider>
    )
}


describe("suite de testes register", () => {

    it("validacao da renderizacao dos elementos ", () => {
        renderizaPagina(< Register/>);
        expect(screen.getByTestId("home-page-input-valor")).toBeInTheDocument();
        expect(screen.getByTestId("home-page-select-moeda")).toBeInTheDocument();
        expect(screen.getByTestId("home-page-select-metodoDePagamento")).toBeInTheDocument();
        expect(screen.getByTestId("home-page-select-tag")).toBeInTheDocument();
        expect(screen.getByTestId("home-page-button-submit")).toBeInTheDocument();
    })

    it("valida valores conforme o input do usuario", () => {
        renderizaPagina(< Register/>);
        const inputDescricao = screen.getByTestId("home-page-input-descricao");
        const inputTag = screen.getByTestId("home-page-select-tag");
        const inputMetodoDePagamento = screen.getByTestId("home-page-select-metodoDePagamento");
        const inputMoeda = screen.getByTestId("home-page-select-moeda");

        expect(inputValor.value).toBe("0");
        expect(inputDescricao.value).toBe("");
        expect(inputTag.value).toBe("ALIMENTAÇÃO");
        expect(inputMetodoDePagamento.value).toBe("DINHEIRO");
        expect(inputMoeda.value).toBe("BRL");

        fireEvent.change(inputValor, {target: {value: 100}});
        fireEvent.change(inputDescricao, {target: {value: "teste"}});
        fireEvent.change(inputTag, {target: {value: "LAZER"}});
        fireEvent.change(inputMetodoDePagamento, {target: {value: "CARTÃO DE DÉBITO"}});
        fireEvent.change(inputMoeda, {target: {value: "DOLAR"}});

        expect(inputValor).toHaveValue(100);
        expect(inputDescricao).toHaveValue("teste");
        expect(inputTag).toHaveValue("LAZER");
        expect(inputMetodoDePagamento).toHaveValue("CARTÃO DE DÉBITO");
        expect(inputMoeda).toHaveValue("DOLAR");
    })

    it("valida se o item fica vazio apos o cadastro de uma despesa", () => {
        renderizaPagina(<Register/>);
        const inputValor = screen.getByTestId("home-page-input-valor");
        const inputTag = screen.getByTestId("home-page-select-tag");
        const inputMetodoDePagamento = screen.getByTestId("home-page-select-metodoDePagamento");
        const inputMoeda = screen.getByTestId("home-page-select-moeda");
        const inputButton = screen.getByTestId("home-page-button-submit");

        fireEvent.change(inputTag, {target: {value: "LAZER"}});
        fireEvent.change(inputMetodoDePagamento, {target: {value: "CARTÃO DE DÉBITO"}});
        fireEvent.change(inputMoeda, {target: {value: "DOLAR"}});

        fireEvent.click(inputButton);

        expect(inputValor).toHaveValue(0);
        expect(inputDescricao).toHaveValue("");
        expect(inputTag).toHaveValue("ALIMENTAÇÃO");
        expect(inputMetodoDePagamento).toHaveValue("DINHEIRO");
        expect(inputMoeda).toHaveValue("BRL");
    })

   

});