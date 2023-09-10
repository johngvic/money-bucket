import styled from 'styled-components';
import { TextField, Button, ComboBox, DatePicker, CurrencyField } from '../../../../components';
import { useState } from 'react';

export const Transaction = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState<string | undefined>('');
  const [financeInstitution, setFinanceInstitution] = useState<string>('');
  const transactionTypeOptions = [
    {
      value: 'input',
      label: 'Entrada'
    },
    {
      value: 'output',
      label: 'Saída'
    },
  ]

  const categoryOptions = [{ value: 'xpto', label: 'XPTO' }];
  const financeInstitutionsOptions = [{ value: 'inter', label: 'Banco Inter' }];

  const handleSubmit = () => {
    //TODO: submit transaction to backend
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Titulo</Label>
          <TextField onChange={setTitle}/>
        </InputContainer>

        <InputContainer>
          <Label>Tipo</Label>
          <ComboBox options={transactionTypeOptions} onChange={setType} />
        </InputContainer>

        <InputContainer>
          <Label>Categoria</Label>
          <ComboBox options={categoryOptions} onChange={setCategory} />
        </InputContainer>
      </FieldsContainer>

      <FieldsContainer>
        <InputContainer>
          <Label>Data</Label>
          <DatePicker onChange={setDate}/>
        </InputContainer>

        <InputContainer>
          <Label>Valor</Label>
          <CurrencyField onChange={setValue}/>
        </InputContainer>

        <InputContainer>
          <Label>Instituição</Label>
          <ComboBox options={financeInstitutionsOptions} onChange={setFinanceInstitution} />
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