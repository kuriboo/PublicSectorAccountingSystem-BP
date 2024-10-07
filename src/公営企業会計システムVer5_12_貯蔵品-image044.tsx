import React from 'react';

// TypeScriptの型定義
type TransferData = {
  location: string;
  productName: string;
  specification: string;
  quantity: number;
  unit: string;
  postTransferQuantity: number;
};

type TransferComponentProps = {
  transferDate: string;
  managementSection: string;
  remarks: string;
  transferOrigin: TransferData[];
  transferDestination: TransferData[];
  onActionClick: (action: 'register' | 'edit' | 'delete') => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const TransferComponent: React.FC<TransferComponentProps> = ({
  transferDate,
  managementSection,
  remarks,
  transferOrigin,
  transferDestination,
  onActionClick,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md max-w-4xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold">移管入力(移動平均)</h2>
        <div className="text-right text-sm">平成30年6月25日</div>
      </div>

      <div className="border p-2 mb-2">
        <div className="flex items-center mb-2">
          <span className="mr-2">移管年月日:</span>
          <input type="text" value={transferDate} className="border px-2 py-1"/>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">決裁区分:</span>
          <input type="text" value={managementSection} className="border px-2 py-1"/>
        </div>
        <div className="flex mb-2">
          <span className="mr-2">摘要:</span>
          <input type="text" value={remarks} className="border flex-1 px-2 py-1"/>
        </div>
      </div>

      <div className="border p-2 mb-2">
        <h3 className="font-bold mb-2">移管元</h3>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">保管場所</th>
              <th className="border px-2 py-1">品名</th>
              <th className="border px-2 py-1">規格</th>
              <th className="border px-2 py-1">数量</th>
              <th className="border px-2 py-1">単位</th>
              <th className="border px-2 py-1">移管後数量</th>
            </tr>
          </thead>
          <tbody>
            {transferOrigin.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-2 py-1">{item.location}</td>
                <td className="border px-2 py-1">{item.productName}</td>
                <td className="border px-2 py-1">{item.specification}</td>
                <td className="border px-2 py-1">{item.quantity}</td>
                <td className="border px-2 py-1">{item.unit}</td>
                <td className="border px-2 py-1">{item.postTransferQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border p-2 mb-2">
        <h3 className="font-bold mb-2">移管先</h3>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">保管場所</th>
              <th className="border px-2 py-1">品名</th>
              <th className="border px-2 py-1">規格</th>
              <th className="border px-2 py-1">数量</th>
              <th className="border px-2 py-1">単位</th>
              <th className="border px-2 py-1">移管後数量</th>
            </tr>
          </thead>
          <tbody>
            {transferDestination.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-2 py-1">{item.location}</td>
                <td className="border px-2 py-1">{item.productName}</td>
                <td className="border px-2 py-1">{item.specification}</td>
                <td className="border px-2 py-1">{item.quantity}</td>
                <td className="border px-2 py-1">{item.unit}</td>
                <td className="border px-2 py-1">{item.postTransferQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={() => onActionClick('register')} className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
        <button onClick={() => onActionClick('edit')} className="bg-yellow-500 text-white px-4 py-2 rounded">訂正</button>
        <button onClick={() => onActionClick('delete')} className="bg-red-500 text-white px-4 py-2 rounded">削除</button>
        <button onClick={onOk} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default TransferComponent;