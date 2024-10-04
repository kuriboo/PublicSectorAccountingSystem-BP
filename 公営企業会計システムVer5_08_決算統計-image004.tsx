import React from 'react';

// 定義するプロパティの型
interface FlowChartBoxProps {
  label: string;
}

interface FlowChartProps {
  boxes: FlowChartBoxProps[];
}

// ボックスコンポーネント
const FlowChartBox: React.FC<FlowChartBoxProps> = ({ label }) => {
  return (
    <div className="w-64 h-20 flex items-center justify-center border border-black bg-white mx-auto my-4">
      {label}
    </div>
  );
};

// フローチャートコンポーネント
const FlowChart: React.FC<FlowChartProps> = ({ boxes }) => {
  return (
    <div className="flex flex-col items-center">
      {boxes.map((box, index) => (
        <React.Fragment key={index}>
          <FlowChartBox label={box.label} />
          {index < boxes.length - 1 && (
            <div className="w-px h-8 bg-black mx-auto" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlowChart;

// 使用例
// <FlowChart
//   boxes={[
//     { label: '1000円丸め調整入力\n（仕訳）' },
//     { label: '1000円丸め調整入力\n（予算）' },
//     { label: '1000円丸め自動処理' },
//   ]}
// />