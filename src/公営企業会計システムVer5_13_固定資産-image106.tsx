import React from 'react';

// 型定義
type AssetDetailProps = {
  assetNumber: string;
  assetName: string;
  annotations: string[];
  movements: {
    date: string;
    type: string;
    summary: string;
    assetAmount: number;
    detailAmount: number;
    postAmount: number;
  }[];
  actions: {
    confirm: () => void;
    clear: () => void;
    cancel: () => void;
  };
};

const AssetDetail: React.FC<AssetDetailProps> = ({
  assetNumber,
  assetName,
  annotations,
  movements,
  actions,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* 資産番号 */}
      <div className="mb-2">
        <span>資産番号: </span>
        <span className="font-bold">{assetNumber}</span>
      </div>
      {/* 資産名称 */}
      <div className="mb-4">
        <span>資産名称: </span>
        <span className="font-bold">{assetName}</span>
      </div>
      {/* 明細区分 */}
      <div className="mb-4">
        {annotations.map((annotation, index) => (
          <label key={index} className="block">
            <input type="checkbox" className="mr-2" />
            {annotation}
          </label>
        ))}
      </div>
      {/* 明細編集ボタン */}
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">明細編集</button>
      {/* テーブル */}
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">異動年月日</th>
            <th className="border border-gray-400 p-2">異動区分</th>
            <th className="border border-gray-400 p-2">異動摘要</th>
            <th className="border border-gray-400 p-2">異動金額(資産)</th>
            <th className="border border-gray-400 p-2">異動金額(明細合計)</th>
            <th className="border border-gray-400 p-2">異動後帳簿原価</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 p-2">{movement.date}</td>
              <td className="border border-gray-400 p-2">{movement.type}</td>
              <td className="border border-gray-400 p-2">{movement.summary}</td>
              <td className="border border-gray-400 p-2">{movement.assetAmount}</td>
              <td className="border border-gray-400 p-2">{movement.detailAmount}</td>
              <td className="border border-gray-400 p-2">{movement.postAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ボタン */}
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          onClick={actions.confirm}
        >
          確定
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
          onClick={actions.clear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={actions.cancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetail;
