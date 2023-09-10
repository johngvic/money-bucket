import styled from 'styled-components';

export type ComboBoxOption = {
  value: string;
  label: string;
};

type ComboBoxProps = {
  onChange(value: string): void;
  options: ComboBoxOption[];
};

export const ComboBox = ({ onChange, options }: ComboBoxProps) => {
  return (
    <Combo
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
      }}
    >
      <option value=''>Selecione uma opção</option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Combo>
  );
};

const Combo = styled.select`
  outline: none;
  width: 16.5rem;
  height: 1.9rem;
  padding: 0.25rem 0.3rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: 0.25rem;
  font-family: 'Gilroy-Medium';
`;
