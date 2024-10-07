import React from 'react';

// TypeScriptの型定義
type FormComponentProps = {
  startDate: string;
  endDate: string;
  onDateChange: (startDate: string, endDate: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
};

// コンポーネントの作成
const FormComponent: React.FC<FormComponentProps> = ({
  startDate,
  endDate,
  onDateChange,
  category,
  onCategoryChange,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-gray-700">振替日:</label>
        <div className="flex items-center">
          <input
            type="date"
            value={startDate}
            onChange={(e) => onDateChange(e.target.value, endDate)}
            className="mr-2 border border-gray-300 rounded-md p-1"
          />
          <span className="mx-2">~</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onDateChange(startDate, e.target.value)}
            className="border border-gray-300 rounded-md p-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">区分:</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="全て"
              checked={category === '全て'}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="mr-2"
            />
            <span>全て</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="振替済"
              checked={category === '振替済'}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="mr-2"
            />
            <span>振替済</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="一部振替"
              checked={category === '一部振替'}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="mr-2"
            />
            <span>一部振替</span>
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```