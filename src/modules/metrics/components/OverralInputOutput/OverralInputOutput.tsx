import { Report } from '../../../../services/MoneyBucketBffClient';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

type OverralInputOutputProps = {
  data?: Report[];
}

export const OverralInputOutput = ({ data }: OverralInputOutputProps) => {
  const getMonth = function(param: number) {
    const objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(param - 1);
    const month = objDate.toLocaleString("pt-br", { month: "long" }).substring(0, 3);
    return month;
  }

  const parsed = data?.map((rp) => ({
    input: rp.input.toFixed(2),
    output: rp.output.toFixed(2),
    month: getMonth(Number(rp.month))
  })) ?? [];

  return (
    <ResponsiveContainer>
      <LineChart
        data={parsed}
        width={300}
        margin={{ top: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="output" name='Despesa' stroke="hsl(346.8 77.2% 49.8%)" activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="input" name='Receita' stroke="hsl(142.1 76.2% 36.3%)" activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}