import styled from 'styled-components';
import { Menu } from '../../components';
import { CardLarge, CardMedium, CardSmallPack } from './components/Cards';
import { LastTransactions } from './components/LastTransactions';
import { useState, useEffect } from 'react';
import { useServices } from '../../services/provider';
import { TransactionInfo, MonthlyBalance } from '../../services/MoneyBucketBffClient';

export const Dashboard = () => {
  const { moneyBucketService } = useServices();
  const [transactions, setTransactions] = useState<TransactionInfo[]>([]);
  const [monthlyBalance, setMonthlyBalance] = useState<MonthlyBalance>();

  useEffect(() => {
    const getCurrentMonthTransactions = async () => {
      const currentMonthTransactions = await moneyBucketService.fetchCurrentMonthTransactions();
      setTransactions(currentMonthTransactions);
    }

    const getCurrentMonthBalance = async () => {
      const currentMonthBalance = await moneyBucketService.fetchCurrentMonthBalance();
      setMonthlyBalance(currentMonthBalance);
    }

    getCurrentMonthTransactions();
    getCurrentMonthBalance()
  
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
    <Menu/>
    <DashboardContentContainer>
      <CardContainer>
        <CardMedium>
          <OverrallContainer>
            <CardTitleTextContainer>
              <CardTitleStrong>Saldo Total</CardTitleStrong>
            </CardTitleTextContainer>
            <MonetaryValueContainer value={monthlyBalance?.overralBalance!}>
              <MonetaryValue value={monthlyBalance?.overralBalance!}>
                R$ { monthlyBalance?.overralBalance.toLocaleString('pt') }
              </MonetaryValue>
            </MonetaryValueContainer>
          </OverrallContainer>

          <SummaryContainer>
            <SummaryTitle>RECEITA</SummaryTitle>
            <SummaryContent>R$ { monthlyBalance?.totalInput.toFixed(2) }</SummaryContent>
            <SummaryTitle>DESPESA</SummaryTitle>
            <SummaryContent>R$ { monthlyBalance?.totalOutput.toFixed(2) }</SummaryContent>
          </SummaryContainer>

        </CardMedium>

        <CardMedium>
          {/* <CardTitleTextContainer>
            <CardTitleSmall>Resumo</CardTitleSmall>
          </CardTitleTextContainer> */}
          {/* some graphical info here */}
        </CardMedium>
      </CardContainer>

      <CardContainer>
        <CardLarge>
          <CardTitleTextContainer>
            <CardTitleSmall>Últimas transações</CardTitleSmall>
          </CardTitleTextContainer>
          <LastTransactions transactions={transactions.slice(0, 5)} />
        </CardLarge>

        <CardSmallPack>
          <IndividualCard/>
          <IndividualCard/>
          <IndividualCard/>
          <IndividualCard/>
        </CardSmallPack>
      </CardContainer>
    </DashboardContentContainer>
  </>)
}

const DashboardContentContainer = styled.div`
  position: absolute;
  margin-left: 21rem;
  /* margin-top: 1rem; */
  width: 76%;
  height: 90%;
  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
`

const CardTitleTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`

const CardTitleStrong = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  margin-left: 2rem;
  margin-bottom: 0;
`

const CardTitleSmall = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin: 1rem 0 0 2rem;
`

const IndividualCard = styled.div`
  border-radius: 1.25rem;
  background: var(--main-white, #FFF);
  box-shadow: 8px 13px 44px -6px #DFDBF6;
  border: 1px solid gray;
  cursor: pointer;
`

const MonetaryValueContainer = styled.div<{ value: number }>`
  background-color: ${ props => props.value >= 0 ? '#DCF5E8' : '#F5DCDC' };
  width: fit-content;
  margin-left: 2rem;
  border-radius: .5rem;
`

const MonetaryValue = styled.p<{ value: number }>`
  font-size: 32px;
  font-weight: bold;
  color: ${ props => props.value >= 0 ? '#4FD18B' : '#D14F4F' };
  padding: .6rem;
`

const OverrallContainer = styled.div``

const SummaryContainer = styled.div`
  width: 12rem;
  height: 8rem;
  background-color: #0177FB;
  border-radius: .5rem;
  margin: 2rem 2rem 0 0;
`

const SummaryTitle = styled.p`
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 15px;
  margin-left: 1rem;
  margin-bottom: 0;
`

const SummaryContent = styled.p`
  color: white;
  text-align: left;
  font-size: 15px;
  margin-left: 1rem;
  margin-top: 4px;
`