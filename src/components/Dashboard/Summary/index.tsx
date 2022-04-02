import React, {useContext} from 'react'
import { Container } from './styles'
import incomeImg from '../../../assets/entradas.svg'
import outcomeImg from '../../../assets/saida.svg'
import totalImg from '../../../assets/total.svg'
import  TransactionsContext  from "../../../TransactionsContext"

export  function Summary() {
    const data = useContext(TransactionsContext);
    return (
        <>
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"></img>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>R$500,00</strong>
            </div>
            </Container>
        </>
    )
}


