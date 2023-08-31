import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{title}</Container>;
};

const Container = styled.button`
  width: 6.5rem;
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
