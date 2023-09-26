import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

type CurrencyFieldProps = {
  onChange(value?: string, name?: string): void;
  value: string;
}

export const CurrencyField = ({ onChange, value }: CurrencyFieldProps) => {
  const brazilianPrefix = 'R$';

  return (
    <Currency
      defaultValue={0}
      decimalsLimit={2}
      groupSeparator='.'
      decimalSeparator=','
      onValueChange={onChange}
      prefix={brazilianPrefix}
      allowDecimals
      value={value}
    />
  )
}

const Currency = styled(CurrencyInput)`
  outline: none;
  width: 15rem;
  height: 1.25rem;
  padding: .25rem .6rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: .25rem;
  font-family: 'Gilroy-Medium';
`