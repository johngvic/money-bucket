import styled from 'styled-components';
import { TextField, Button } from '../../../../components';
import { useState } from 'react';

export const FinanceInstitution = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    //TODO: submit transaction to backend
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Nome</Label>
          <TextField onChange={setName} value={name}/>
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