import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../redux/store";
import Login from "./pages/login";
import Historico from './pages/historico';
import Home from './pages/home';
import SelectedExpense from './pages/selectedExpense';
import Register  from './pages/register';

function renderizaPagina(element) {
  render(
    <Provider store={store}>
        <BrowserRouter>
            {element}
        </BrowserRouter>
    </Provider>
  )
}


describe("verificação de renderização", ()=> {
  it("verifica page home", () => {
    renderizaPagina(<Home />);
    expect(screen.getByTestId("homeTest")).toBeInTheDocument();
  });

  it("verifica page login", () => {
    renderizaPagina(<Login />);
    expect(screen.getByTestId("loginTest")).toBeInTheDocument();
  });
  it("verifica page login", () => {
    renderizaPagina(<Historico />);
    expect(screen.getByTestId("historicoTest")).toBeInTheDocument();
  });
  it("verifica page login", () => {
    renderizaPagina(<Register />);
    expect(screen.getByTestId("registerTest")).toBeInTheDocument();
  });
  it("verifica page login", () => {
    renderizaPagina(<SelectedExpense />);
    expect(screen.getByTestId("selectedExpenseTest")).toBeInTheDocument();
  });

})