import React from 'react';

interface FilterFormProps {
  // 型定義：年月初期値、年月終了値、銀行リスト、預金種類リスト
  startDate: string;
  endDate: string;
  bankOptions: Array<{ code: string; name: string }>;
  depositOptions: Array<{ code: string; name: string }>;
  onSubmit: (formData: { startDate: string; endDate: string; bankCode: string; depositTypeCode: string }) => void;
  onClear: () => void;
  onExit: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ startDate, endDate, bankOptions, depositOptions, onSubmit, onClear, onExit }) => {
  // フォームデータの状態管理
  const [formData, setFormData] = React.useState({
    startDate,
    endDate,
    bankCode: bankOptions[0]?.code || '',
    depositTypeCode: depositOptions[0]?.code || ''
  });

  // フォームデータが変更されたときの処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <label className="block text-sm font-medium text-gray-700">
          作表年月:
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        <span>〜</span>
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="block text-sm font-medium text-gray-700">
          銀行:
          <select
            name="bankCode"
            value={formData.bankCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {bankOptions.map(option => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
        <span>〜</span>
        <select
          name="depositTypeCode"
          value={formData.depositTypeCode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {depositOptions.map(option => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          OK
        </button>
        <button type="button" onClick={onClear} className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
          クリア
        </button>
        <button type="button" onClick={onExit} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
          終了
        </button>
      </div>
    </form>
  );
};

export default FilterForm;