import React from 'react';

type AssetInputProps = {
  assetNumber: string;
  assetName: string;
  removalAmount: number;
  details: {
    lineNo: number;
    content: string;
    currentQty: number;
    removalQty: number;
    unit: string;
    currentAmount: number;
    amount: number;
  }[];
  onConfirm?: () => void;
  onCancel?: () => void;
  onClear?: () => void;
};

const AssetInput: React.FC<AssetInputProps> = ({
  assetNumber,
  assetName,
  removalAmount,
  details,
  onConfirm,
  onCancel,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex justify-between">
        <div>資産番号: {assetNumber}</div>
        <div>資産名称: {assetName}</div>
        <div>除却額: {removalAmount.toLocaleString()}</div>
      </div>
      <table className="w-full mt-4 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-600">行番号</th>
            <th className="border border-gray-600">構造内容</th>
            <th className="border border-gray-600">現在数量</th>
            <th className="border border-gray-600">除却数量</th>
            <th className="border border-gray-600">単位</th>
            <th className="border border-gray-600">現在金額</th>
            <th className="border border-gray-600">金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.lineNo} className="bg-white">
              <td className="border border-gray-600">{detail.lineNo}</td>
              <td className="border border-gray-600">{detail.content}</td>
              <td className="border border-gray-600">{detail.currentQty.toFixed(2)}</td>
              <td className="border border-gray-600">{detail.removalQty.toFixed(2)}</td>
              <td className="border border-gray-600">{detail.unit}</td>
              <td className="border border-gray-600">{detail.currentAmount.toLocaleString()}</td>
              <td className="border border-gray-600">{detail.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-4 rounded-md mr-2"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-4 rounded-md mr-2"
        >
          キャンセル
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AssetInput;
