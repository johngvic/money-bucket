import styled from 'styled-components';

interface TextFieldProps {
  value?: string;
  disabled?: boolean;
  isOptional?: boolean;
  onChange(value: string): void;
  error?: string;
}

export const TextField = ({ value, disabled, onChange, error }: TextFieldProps) => {
  return (
    <>
      <Text
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(event.target.value);
        }}
        disabled={disabled}
        type='text'
        value={value}
      />
      {
        error &&
        <ErrorMessage>{ error }</ErrorMessage>
      }
    </>
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  margin-top: .3rem;
`