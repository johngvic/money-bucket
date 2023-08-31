import styled from 'styled-components';

interface InputFieldProps {
  value?: string;
  disabled?: boolean;
  isOptional?: boolean;
  onChange?(value: string): void;
  type?: 'text' | 'number';
}

export const InputField = ({ ...props }: InputFieldProps) => {
  return (
    <Input
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(event.target.value);
      }}
      disabled={props.disabled}
      type={props.type}
      value={props.value}
    />
  );
};

const Input = styled.input`
  outline: none;
  width: 15rem;
  height: 1.25rem;
  padding: .25rem .6rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: .25rem;
`;
