import styled from 'styled-components';

interface TextFieldProps {
  value?: string;
  disabled?: boolean;
  isOptional?: boolean;
  onChange(value: string): void;
}

export const TextField = ({ value, disabled, onChange }: TextFieldProps) => {
  return (
    <Text
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      }}
      disabled={disabled}
      type='text'
      value={value}
    />
  );
};

const Text = styled.input`
  outline: none;
  width: 15rem;
  height: 1.25rem;
  padding: .25rem .6rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: .25rem;
  font-family: 'Gilroy-Medium';
`;
