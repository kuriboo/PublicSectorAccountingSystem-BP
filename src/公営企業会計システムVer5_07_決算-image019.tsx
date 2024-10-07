import React from 'react';

type SummaryFormProps = {
  year: string;
  targets: string[];
  selectedTarget: string;
  onYearChange: (year: string) => void;
  onTargetChange: (target: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onFinishClick: () => void;
};

const SummaryForm: React.FC<SummaryFormProps> = ({
  year,
  targets,
  selectedTarget,
  onYearChange,
  onTargetChange,
  onOkClick,
  onClearClick,
  onFinishClick,
}) => {
  return (
    <div className="p-8 bg-white shadow-md">
      <h1 className="text-2xl mb-4">決算貸借対照表集計処理</h1>
      
      <div className="mb-6">
        <label className="block font-semibold mb-2">集計年度</label>
        <select
          className="border p-2"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
        >
          {/* Add year options here */}
          <option value="平成29">平成29</option>
          <option value="平成30">平成30</option>
          {/* More options */}
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">処理概要</h2>
        <p className="mb-4">
          決算損益計算書・決算貸借対照表データを作成します。
        </p>
        
        <label className="block font-semibold mb-2">集計対象</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              value="全体"
              checked={selectedTarget === '全体'}
              onChange={(e) => onTargetChange(e.target.value)}
            />
            <span className="ml-2">全体</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              value="ブロック"
              checked={selectedTarget === 'ブロック'}
              onChange={(e) => onTargetChange(e.target.value)}
            />
            <span className="ml-2">ブロック</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              value="セグメント"
              checked={selectedTarget === 'セグメント'}
              onChange={(e) => onTargetChange(e.target.value)}
            />
            <span className="ml-2">セグメント</span>
          </label>
        </div>
        
        <select
          className="border p-2 mt-4"
          value={selectedTarget}
          onChange={(e) => onTargetChange(e.target.value)}
        >
          {targets.map((target) => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onOkClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClearClick} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onFinishClick} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
```