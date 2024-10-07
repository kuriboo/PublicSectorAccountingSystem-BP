import React from 'react';

// TypeScriptの型定義
interface FlowChartProps {
  title?: string; // オプションのタイトル
  description?: string; // オプションの説明
  bgColor?: string; // 背景色のクラスを指定
}

// FlowChartコンポーネントの定義
const FlowChart: React.FC<FlowChartProps> = ({
  title = '貯蔵品仕様',
  description = '仕様の作成',
  bgColor = 'bg-gray-500',
}) => {
  return (
    <div className={`p-4 ${bgColor} text-white`}>
      {/* タイトル表示部分 */}
      <div className="flex justify-center items-center">
        <div className="border border-white p-2 bg-orange-500 rounded-full">
          {title}
        </div>
      </div>
      
      {/* 各ボックスの定義 */}
      <div className="flex justify-between mt-4">
        <div className="border border-white p-2">仕様マスタ</div>
        
        <div className="border border-white p-2">貯蔵品仕様自動作成</div>
        
        <div className="border border-white p-2">
          修繕単価 <br /> マスタ
        </div>
      </div>
      
      {/* 矢印と説明部分 */}
      <div className="flex flex-col items-center mt-4">
        <div className="border-t border-white w-1/2 my-2" />
        <div className="p-2">{description}</div>
        <div className="border-t border-white w-1/2 my-2" />
        <div className="border border-white p-2">基本システムへの反映</div>
      </div>
    </div>
  );
};

export default FlowChart;
