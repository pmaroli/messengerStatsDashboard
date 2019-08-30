import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const ReaxPieChart = (props) => {

  const { data } = props;

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      innerRadius={0.8}
      padAngle={0.7}
      cornerRadius={3}
      colors={d => d.color}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      enableRadialLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#ffffff"
      radialLabelsTextColor="#ffffff"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );

}

export default ReaxPieChart;
