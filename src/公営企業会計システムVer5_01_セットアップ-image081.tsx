// Import necessary libraries
import React from 'react';

interface CashFlowTableProps {
  data: TableData[];
  onRegister: () => void;
  onClear: () => void;
  onClose: () => void;
}

interface TableData {
  id: number;
  collectionNumber: number;
  itemName: string;
  itemDivision: string;
  cfDivision: string;
}

const CashFlowTable: React.FC<CashFlowTableProps> = ({ data, onRegister, onClear, onClose }) => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">キャッシュ・フロー 計算書集計マスタ保守</h1>
        <div>
          <button onClick={onRegister} className="mx-1 px-3 py-2 bg-blue-500 text-white rounded">登録</button>
          <button onClick={onClear} className="mx-1 px-3 py-2 bg-gray-500 text-white rounded">クリア</button>
          <button onClick={onClose} className="mx-1 px-3 py-2 bg-red-500 text-white rounded">終了</button>
        </div>
      </div>
      
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="w-1/12 px-4 py-2">削除</th>
            <th className="w-1/12 px-4 py-2">集計番号</th>
            <th className="w-4/12 px-4 py-2">項目名称</th>
            <th className="w-3/12 px-4 py-2">項目区分</th>
            <th className="w-3/12 px-4 py-2">CF区分</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-200">
              <td className="border px-4 py-2 text-center">
                <input type="checkbox" />
              </td>
              <td className="border px-4 py-2 text-center">{item.collectionNumber}</td>
              <td className="border px-4 py-2">{item.itemName}</td>
              <td className="border px-4 py-2">{item.itemDivision}</td>
              <td className="border px-4 py-2">{item.cfDivision}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashFlowTable;
