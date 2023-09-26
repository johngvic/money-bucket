import { useState } from 'react';
import { Accordion, Menu } from '../../components';
import { Category, FinanceInstitution, Transaction } from './components';
import styled from 'styled-components';
import { EditData } from './components/EditData';

export const Management = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Menu />
      <Container>
        <TitleContainer>
          <Title>Gestão</Title>
        </TitleContainer>

        <ActionsContainer>
          <ActionsContainerTitle>Adicionar novos itens</ActionsContainerTitle>
          <Accordion
            summary='Adicionar categoria'
            expanded={expanded === 'addCategoryPanel'}
            onChange={handleChange('addCategoryPanel')}
          >
            <Category/>
          </Accordion>

          <Accordion
            summary='Adicionar instituição financeira'
            expanded={expanded === 'addFinanceInstitutionPanel'}
            onChange={handleChange('addFinanceInstitutionPanel')}
          >
            <FinanceInstitution />
          </Accordion>

          <Accordion
            summary='Adicionar transação'
            expanded={expanded === 'addTransactionPanel'}
            onChange={handleChange('addTransactionPanel')}
          >
            <Transaction />
          </Accordion>
        </ActionsContainer>

        <ActionsContainer>
          <ActionsContainerTitle>Editar itens existentes</ActionsContainerTitle>
          <Accordion
            summary='Editar categoria'
            expanded={expanded === 'editCategoryPanel'}
            onChange={handleChange('editCategoryPanel')}
          >
            {/* <Category/> */}
            <EditData editableAttributes={["name"]} data={[]} />
          </Accordion>

          <Accordion
            summary='Editar instituição financeira'
            expanded={expanded === 'editFinanceInstitutionPanel'}
            onChange={handleChange('editFinanceInstitutionPanel')}
          >
            {/* <FinanceInstitution /> */}
          </Accordion>

          <Accordion
            summary='Editar transação'
            expanded={expanded === 'editTransactionPanel'}
            onChange={handleChange('editTransactionPanel')}
          >
            {/* <Transaction /> */}
          </Accordion>
        </ActionsContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
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

const Title = styled.h1`
  margin: .5rem 0 .2rem 0;
`

const ActionsContainerTitle = styled.h2`
  justify-content: right;
  text-align: left;
`

const ActionsContainer = styled.div`
  padding: 1rem;
`