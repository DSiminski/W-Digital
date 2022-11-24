import React from 'react';
import "./styles.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../../componentes/button';
import { Header } from '../../componentes/header';
import { Footer } from '../../componentes/footer';

export function Expense(){
    const navigate = useNavigate();
    return(
        <div>
        <Header
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            isHome={false}
            title="Expense"
        />
        <div className='component-button'>
            <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Voltar"
                onClick={() => navigate('/home')}
            />
        </div>
        <Footer 
            style={{ backgroundColor: "rgb(57, 71, 203)" }}
            isEnd={false}
            bottom="Made by Maria Julia and Dayane!"
        />
        </div>
    );
}