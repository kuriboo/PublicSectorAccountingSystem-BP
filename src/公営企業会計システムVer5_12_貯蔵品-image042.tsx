// Import necessary libraries
import React from 'react';

// Define types for props
type TransferEntryProps = {
  transferDate: string;
  department: string;
  itemLocationFrom: string;
  itemNameFrom: string;
  itemSpecFrom: string;
  quantityFrom: number;
  unitFrom: string;
  postTransferQuantityFrom: number;
  itemLocationTo: string;
  itemNameTo: string;
  itemSpecTo: string;
  quantityTo: number;
  unitTo: string;
  postTransferQuantityTo: number;
};

// Functional Component
const TransferEntry: React.FC<TransferEntryProps> = ({
  transferDate,
  department,
  itemLocationFrom,
  itemNameFrom,
  itemSpecFrom,
  quantityFrom,
  unitFrom,
  postTransferQuantityFrom,
  itemLocationTo,
  itemNameTo,
  itemSpecTo,
  quantityTo,
  unitTo,
  postTransferQuantityTo,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">移管入力 (先入先出)</h2>
      <div className="flex justify-between mb-4">
        <div className="text-sm text-gray-700">移管年月日: {transferDate}</div>
        <div className="text-sm text-gray-700">部署: {department}</div>
      </div>
      <div className="border-t border-b border-gray-300 py-4">
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">保管場所</th>
              <th className="py-2 px-4">品名</th>
              <th className="py-2 px-4">規格</th>
              <th className="py-2 px-4">数量</th>
              <th className="py-2 px-4">単位</th>
              <th className="py-2 px-4">移管後数量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 px-4">{itemLocationFrom}</td>
              <td className="border-b py-2 px-4">{itemNameFrom}</td>
              <td className="border-b py-2 px-4">{itemSpecFrom}</td>
              <td className="border-b py-2 px-4">{quantityFrom}</td>
              <td className="border-b py-2 px-4">{unitFrom}</td>
              <td className="border-b py-2 px-4">{postTransferQuantityFrom}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-t border-b border-gray-300 py-4 mt-4">
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">保管場所</th>
              <th className="py-2 px-4">品名</th>
              <th className="py-2 px-4">規格</th>
              <th className="py-2 px-4">数量</th>
              <th className="py-2 px-4">単位</th>
              <th className="py-2 px-4">移管後数量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 px-4">{itemLocationTo}</td>
              <td className="border-b py-2 px-4">{itemNameTo}</td>
              <td className="border-b py-2 px-4">{itemSpecTo}</td>
              <td className="border-b py-2 px-4">{quantityTo}</td>
              <td className="border-b py-2 px-4">{unitTo}</td>
              <td className="border-b py-2 px-4">{postTransferQuantityTo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white py-1 px-4 rounded mr-2">OK</button>
        <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded mr-2">クリア</button>
        <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default TransferEntry;
