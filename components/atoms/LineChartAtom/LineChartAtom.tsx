import React, { useMemo } from 'react';
import { LineChart } from 'react-native-chart-kit';

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
  width: number;
  height: number;
}

const LineChartAtom: React.FC<LineChartProps> = ({ data, width, height }) => {
  const memoizedChartConfig = useMemo(
    () => ({
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 8,
      },
    }),
    []
  );

  return (
    <LineChart
      data={data}
      width={width}
      height={height}
      chartConfig={memoizedChartConfig}
      bezier
    />
  );
};

export default LineChartAtom;
