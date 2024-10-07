// components/PredictiveTimeline.tsx

import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript interface for component props
interface PredictiveTimelineProps {
  currentLabel?: string; // Label for the current date marker
  specifiedLabel?: string; // Label for the specified date marker
  rangeLabel?: string; // Label for the predictive range
}

const PredictiveTimeline: React.FC<PredictiveTimelineProps> = ({
  currentLabel = '現在（システム日付）',
  specifiedLabel = '画面指定の日付',
  rangeLabel = '予測範囲',
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Upper arc with range label */}
      <div className="relative flex justify-center items-center mt-4">
        <div className="absolute bottom-0 h-2 bg-gray-300 w-full"></div>
        <div className="absolute h-10 w-1/2 border-t-2 border-gray-500 rounded-full"
          style={{ borderTopLeftRadius: 100, borderTopRightRadius: 100 }}>
        </div>
        <div className="absolute bg-white px-2 -mt-3">
          <span className="text-sm">{rangeLabel}</span>
        </div>
      </div>

      {/* Timeline line with date labels */}
      <div className="relative flex justify-between items-center w-full mt-10">
        <div className="flex flex-col items-center">
          <span className="text-sm">{currentLabel}</span>
          <div className="h-4 bg-gray-500 w-0.5"></div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm">{specifiedLabel}</span>
          <div className="h-4 bg-gray-500 w-0.5"></div>
        </div>
      </div>

      {/* Arrows with description */}
      <div className="flex justify-between items-center w-full mt-6 text-xs">
        <div className="flex flex-col items-center">
          <span>‘在庫割れ予測日’に現在(システム日付)を印字</span>
          <div className="flex items-center">
            <div className="w-1/2 h-0.5 bg-black"></div>
            <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-black"></div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span>‘在庫割れ予測日’に在庫割れ日を印字</span>
          <div className="flex items-center">
            <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-black"></div>
            <div className="w-1/2 h-0.5 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveTimeline;
