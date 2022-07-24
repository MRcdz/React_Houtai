import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function Barchart({chartInfo}) {
  // 一定要全局定义mychart
  var myChart
  const chartRef = useRef()
  useEffect(() => {
    // 解决 echarts 提示重复渲染警告
    if (myChart !== null && myChart !== "" && myChart !== undefined) {
      myChart.dispose();
    }
    const chartInit = () => {
      // var myChart
      myChart = echarts.init(chartRef.current);
      var option = {
        title: {
          text: chartInfo.title
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
      myChart.setOption(option);
    }
    chartInit()
  }, [chartInfo])


  return (
    <div ref={chartRef} style={{ width: chartInfo.width, height: chartInfo.height }}></div>
  );
}