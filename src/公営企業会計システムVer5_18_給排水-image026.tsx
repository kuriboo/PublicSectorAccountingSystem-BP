import React from 'react';

type FormData = {
  fiscalYear: string;
  categoryCode: string;
  unitPriceCode: string;
  unitPriceName: string;
  unitPrice: string;
  summaryTableCode: string;
  summaryTableName: string;
};

type EntryTableRow = {
  acceptanceYear: number;
  categoryCode: string;
  categoryName: string;
  unitPriceCode: string;
  unitPriceName: string;
  summaryTableCode: string;
  summaryTableName: string;
};

type FormProps = {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
  entryTableRows: EntryTableRow[];
};

const FormComponent: React.FC<FormProps> = ({
  formData,
  onChange,
  onSubmit,
  onClear,
  onClose,
  entryTableRows,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <h1 className="text-xl font-bold">納付分類単価マスタ</h1>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="block">
          受付年度
          <input
            type="text"
            value={formData.fiscalYear}
            onChange={(e) => onChange('fiscalYear', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          納付分類区分
          <input
            type="text"
            value={formData.categoryCode}
            onChange={(e) => onChange('categoryCode', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          単価コード
          <input
            type="text"
            value={formData.unitPriceCode}
            onChange={(e) => onChange('unitPriceCode', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          単価名称
          <input
            type="text"
            value={formData.unitPriceName}
            onChange={(e) => onChange('unitPriceName', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          単価
          <input
            type="text"
            value={formData.unitPrice}
            onChange={(e) => onChange('unitPrice', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          集計表コード
          <input
            type="text"
            value={formData.summaryTableCode}
            onChange={(e) => onChange('summaryTableCode', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block">
          集計表名称
          <input
            type="text"
            value={formData.summaryTableName}
            onChange={(e) => onChange('summaryTableName', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>

      {/* Entry Table */}
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">受付年度</th>
              <th className="px-4 py-2">納付分類区分</th>
              <th className="px-4 py-2">納付分類名称</th>
              <th className="px-4 py-2">単価コード</th>
              <th className="px-4 py-2">単価名称</th>
              <th className="px-4 py-2">集計表コード</th>
              <th className="px-4 py-2">集計表名称</th>
            </tr>
          </thead>
          <tbody>
            {entryTableRows.map((row, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{row.acceptanceYear}</td>
                <td className="border px-4 py-2">{row.categoryCode}</td>
                <td className="border px-4 py-2">{row.categoryName}</td>
                <td className="border px-4 py-2">{row.unitPriceCode}</td>
                <td className="border px-4 py-2">{row.unitPriceName}</td>
                <td className="border px-4 py-2">{row.summaryTableCode}</td>
                <td className="border px-4 py-2">{row.summaryTableName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 text-black rounded">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
