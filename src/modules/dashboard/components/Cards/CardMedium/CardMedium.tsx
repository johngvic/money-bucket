import styled from "styled-components";
import { CardProps } from '../CardProps';
import { PropsWithChildren } from 'react';

export const CardMedium = ({ ...props }: CardProps & PropsWithChildren) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  width: 34rem;
  height: 15rem;
  border-radius: 1.25rem;
  background: var(--main-white, #FFF);
  box-shadow: 8px 13px 44px -6px #DFDBF6;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`