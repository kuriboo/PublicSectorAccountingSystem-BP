```tsx
import React from 'react';

type FormData = {
  date: string;
  storageLocation: string;
  allocation: string;
  stockCategory: string;
  projectLocation: string;
  summary: string;
};

type DetailData = {
  code: string;
  name: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  tempStock: number;
  currentStock: number;
};

type FormComponentProps = {
  formData: FormData;
  detailData: DetailData[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  formData,
  detailData,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">入出庫日</label>
        <input
          value={formData.date}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">保管場所</label>
          <input
            value={formData.storageLocation}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">所属</label>
          <input
            value={formData.allocation}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">出庫区分</label>
          <input
            value={formData.stockCategory}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">工事名場所</label>
        <input
          value={formData.projectLocation}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">摘要</label>
        <input
          value={formData.summary}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mt-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              {['品番', '品名', '規格', '数量', '単位', '単価', '仮出庫数', '現在庫数'].map((heading, index) => (
                <th key={index} className="px-4 py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detailData.map((detail, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-2">{detail.code}</td>
                <td className="px-4 py-2">{detail.name}</td>
                <td className="px-4 py-2">{detail.specification}</td>
                <td className="px-4 py-2">{detail.quantity}</td>
                <td className="px-4 py-2">{detail.unit}</td>
                <td className="px-4 py-2">{detail.unitPrice.toLocaleString()}</td>
                <td className="px-4 py-2">{detail.tempStock}</td>
                <td className="px-4 py-2">{detail.currentStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex space-x-4 justify-end">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```