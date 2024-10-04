```tsx
import React from "react";

type ProcessStatus = {
  menu: string;
  function: string;
  status: string;
  lastProcessed: string;
  authorized: string;
};

type Props = {
  year: string;
  statuses: ProcessStatus[];
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

const FinancialProcessingComponent: React.FC<Props> = ({
  year,
  statuses,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <div className="bg-blue-100 p-4 rounded-t-lg">
        <h1 className="text-lg font-bold text-blue-900">決算統計処理年度更新</h1>
        <div className="mt-2">
          <label className="text-blue-900">決算統計処理年度:</label>
          <span className="ml-2 text-blue-900">{year} 年度</span>
        </div>
        <div className="mt-4 p-2 bg-white border rounded">
          <p>決算統計処理年度を更新します。決算統計を行う年度を指定してください。</p>
        </div>
      </div>

      {/* Status Table */}
      <div className="mt-4 border rounded-b-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-200">
            <tr>
              <th className="text-left p-2">メニュー</th>
              <th className="text-left p-2">機能</th>
              <th className="text-left p-2">状況</th>
              <th className="text-left p-2">最終処理日時</th>
              <th className="text-left p-2">職員名</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {statuses.map((status, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{status.menu}</td>
                <td className="p-2">{status.function}</td>
                <td className="p-2">{status.status}</td>
                <td className="p-2">{status.lastProcessed}</td>
                <td className="p-2">{status.authorized}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCloseClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialProcessingComponent;
```