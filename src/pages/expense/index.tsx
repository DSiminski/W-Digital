import React from 'react';
import "./styles.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../../componentes/button';

export function Expense(){
    const navigate = useNavigate();
    return(
        <div>
    <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Voltar"
                onClick={() => navigate('/home')}
              />
        </div>
    );
}