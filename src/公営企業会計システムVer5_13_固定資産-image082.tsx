import React from 'react';

// プロパティの型定義
interface FacilityFormProps {
  title: string;
  date: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const FacilityForm: React.FC<FacilityFormProps> = ({ title, date, onSubmit, onClear, onCancel }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* タイトル */}
      <h1 className="text-lg font-bold text-blue-800">{title}</h1>
      {/* 作成年月日 */}
      <div className="my-4">
        <label className="block text-sm font-medium text-gray-700">作成年月日</label>
        <div className="mt-1">
          <input
            type="text"
            value={date}
            readOnly
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
      </div>
      {/* 範囲指定 */}
      <div className="my-4 p-4 border border-gray-300 rounded-md bg-white">
        {['施設', '管種名称', '管種規格'].map((label) => (
          <div key={label} className="flex items-center mb-3">
            <span className="w-20">{label}</span>
            <input
              type="text"
              className="mx-2 w-24 border border-gray-300 px-3 py-1 rounded-md"
              defaultValue="00000"
            />
            <span>〜</span>
            <input
              type="text"
              className="mx-2 w-24 border border-gray-300 px-3 py-1 rounded-md"
              defaultValue="99999"
            />
          </div>
        ))}
      </div>
      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded-md">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-black rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default FacilityForm;