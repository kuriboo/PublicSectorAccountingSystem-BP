// components/InitialValueMaster.tsx
import React from 'react';

// TypeScript interface for component props
interface InitialValueMasterProps {
  fiscalYear: string;
  menuOptions: string[];
  initialData: {
    screenCode: string;
    screenTitle: string;
    id: number;
    initialValue: string;
    content: string;
    individualSetting: boolean;
    nonDisplay: boolean;
  }[];
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable component with Tailwind CSS styling
const InitialValueMaster: React.FC<InitialValueMasterProps> = ({
  fiscalYear,
  menuOptions,
  initialData,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">画面初期値マスタ</h2>
      <div className="flex items-center space-x-4 my-2">
        <div className="flex flex-col">
          <label className="text-sm">年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">メニュー</label>
          <select className="border p-1 rounded">
            {menuOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 border">画面CD</th>
              <th className="p-2 border">画面タイトル</th>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">初期値</th>
              <th className="p-2 border">内容</th>
              <th className="p-2 border">個別設定</th>
              <th className="p-2 border">非表示</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((data, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2 border">{data.screenCode}</td>
                <td className="p-2 border">{data.screenTitle}</td>
                <td className="p-2 border">{data.id}</td>
                <td className="p-2 border">{data.initialValue}</td>
                <td className="p-2 border">{data.content}</td>
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={data.individualSetting}
                    readOnly
                  />
                </td>
                <td className="p-2 border text-center">
                  <input type="checkbox" checked={data.nonDisplay} readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">
          クリア
        </button>
        <button onClick={onOk} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default InitialValueMaster;