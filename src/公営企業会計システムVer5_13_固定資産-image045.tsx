import React from 'react';

interface AcquisitionFormProps {
  assetNumber: number;
  acquisitionAmount: number;
  data: {
    itemCode: string;
    specCode: string;
    name: string;
    spec: string;
    quantity: number;
    unit: string;
    amount: number;
  }[];
  onConfirm: () => void;
  onCancel: () => void;
}

const AcquisitionForm: React.FC<AcquisitionFormProps> = ({
  assetNumber,
  acquisitionAmount,
  data,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div>資産番号: {assetNumber}</div>
        <div>取得価格額: {acquisitionAmount}</div>
      </div>

      <table className="w-full mb-4 border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">名称コード</th>
            <th className="border p-2">規格コード</th>
            <th className="border p-2">管理名称</th>
            <th className="border p-2">管理規格名称</th>
            <th className="border p-2">取得数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">取得金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.itemCode}</td>
              <td className="border p-2">{item.specCode}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.spec}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.unit}</td>
              <td className="border p-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        <div>取得金額計: {acquisitionAmount}</div>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AcquisitionForm;
