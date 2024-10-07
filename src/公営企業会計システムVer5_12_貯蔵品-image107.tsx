import React from 'react';

// TypeScriptの型定義
interface FormComponentProps {
  year: string;
  storageLocation: string;
  storageLocationName: string;
  onYearChange: (year: string) => void;
  onStorageLocationChange: (location: string) => void;
}

// 再利用可能なコンポーネントの定義
const FormComponent: React.FC<FormComponentProps> = ({
  year,
  storageLocation,
  storageLocationName,
  onYearChange,
  onStorageLocationChange,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">入庫伝票月計表作成</h1>
      <div className="mt-4">
        <label className="block text-sm font-medium">
          年度
          <input
            type="text"
            value={year}
            onChange={e => onYearChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium">
          保管場所
          <input
            type="text"
            value={storageLocation}
            onChange={e => onStorageLocationChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>
        <p className="mt-2 text-sm text-gray-500">{storageLocationName}</p>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          登録
        </button>
        <button className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md">
          編集
        </button>
        <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md">
          行削除
        </button>
      </div>
      <div className="mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">所属コード</th>
              <th className="border px-4 py-2">所属名称</th>
              <th className="border px-4 py-2">担当所属</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">0000001</td>
              <td className="border px-4 py-2">総務課</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">0000007</td>
              <td className="border px-4 py-2">経営企画課</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">9999999</td>
              <td className="border px-4 py-2">総務課</td>
              <td className="border px-4 py-2">担当</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md">
          OK
        </button>
        <button className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md">
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;