import styled from 'styled-components';
import {
  TextField,
  Button,
  ComboBox,
  DatePicker,
  CurrencyField,
  ComboBoxOption
} from '../../../../components';
import { useState, useEffect } from 'react';
import { useServices } from '../../../../services/provider';
import { TransactionInfo } from '../../../../services/MoneyBucketBffClient';

export const Transaction = () => {
  const { moneyBucketService } = useServices();
  const emptyTransaction = {
    title: '',
    category: '',
    date: new Date(),
    financeInstitution: '',
    type: '',
    value: 0
  };
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfo>(emptyTransaction);
  const [financeInstitutionOptions, setFinanceInstitutionOptions] = useState<ComboBoxOption[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<ComboBoxOption[]>([]);
  const transactionTypeOptions = [
    {
      value: 'input',
      label: 'Receita'
    },
    {
      value: 'output',
      label: 'Despesa'
    },
  ]

  useEffect(() => {
    const getFinanceInstitutions = async () => {
      const financeInstitutions = await moneyBucketService.fetchFinanceInstitutions();
      const parsedFinanceInstitutions = financeInstitutions.map((value) => ({ label: value.name, value: value.id }));
      setFinanceInstitutionOptions(parsedFinanceInstitutions);
    };

    const getCategories = async () => {
      const categories = await moneyBucketService.fetchCategories();
      const parsedCategories = categories.map((value) => ({ label: value.name, value: value.id }));
      setCategoryOptions(parsedCategories);
    };
  
    getCategories();
    getFinanceInstitutions();
  
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    cleanup();
    if (allFieldsValid()) {
      const valueConverted = Number(transactionInfo.value?.toString().replace(',', '.'))
      // transactionInfo?.date.setHours(3);
      console.log(transactionInfo)

      await moneyBucketService.addTransaction({ ...transactionInfo, value: valueConverted });
      setTransactionInfo(emptyTransaction);
    }
  }

  const [titleError, setTitleError] = useState<string | undefined>();
  const allFieldsValid = () => {
    if (transactionInfo.title === '') {
      setTitleError('Título não pode ser vazio');
    }
    return true;
  }

  const cleanup = () => {
    setTitleError(undefined);
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Titulo</Label>
          <TextField
            onChange={(title) => setTransactionInfo((old) => ({ ...old, title }))}
            value={transactionInfo.title}
            error={titleError}
          />
        </InputContainer>

        <InputContainer>
          <Label>Tipo</Label>
          <ComboBox
            options={transactionTypeOptions}
            onChange={(type) => setTransactionInfo((old) => ({ ...old, type }))}
            value={transactionInfo.type}
          />
        </InputContainer>

        <InputContainer>
          <Label>Categoria</Label>
          <ComboBox
            options={categoryOptions}
            onChange={(category) => setTransactionInfo((old) => ({ ...old, category }))}
            value={transactionInfo.category}
          />
        </InputContainer>

        <InputContainer>
          <Label>Data</Label>
          <DatePicker
            onChange={(date) => setTransactionInfo((old) => ({ ...old, date: new Date(date) }))}
          />
        </InputContainer>

        <InputContainer>
          <Label>Valor</Label>
          <CurrencyField
            onChange={(value) => setTransactionInfo((old) => ({ ...old, value }))}
            value={transactionInfo.value?.toString()!}
          />
        </InputContainer>

        <InputContainer>
          <Label>Instituição Financeira</Label>
          <ComboBox
            options={financeInstitutionOptions}
            onChange={(financeInstitution) => setTransactionInfo((old) => ({ ...old, financeInstitution }))}
            value={transactionInfo.financeInstitution}
          />
        </InputContainer>
      </FieldsContainer>
      <ButtonContainer>
        <Button size="medium" title="Enviar" onClick={handleSubmit} />
      </ButtonContainer>
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
  width: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  /* :nth-child(n + 2) {
    margin-left: 1rem;
  } */
`;

const ButtonContainer = styled.div`

`

const Label = styled.span`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;