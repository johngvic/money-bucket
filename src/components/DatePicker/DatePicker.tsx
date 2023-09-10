import styled from 'styled-components';
import { DateTime } from 'luxon';

type DatePickerProps = {
  onChange(value: string): void;
}

export const DatePicker = ({ onChange }: DatePickerProps) => {
  const minDate = '2023-01-01';
  const maxDate = DateTime.now().setLocale('pt-BR').toISO()?.split('T')[0];

  return (
    <Date
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      }}
      type='date'
      min={minDate}
      max={maxDate}
    />
  )
}

const Date = styled.input`
  outline: none;
  width: 15rem;
  height: 1.25rem;
  padding: .25rem .6rem;
  border-color: #7a7979;
  border-width: 1px;
  border-radius: .25rem;
  font-family: 'Gilroy-Medium';
`;