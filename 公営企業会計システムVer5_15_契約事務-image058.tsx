```tsx
import React from 'react';

// Propsの型定義
interface BidResultFormProps {
  yearOptions: string[];
  sectionOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BidResultForm: React.FC<BidResultFormProps> = ({
  yearOptions,
  sectionOptions,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 shadow-lg bg-white rounded">
      <h2 className="text-xl font-bold">入札結果表 (公開用)</h2>
      <div className="my-4">
        <label className="block mb-2">年度</label>
        <select className="border rounded p-2 mr-4">
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label className="block mb-2">受付区分</label>
        <select className="border rounded p-2">
          {sectionOptions.map((section, index) => (
            <option key={index} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>
      <div className="flex my-4">
        <div className="mr-8">
          <span className="block mb-2">予定価格の印字有無</span>
          <label className="mr-4">
            <input type="radio" name="pricePrint" className="mr-1" />
            有
          </label>
          <label>
            <input type="radio" name="pricePrint" className="mr-1" />
            無
          </label>
        </div>
        <div>
          <span className="block mb-2">落札率の印字有無</span>
          <label className="mr-4">
            <input type="radio" name="ratePrint" className="mr-1" />
            有
          </label>
          <label>
            <input type="radio" name="ratePrint" className="mr-1" />
            無
          </label>
        </div>
      </div>
      <div className="my-4">
        <span className="block mb-2">物件</span>
        <input
          type="text"
          className="border rounded w-full p-2"
          defaultValue="42910007：工事の受け付登録"
        />
      </div>
      <div className="my-4">
        <label>
          <input type="checkbox" className="mr-2" />
          全選択
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BidResultForm;
```