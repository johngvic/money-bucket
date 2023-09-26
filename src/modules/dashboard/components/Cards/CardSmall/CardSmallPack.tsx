import styled from "styled-components";
import { CardProps } from '../CardProps';
import { PropsWithChildren } from 'react';

export const CardSmallPack = ({ ...props }: CardProps & PropsWithChildren) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  width: 34rem;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 1rem;
`