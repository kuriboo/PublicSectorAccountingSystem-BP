import React from 'react';

// Define the types for the properties
type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  records: Array<{
    date: string;
    nameCode: string;
    specCode: string;
    name: string;
    spec: string;
    quantity: number;
    unit: string;
    amount: number;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetInfoComponent: React.FC<AssetInfoProps> = ({
  assetNumber,
  assetName,
  records,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-600 text-white p-2">
        <div>資産番号: {assetNumber}</div>
        <div>資産名称: {assetName}</div>
      </div>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th>異動年月日</th>
            <th>名称コード</th>
            <th>規格コード</th>
            <th>管理名称</th>
            <th>管理規格名称</th>
            <th>異動数量</th>
            <th>単位</th>
            <th>異動金額</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-t">
              <td>{record.date}</td>
              <td>{record.nameCode}</td>
              <td>{record.specCode}</td>
              <td>{record.name}</td>
              <td>{record.spec}</td>
              <td>{record.quantity}</td>
              <td>{record.unit}</td>
              <td>{record.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button 
          className="bg-gray-300 px-4 py-2 mr-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          確定
        </button>
      </div>
    </div>
  );
};

export default AssetInfoComponent;