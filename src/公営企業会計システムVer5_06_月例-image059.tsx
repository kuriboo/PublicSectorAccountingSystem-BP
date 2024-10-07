import React from 'react';

// Prop types definition
type FormProps = {
  date: string;
  startNumber: string;
  endNumber: string;
  category: '日' | '節' | '細節' | '明細';
  aggregationTarget: '全体' | 'ブロック' | 'セグメント';
  onDateChange: (date: string) => void;
  onStartNumberChange: (number: string) => void;
  onEndNumberChange: (number: string) => void;
  onCategoryChange: (category: string) => void;
  onAggregationTargetChange: (target: string) => void;
};

const Form: React.FC<FormProps> = ({
  date,
  startNumber,
  endNumber,
  category,
  aggregationTarget,
  onDateChange,
  onStartNumberChange,
  onEndNumberChange,
  onCategoryChange,
  onAggregationTargetChange,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-2 text-blue-600">予算額内訳表作成</h1>
      <div className="border p-4 rounded">
        <div className="mb-4">
          <label className="block text-gray-700">作表日</label>
          <input
            type="text"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="border mt-1 p-2 rounded w-full"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="block text-gray-700">予算科目</label>
          <input
            type="text"
            value={startNumber}
            onChange={(e) => onStartNumberChange(e.target.value)}
            className="border mt-1 p-2 rounded w-1/2"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endNumber}
            onChange={(e) => onEndNumberChange(e.target.value)}
            className="border mt-1 p-2 rounded w-1/2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">作表区分</label>
          <div className="flex items-center">
            {['日', '節', '細節', '明細'].map((item, index) => (
              <label key={index} className="mr-4">
                <input
                  type="radio"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={() => onCategoryChange(item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">集計対象</label>
          <div className="flex items-center">
            {['全体', 'ブロック', 'セグメント'].map((item, index) => (
              <label key={index} className="mr-4">
                <input
                  type="radio"
                  name="aggregationTarget"
                  value={item}
                  checked={aggregationTarget === item}
                  onChange={() => onAggregationTargetChange(item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <button className="bg-gray-300 p-2 rounded">OK</button>
        <button className="bg-gray-300 p-2 rounded">クリア</button>
        <button className="bg-gray-300 p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default Form;