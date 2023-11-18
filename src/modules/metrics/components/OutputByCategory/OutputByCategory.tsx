import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { Report } from '../../../../services/MoneyBucketBffClient';
import randomColor from 'randomcolor';

type OutputByCategoryProps = {
  data?: Report[];
  month?: number;
}

export const OutputByCategory = ({ month = new Date().getMonth() + 1, data }: OutputByCategoryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [parsed, setParsed] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const monthReport = data?.find((rp) => rp.month === month.toString());
    const parsed = monthReport?.totalByCategory.map(({ name, output }) => ({ name, value: output })) ?? [];
    setParsed(parsed);
    const generatedColors = randomColor({
      count: parsed.length,
      luminosity: 'dark',
      format: 'rgba',
      alpha: 1,
    });
    setColors(generatedColors);
  }, [month])

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  };

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 10}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`R$ ${Number(value).toFixed(2)}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={parsed}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={150}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          { parsed.map((_, index) => <Cell key={index} fill={colors[index]}/>) }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}