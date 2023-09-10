import { useState } from 'react';
import { Accordion, Menu } from '../../components';
import { Category, FinanceInstitution, Transaction } from './components';
import styled from 'styled-components';

export const Management = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Outer>
      <Menu />

      <Container>
        <TitleContainer>
          <Title>Gestão</Title>
        </TitleContainer>

        <ActionsContainer>
          <Accordion
            summary='Adicionar categoria'
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <Category/>
          </Accordion>

          <Accordion
            summary='Adicionar instituição financeira'
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <FinanceInstitution />
          </Accordion>

          <Accordion
            summary='Adicionar transação'
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <Transaction />
          </Accordion>
        </ActionsContainer>
      </Container>
    </Outer>
  )
}

const Outer = styled.div`
  background-color: blue;
`

const Container = styled.div`
  position: absolute;
  /* background-color: green; */
  justify-content: end;
  margin-left: 25rem;
  margin-top: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 1rem;
  padding-bottom: .5rem;
`

const Title = styled.h2`
  margin: .5rem 0 .2rem 0;
`

const Description = styled.span``

const ActionsContainer = styled.div`
  padding: 1rem;
`