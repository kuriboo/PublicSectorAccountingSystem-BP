import React from 'react';

// プロパティの型定義
type TransferFormProps = {
  date: string;
  format: 'text' | 'csv' | 'data';
  category: 'new' | 'recreate';
  department: string;
  excludeData: boolean;
  onSubmit: () => void;
  onClear: () => void;
};

const TransferForm: React.FC<TransferFormProps> = ({
  date,
  format,
  category,
  department,
  excludeData,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">口座振込フロッピー作成</h1>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">振込日</label>
        <input
          type="text"
          value={date}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">作成区分</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              checked={category === 'new'}
              readOnly
              className="mr-2"
            />
            新規
          </label>
          <label>
            <input
              type="radio"
              checked={category === 'recreate'}
              readOnly
              className="mr-2"
            />
            再作成
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">形式</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              checked={format === 'text'}
              readOnly
              className="mr-2"
            />
            テキスト形式
          </label>
          <label className="mr-4">
            <input
              type="radio"
              checked={format === 'csv'}
              readOnly
              className="mr-2"
            />
            CSV形式
          </label>
          <label>
            <input
              type="radio"
              checked={format === 'data'}
              readOnly
              className="mr-2"
            />
            データレコードのみ
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">部署</label>
        <select
          value={department}
          className="w-full p-2 border rounded"
          readOnly
        >
          <option value="01">下水道課</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={excludeData}
            readOnly
            className="mr-2"
          />
          公共料金支払データ登録の取込データは作成対象としない
        </label>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClear}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TransferForm;
```