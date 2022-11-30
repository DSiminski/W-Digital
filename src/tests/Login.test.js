import { Provider } from "react-redux";
import {store} from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import Login from '../pages/Login';


function renderizaPagina(element) {
    render(
        <Provider store={store}>
            <BrowserRouter>
                {element}
            </BrowserRouter>
        </Provider>
    )
}

describe("basic login elements testing switch", () => {

    it("should see if the login fields exist", () => {
        renderizaPagina(<Login/>)
        expect(screen.getByTestId("emailTest")).toBeInTheDocument();
        expect(screen.getByTestId("senhaTest")).toBeInTheDocument();
    })

})