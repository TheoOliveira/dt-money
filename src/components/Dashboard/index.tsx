import React from 'react'
import { Table } from '../TransactionTable'
import { Container } from './styles'
import { Summary } from './Summary'

export  function Dashboard() {
    return (
        <Container>
            <Summary/>
            <Table/>
        </Container>
    )
}
