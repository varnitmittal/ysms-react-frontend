import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

let CustomChart = () => {
  const custom_chart_color = {
    "blue" : "#3158C4",
    "green": "#1DC370",
    "red" : "#FC5C67"
  };
return (
  
  <div style={{ height: '275px', width: '100%' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
      legendComponent={
        <ChartLegend
          data={[
            { 
              name: 'Total',
              symbol: { fill: custom_chart_color.blue }
            },
            { 
              name: 'Collected',
              symbol: { fill: custom_chart_color.green }
            },
            {
              name: 'Expenses',
              symbol: { fill: custom_chart_color.red }
            }
          ]}
        />
      }
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar color={custom_chart_color.blue} cornerRadius={5} data={[{ name: 'Total', x: 'Jan', y: '100k' }, { name: 'Total', x: 'Feb', y: '200k' }, { name: 'Total', x: 'Mar', y: '200k' }, { name: 'Total', x: 'Apr', y: '300k' }]} />
        <ChartBar color={custom_chart_color.green} cornerRadius={5} data={[{ name: 'Collected', x: 'Jan', y: '200k' }, { name: 'Collected', x: 'Feb', y: '100k' }, { name: 'Collected', x: 'Mar', y: '300k' }, { name: 'Collected', x: 'Apr', y: '100k' }]} />
        <ChartBar color={custom_chart_color.red} cornerRadius={5} data={[{ name: 'Expenses', x: 'Jan', y: '300k' }, { name: 'Expenses', x: 'Feb', y: '300k' }, { name: 'Expenses', x: 'Mar', y: '100k' }, { name: 'Expenses', x: 'Apr', y: '200k' }]} />
      </ChartGroup>
    </Chart>
  </div>
)
    }

export default CustomChart