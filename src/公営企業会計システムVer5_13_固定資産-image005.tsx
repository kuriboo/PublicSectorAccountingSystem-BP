import React from 'react';

// 型定義
interface AssetSourceSettingsProps {
  acquisitionAmount: number;
  excludedAmount: number;
  items: Item[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
  onConfirm: (code: string, amount: number) => void;
  onCancel: () => void;
}

interface Item {
  code: string;
  name: string;
  division: string;
  amount: number;
}

// コンポーネント
const AssetSourceSettings: React.FC<AssetSourceSettingsProps> = ({
  acquisitionAmount,
  excludedAmount,
  items,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">取得資産・財源設定</h2>

      <div className="mb-4">
        <div>
          <span>取得価額: </span>
          <span>{acquisitionAmount.toLocaleString()}</span>
        </div>
        <div>
          <span>償却除外額: </span>
          <span>{excludedAmount.toLocaleString()}</span>
        </div>
      </div>

      <table className="w-full mb-4 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">財源コード</th>
            <th className="border px-4 py-2">財源名称</th>
            <th className="border px-4 py-2">償却区分</th>
            <th className="border px-4 py-2">財源金額</th>
            <th className="border px-4 py-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.division}</td>
              <td className="border px-4 py-2">{item.amount.toLocaleString()}</td>
              <td className="border px-4 py-2">
                <button
                  className="mr-2 text-blue-500"
                  onClick={() => onEdit(item.code)}
                >
                  編集
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(item.code)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <button
          className="mr-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => onConfirm(items[0].code, items[0].amount)}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetSourceSettings;
