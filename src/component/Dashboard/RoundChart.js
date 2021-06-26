import React from 'react';
import { ChartDonut, ChartLegend } from '@patternfly/react-charts';

let RoundChart = (props) => {
  const custom_chart_color = {
    "blue" : "#3158C4",
    "green": "#1DC370",
    "red" : "#FC5C67"
  };
  return (
  <div style={{ height: '275px', width: '100%' }}>
    <ChartDonut
    legendComponent={
      <ChartLegend
        data={[
          { 
            name: 'Present',
            symbol: { fill: custom_chart_color.green }
          },
          { 
            name: 'Absent',
            symbol: { fill: custom_chart_color.red }
          }
        ]}
      />
    }
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      innerRadius={70}
      data={[{ x: 'Present', y: props.present, z: 'a' }, { x: 'Absent', y: props.absent, z: 'b' }]}
      donutOrientation="top"
      height={275}
      sortKey={["z"]}
      sortOrder={"descending"}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      colorScale={[custom_chart_color.red, custom_chart_color.green ]}
      legendData={[{ name: props.present }, { name: props.absent }]}
      legendPosition="bottom"
      legendWidth={225}
      padding={{
        bottom: 65, // Adjusted to accommodate legend
        left: 20,
        right: 20,
        top: 20
      }}
      width={300}
    />
  </div>
)
    }
export default RoundChart