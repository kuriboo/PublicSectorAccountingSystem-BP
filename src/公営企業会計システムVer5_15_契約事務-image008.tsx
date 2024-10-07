import React from 'react';

type IndustryDetailProps = {
  industryCode: string;
  industryName: string;
  onEditDetail: () => void;
  onRemoveRow: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const IndustryDetail: React.FC<IndustryDetailProps> = ({
  industryCode,
  industryName,
  onEditDetail,
  onRemoveRow,
  onConfirm,
  onCancel,
  onClear,
}) => {
  return (
    <div className="p-4 bg-white">
      <div className="mb-4 flex items-center">
        <span className="mr-2">業種</span>
        <span className="font-bold">{industryCode}</span>
        <span className="ml-4">{industryName}</span>
      </div>
      <div className="mb-4 flex">
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded mr-2" 
          onClick={onEditDetail}
        >
          明細編集
        </button>
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded" 
          onClick={onRemoveRow}
        >
          行削除
        </button>
      </div>
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="p-2 border">業種明細コード</th>
            <th className="p-2 border">業種明細名称</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, should be mapped from data */}
          <tr>
            <td className="p-2 border">001</td>
            <td className="p-2 border">土木一式工事</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-4">
        <label className="block mb-2">業種明細</label>
        <select className="border p-2 w-full">
          {/* Options should be populated dynamically */}
          <option>Option 1</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-5 rounded mr-2" 
            onClick={onConfirm}
          >
            行確定
          </button>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-5 rounded" 
            onClick={onCancel}
          >
            行キャンセル
          </button>
        </div>
        <div>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-5 rounded" 
            onClick={onClear}
          >
            クリア
          </button>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-5 rounded" 
            disabled
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
```