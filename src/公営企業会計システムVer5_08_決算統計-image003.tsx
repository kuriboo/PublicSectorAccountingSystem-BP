// Import necessary modules
import React from 'react';

// TypeScript types for props
type FlowChartBoxProps = {
  text: string;
  className?: string;
};

type FlowChartArrowProps = {
  className?: string;
};

// Reusable component for a flowchart box
const FlowChartBox: React.FC<FlowChartBoxProps> = ({ text, className = "" }) => {
  return (
    <div className={`border rounded bg-white p-4 ${className}`}>
      {text}
    </div>
  );
};

// Reusable component for a flowchart arrow
const FlowChartArrow: React.FC<FlowChartArrowProps> = ({ className = "" }) => {
  return (
    <div className={`w-px bg-black h-6 mx-auto ${className}`}></div>
  );
};

// Main component that uses FlowChartBox and FlowChartArrow
const FlowChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-400 p-4 space-y-4">
      <FlowChartBox 
        text="決算統計\n費用構成表集計処理" 
        className="w-64"
      />
      <FlowChartArrow />
      <FlowChartBox 
        text="決算統計\n費用構成表" 
        className="w-64"
      />
      <FlowChartArrow />
      <FlowChartBox 
        text="資本的収支に関する調べ" 
        className="w-64"
      />
    </div>
  );
};

export default FlowChart;
