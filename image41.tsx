```tsx
import React from 'react';

// 型定義
type InvoiceProps = {
  fiscalYearOptions: string[];
  invoiceDateRange: { start: string; end: string };
  invoiceNumberRange: { start: number; end: number };
  showTaxOnly: boolean;
  searchSummary: string;
  onSearch: () => void;
  registerOptions: { label: string; value: string }[];
  selectedRegisterOption: string;
  onSelectRegisterOption: (option: string) => void;
};

const InvoiceComponent: React.FC<InvoiceProps> = ({
  fiscalYearOptions,
  invoiceDateRange,
  invoiceNumberRange,
  showTaxOnly,
  searchSummary,
  onSearch,
  registerOptions,
  selectedRegisterOption,
  onSelectRegisterOption,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">特定課税仕入伝票管理入力</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">検索</h2>
        <div className="flex items-center mb-2">
          <label className="mr-2">伝票日付:</label>
          <input type="date" value={invoiceDateRange.start} className="border rounded px-2 py-1" />
          <span className="mx-2">〜</span>
          <input type="date" value={invoiceDateRange.end} className="border rounded px-2 py-1" />
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">伝票番号:</label>
          <input type="number" value={invoiceNumberRange.start} min="0" className="border rounded px-2 py-1" />
          <span className="mx-2">〜</span>
          <input type="number" value={invoiceNumberRange.end} className="border rounded px-2 py-1" />
        </div>

        <div className="flex items-center mb-2">
          <input type="checkbox" checked={showTaxOnly} className="mr-2" />
          <span>課税の支出予算執行かつ税額0円の伝票のみ抽出</span>
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">摘要:</label>
          <input type="text" value={searchSummary} className="border rounded px-2 py-1 flex-grow" />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSearch}>表示</button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">登録</h2>
        <div className="flex items-center">
          {registerOptions.map(option => (
            <label key={option.value} className="mr-4">
              <input type="radio" name="register" value={option.value} 
                checked={selectedRegisterOption === option.value}
                onChange={() => onSelectRegisterOption(option.value)}
                className="mr-1" />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">摘要2</th>
            <th className="border px-2 py-1">振替年度</th>
            <th className="border px-2 py-1">振替番号</th>
            <th className="border px-2 py-1">伝票日付</th>
            <th className="border px-2 py-1">摘要1</th>
            <th className="border px-2 py-1">税込額</th>
            <th className="border px-2 py-1">税抜額</th>
            <th className="border px-2 py-1">消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">2015</td>
            <td className="border px-2 py-1">43</td>
            <td className="border px-2 py-1">2016/03/27</td>
            <td className="border px-2 py-1">電子書籍/消費税</td>
            <td className="border px-2 py-1">80,000</td>
            <td className="border px-2 py-1">80,000</td>
            <td className="border px-2 py-1">0</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default InvoiceComponent;
```