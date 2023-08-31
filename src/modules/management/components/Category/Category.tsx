import styled from "styled-components";
import { InputField, Button } from "../../../../components";
import { useState } from "react";

type CategoryProps = {}

export const Category = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
    //TODO: submit category to backend
  }

  return (
    <Container>
      <FieldsContainer>
        <InputContainer>
          <Label>Nome</Label>
          <InputField onChange={setCategoryName}/>
        </InputContainer>
      </FieldsContainer>

      <Button title="Enviar" onClick={handleSubmit} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  flex-wrap: wrap;
  justify-content: safe;
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
