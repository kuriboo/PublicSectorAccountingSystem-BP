import React from 'react';

type OutputLevel = 'summary' | 'detail' | 'item';

type RangeProps = {
  startYearMonth: string;
  endYearMonth: string;
  subjectStart: string;
  subjectEnd: string;
  departmentStart: string;
  departmentEnd: string;
  outputLevel: OutputLevel;
  aggregationTarget: string;
  onGenerate: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetComponent: React.FC<RangeProps> = ({
  startYearMonth,
  endYearMonth,
  subjectStart,
  subjectEnd,
  departmentStart,
  departmentEnd,
  outputLevel,
  aggregationTarget,
  onGenerate,
  onClear,
  onExit,
}) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md space-y-4">
      {/* Output Level */}
      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="output-level" checked={outputLevel === 'summary'} />
          <span>所属節</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="output-level" checked={outputLevel === 'detail'} />
          <span>所属細節</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="output-level" checked={outputLevel === 'item'} />
          <span>所属明細</span>
        </label>
      </div>

      {/* Date Range and Inputs */}
      <div className="bg-white p-4 rounded-md shadow-inner space-y-4">
        <div className="flex space-x-4 items-center">
          <span>作表年月</span>
          <input type="text" value={startYearMonth} readOnly className="p-2 border" />
          <span>〜</span>
          <input type="text" value={endYearMonth} readOnly className="p-2 border" />
        </div>
        
        <div className="space-y-2">
          <div className="flex space-x-4 items-center">
            <span>予算科目</span>
            <input type="text" value={subjectStart} readOnly className="p-2 border" />
            <span>〜</span>
            <input type="text" value={subjectEnd} readOnly className="p-2 border" />
          </div>
          
          <div className="flex space-x-4 items-center">
            <span>所 属</span>
            <input type="text" value={departmentStart} readOnly className="p-2 border" />
            <span>〜</span>
            <input type="text" value={departmentEnd} readOnly className="p-2 border" />
          </div>
        </div>
      </div>

      {/* Aggregation Target */}
      <div className="flex space-x-4">
        {['全体', 'ブロック', 'セグメント'].map((target) => (
          <label key={target} className="flex items-center space-x-2">
            <input type="radio" checked={aggregationTarget === target} />
            <span>{target}</span>
          </label>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onGenerate} className="px-4 py-2 bg-blue-500 text-white rounded">集計</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
