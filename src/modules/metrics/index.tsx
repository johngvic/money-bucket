import styled from 'styled-components';
import { ComboBox, Menu } from '../../components';
import { useEffect, useState } from 'react';
import { OverralInputOutput, OutputByCategory } from './components';
import { useServices } from '../../services/provider';
import { Report } from '../../services/MoneyBucketBffClient';

export const Metrics = () => {
  const { moneyBucketService } = useServices();
  const [selectedChart, setSelectedChart] = useState('');
  const [report, setReport] = useState<Report[]>();
  const chartOptions = [
    { value: 'overralInputOutput', label: 'Receita x Despesa' },
    { value: 'outputByCategory', label: 'Gasto por categoria' }
  ];

  useEffect(() => {
    const getReport = async () => {
      const report = await moneyBucketService.fetchReport();
      setReport(report);
    };
  
    getReport();
  
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectChartToDisplay = () => {
    switch(selectedChart) {
      case 'overralInputOutput':
        return <OverralInputOutput data={report}/>;
      case 'outputByCategory':
        return <OutputByCategory data={report}/>
    }
  }

  const renderChart = () => {
    if (selectedChart) {
      return (
        <ChartAreaContainer>
          { selectChartToDisplay() }
        </ChartAreaContainer>
      )
    }
    return <></>;
  }

  return (
    <>
      <Menu />
      <MetricsContentContainer>
        <TitleContainer>
          <Title>Métricas</Title>
        </TitleContainer>

        <MetricSelectorContainer>
          <Label>Selecione um gráfico</Label>
          <MetricsOptionsContainter>
            <ComboBox
              placeholder='Selecione um tipo de gráfico'
              options={chartOptions}
              onChange={(metric) => setSelectedChart(metric)}
            />
          </MetricsOptionsContainter>
        </MetricSelectorContainer>

        { renderChart() }

      </MetricsContentContainer>
    </>
  )
}

const MetricsContentContainer = styled.div`
  position: absolute;
  margin-left: 21rem;
  width: 76%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: inline-block;
  text-align: left;
  padding-bottom: .5rem;
  margin-left: 2rem;
`

const Title = styled.h1`
  margin: .5rem 0 .2rem 0;
`

const MetricSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

const MetricsOptionsContainter = styled.div`
  display: flex;
  flex-direction: row;

  select:nth-child(2) {
    margin-left: 1rem;
  }
`

const Label = styled.h3`
  text-align: left;
  margin-bottom: .5rem;
`

const ChartAreaContainer = styled.div`
  padding-right: 5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-left: 2rem;
  width: 50rem;
  height: 28rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  //Border and shadow
  border: 0 solid #e5e7eb;
  border-width: 1px;
  border-radius: 1.25rem;
  background: var(--main-white, #FFF);
  box-shadow: 8px 13px 44px -6px #DFDBF6;
`

// await new Promise((resolve) => setTimeout(resolve, 2000))