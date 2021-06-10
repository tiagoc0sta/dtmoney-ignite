import React from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable/Index';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>

  );
}