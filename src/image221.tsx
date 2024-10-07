import React from 'react';

// プロパティの型定義
interface PrintOptionsProps {
  documents: Array<{ name: string; checked: boolean }>;
  reprint: boolean;
  specifiedDate: boolean;
  calcDate: string;
  onDocumentChange: (index: number) => void;
  onReprintChange: () => void;
  onSpecifiedDateChange: () => void;
  onCalcDateChange: (date: string) => void;
}

// 再利用可能なコンポーネント
const PrintOptions: React.FC<PrintOptionsProps> = ({
  documents,
  reprint,
  specifiedDate,
  calcDate,
  onDocumentChange,
  onReprintChange,
  onSpecifiedDateChange,
  onCalcDateChange
}) => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>
      <div className="mb-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={doc.checked}
              onChange={() => onDocumentChange(index)}
              className="mr-2"
            />
            <span>{doc.name}</span>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">再発行日印字</h3>
        <label className="mr-4">
          <input
            type="radio"
            checked={reprint}
            onChange={onReprintChange}
            className="mr-1"
          />
          有
        </label>
        <label>
          <input
            type="radio"
            checked={!reprint}
            onChange={onReprintChange}
            className="mr-1"
          />
          無
        </label>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">指定日印字</h3>
        <label className="mr-4">
          <input
            type="radio"
            checked={specifiedDate}
            onChange={onSpecifiedDateChange}
            className="mr-1"
          />
          有
        </label>
        <label>
          <input
            type="radio"
            checked={!specifiedDate}
            onChange={onSpecifiedDateChange}
            className="mr-1"
          />
          無
        </label>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">精算日印字</h3>
        <label className="mr-4">
          <input
            type="radio"
            checked={calcDate === '全精算日'}
            onChange={() => onCalcDateChange('全精算日')}
            className="mr-1"
          />
          全精算日
        </label>
        <label className="mr-4 flex items-center">
          <input
            type="radio"
            checked={calcDate !== '全精算日'}
            onChange={() => onCalcDateChange('')}
            className="mr-1"
          />
          指定日
          <select
            value={calcDate}
            onChange={(e) => onCalcDateChange(e.target.value)}
            className="ml-2 p-1 border rounded"
          >
            <option value="令和03年11月12日">令和03年11月12日</option>
            {/* 他の日付を追加可能 */}
          </select>
        </label>
      </div>

      <div className="flex justify-around">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default PrintOptions;
