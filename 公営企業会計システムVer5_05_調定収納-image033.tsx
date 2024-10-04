import React from 'react';

interface RangeSelectorProps {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onStartCodeChange: (value: string) => void;
  onEndCodeChange: (value: string) => void;
  onClear: () => void;
  onSubmit: () => void;
  onExit: () => void;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onStartDateChange,
  onEndDateChange,
  onStartCodeChange,
  onEndCodeChange,
  onClear,
  onSubmit,
  onExit,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md max-w-lg mx-auto">
      <h3 className="text-purple-800 mb-4">範囲指定</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">振替日</label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="input-text"
            placeholder="開始日"
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="input-text"
            placeholder="終了日"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">予算科目</label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={startCode}
            onChange={(e) => onStartCodeChange(e.target.value)}
            className="input-text"
            placeholder="開始科目"
          />
          <span>~</span>
          <input
            type="text"
            value={endCode}
            onChange={(e) => onEndCodeChange(e.target.value)}
            className="input-text"
            placeholder="終了科目"
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button onClick={onSubmit} className="btn-primary">OK</button>
        <button onClick={onClear} className="btn-secondary">クリア</button>
        <button onClick={onExit} className="btn-secondary">終了</button>
      </div>
    </div>
  );
};

export default RangeSelector;