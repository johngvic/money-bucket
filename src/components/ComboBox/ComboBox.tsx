import styled from "styled-components";

type Option = {
  value: string;
  label: string;
};

type ComboBoxProps = {
  options: Option[];
};

export const ComboBox = ({ options }: ComboBoxProps) => {
  return (
    <Combo>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Combo>
  );
};

const Combo = styled.select`
  outline: none;
  width: 16.5rem;
  height: 2rem;
  padding: 0.25rem 0.3rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: 0.25rem;
`;
