
import { ButtonComponent } from "../../componentes/button"

import { Navigate, useNavigate } from "react-router-dom";

export function Expense (){

    const navigate = useNavigate();
   
    return (
        <div>
    
    <ButtonComponent
      themeColor="rgb(57, 71, 203)"
      title="Voltar"
      onClick={() => navigate('/home')}
    />
        </div>
    
    );
}
