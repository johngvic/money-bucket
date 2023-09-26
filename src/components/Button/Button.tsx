import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ title, onClick, size = 'small' }: ButtonProps) => {
  return <Container size={size} onClick={onClick}>{title}</Container>;
};

const Container = styled.button<{ size: 'small' | 'medium' | 'large' }>`
  width: 8rem;
  width: ${ props => props.size === 'small' ? '6.5rem' : props.size === 'medium' ? '10rem' : '12rem' };
  height: 2rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 100ms ease-out;
  background-color: whitesmoke;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
