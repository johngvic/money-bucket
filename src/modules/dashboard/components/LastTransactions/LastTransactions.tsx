import styled from 'styled-components';
import { TransactionInfo } from '../../../../services/MoneyBucketBffClient';

type LastTransactionsProps = {
  transactions: TransactionInfo[];
}

export const LastTransactions = ({ transactions }: LastTransactionsProps) => {
  const shrinkName = (name: string) => {
    const maxLength = 16;
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  }

  return (
    transactions.length > 0 ?
    (<Table>
      <Row>
        <Header>Nome</Header>
        <Header>Data</Header>
        <Header>Valor</Header>
      </Row>

      {transactions.map((transaction) => (
        <Row>
          <Data>{ shrinkName(transaction.title) }</Data>
          <Data>{ new Date(transaction.date).toLocaleDateString('pt') }</Data>
          <MonetaryData value={Number(transaction.value)}>R$ { transaction.value?.toLocaleString('pt') }</MonetaryData>
        </Row>
      ))}
    </Table>) :
    <EmptyDataContainer>
      <p>Não houve transações feitas recentemente</p>
    </EmptyDataContainer>
  )
}

const Table = styled.table`
  margin-top: .5rem;
  border-spacing: 1.2rem;
  width: 100%;
`

const Row = styled.tr``
const Header = styled.th``

const Data = styled.td`
  word-break: break-all;
  max-width: .2rem;
  padding: .3rem;
`

const MonetaryData = styled.td<{ value?: number }>`
  max-width: .2rem;
  background-color: ${ props => props.value! >= 0 ? '#DCF5E8' : '#F5DCDC' };
  border-radius: .5rem;
`

const EmptyDataContainer = styled.div`
  margin: 7rem auto;
  border: 1px solid black;
  width: 18rem;
  padding: .5rem;
  border-radius: .5rem;
  background: var(--main-white, #FFF);
  box-shadow: 8px 13px 44px -6px #DFDBF6;
`