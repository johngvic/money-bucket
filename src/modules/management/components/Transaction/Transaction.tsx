import styled from 'styled-components';
import { InputField, Button, ComboBox } from "../../../../components";
import { useState } from 'react';

type TransactionProps = {}

export const Transaction = () => {
  const [categoryName, setCategoryName] = useState('');
  const options = [
    {
      value: 'input',
      label: 'Entrada'
    },
    {
      value: 'output',
      label: 'Saída'
    },
  ]

  const handleSubmit = () => {
    //TODO: submit transaction to backend
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Nome</Label>
          <InputField onChange={setCategoryName}/>
        </InputContainer>

        <InputContainer>
          <Label>Tipo</Label>
          <ComboBox options={options} />
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
  flex-direction: column;
  width: 60rem;
  flex-wrap: wrap;
  justify-content: safe;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  /* :nth-child(n + 2) {
    margin-left: 1rem;
  } */
`;

const Label = styled.span`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;