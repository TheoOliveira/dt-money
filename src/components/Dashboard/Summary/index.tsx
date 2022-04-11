import React, { useContext } from 'react'
import { Container } from './styles'
import incomeImg from '../../../assets/entradas.svg'
import outcomeImg from '../../../assets/saida.svg'
import totalImg from '../../../assets/total.svg'
import { useTransactions } from '../../../hooks/useTransactions'

export function Summary() {
    const { transactions } = useTransactions();
    const summmary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })
    return (
        <>
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="Entradas"></img>
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: "BRL"
                        }).format(summmary.deposits)}
                    </strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="Saídas"></img>
                    </header>
                    <strong>-
                    {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: "BRL"
                }).format(summmary.withdraws)}
                </strong>
                </div>
                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Total"></img>
                    </header>
                    <strong>
                    {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: "BRL"
                }).format(summmary.total)}
                    </strong>
                </div>
            </Container>
        </>
    )
}


