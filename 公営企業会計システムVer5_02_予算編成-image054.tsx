```tsx
import React from 'react';

// プロパティの型定義
type ConfirmationFormProps = {
  year: number;
  budgetType: string;
  counter: number;
  confirmationDate: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  year,
  budgetType,
  counter,
  confirmationDate,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="bg-purple-200 p-2 mb-4 rounded">
        <h1 className="text-lg font-bold text-purple-600">予算確定入力</h1>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold mb-2">確定情報</h2>
        <p>現在 当初予算まで確定されています。</p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">今回確定情報</h2>
        <div className="mb-2">
          <label className="mr-2">年度</label>
          <span>{year} 年度</span>
        </div>
        <div className="mb-2">
          <label className="mr-2">予算編成区分</label>
          <select value={budgetType} className="border rounded">
            <option value="補正予算">補正予算</option>
            <option value="別予算">別予算</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="mr-2">回数</label>
          <span>{counter} 回</span>
        </div>
        <div className="mb-2">
          <label className="mr-2">確定日</label>
          <span>{confirmationDate}</span>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">処理概要</h2>
        <p>最終査定額を予算額として確定します。</p>
        <p>確定する予算と確定日を指定してください。</p>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ConfirmationForm;
```