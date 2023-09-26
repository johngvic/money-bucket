import styled from 'styled-components';
import { TextField, Button } from '../../../../components';
import { useState } from 'react';
import { useServices } from '../../../../services/provider';

export const FinanceInstitution = () => {
  const [financeInstitutionName, setFinanceInstitutionName] = useState('');
  const { moneyBucketService } = useServices();

  const handleSubmit = async () => {
    await moneyBucketService.addFinanceInstitution(financeInstitutionName);
    setFinanceInstitutionName('');
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Nome</Label>
          <TextField onChange={setFinanceInstitutionName} value={financeInstitutionName}/>
        </InputContainer>
      </FieldsContainer>
      <Button title="Enviar" onClick={handleSubmit} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  :nth-child(n + 2) {
    margin-left: 1rem;
  }
`;

const Label = styled.span`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;