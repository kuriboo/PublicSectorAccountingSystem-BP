import React from 'react';

// TypeScriptの型定義
type FormData = {
  entryDate: string;
  departmentNumber: string;
  issueNumber: string;
  entryExitNumber: string;
  issuanceCategory: string;
  fiscalYear: string;
  contractNumber: string;
  worker: string;
  workLocation: string;
  description: string;
  items: Item[];
};

type Item = {
  itemNumber: string;
  itemName: string;
  spec: string;
  unit: string;
  unitPrice: number;
  amount: number;
  expectedDate: string;
  remainingQuantity: number;
};

type InventoryFormProps = {
  data: FormData;
  onSubmit: (data: FormData) => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({ data, onSubmit }) => {
  // フォーム送信関数
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="space-y-4">
        {/* 入庫日 */}
        <div>
          <label htmlFor="entryDate" className="block text-sm font-medium text-gray-700">
            入庫日
          </label>
          <input
            type="text"
            id="entryDate"
            value={data.entryDate}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
            readOnly
          />
        </div>

        {/* 所属 */}
        <div>
          <label htmlFor="departmentNumber" className="block text-sm font-medium text-gray-700">
            所属
          </label>
          <input
            type="text"
            id="departmentNumber"
            value={data.departmentNumber}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
            readOnly
          />
        </div>

        {/* 伝票番号 */}
        <div>
          <label htmlFor="issueNumber" className="block text-sm font-medium text-gray-700">
            伝票番号
          </label>
          <input
            type="text"
            id="issueNumber"
            value={data.issueNumber}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
            readOnly
          />
        </div>

        {/* 入出庫番号 */}
        {/* ...他のフィールドも同様に追加... */}

        {/* 明細Table */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['品番', '品名', '規格', '単位', '単価', '金額', '入庫予定日', '発注残数'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.items.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.itemNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.spec}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unitPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.expectedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.remainingQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ボタン */}
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow">
            OK
          </button>
          <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded shadow">
            クリア
          </button>
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded shadow">
            終了
          </button>
        </div>
      </div>
    </form>
  );
};

export default InventoryForm;