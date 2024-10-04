import React from 'react';

type FormProps = {
  assetNumber: string;
  assetName?: string;
  wearTypeOptions: Array<string>;
  startDate?: string;
  endDate?: string;
  year?: string;
  burdenNumber?: string;
  partner?: string;
  repairContent?: string;
  note?: string;
  taxIncluded?: number;
  taxExcluded?: number;
  consumptionTax?: number;
  taxRateOptions: Array<number>;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  assetNumber,
  assetName,
  wearTypeOptions,
  startDate,
  endDate,
  year,
  burdenNumber,
  partner,
  repairContent,
  note,
  taxIncluded,
  taxExcluded,
  consumptionTax,
  taxRateOptions,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="mb-4">
        <label>資産番号: {assetNumber}</label>
      </div>
      <div className="mb-4">
        <label>資産名称: {assetName}</label>
      </div>
      <div className="mb-4">
        <label>履歴区分:</label>
        <select className="ml-2 border p-1">
          {wearTypeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label>着手年月日:</label>
        <input type="date" defaultValue={startDate} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>完了年月日:</label>
        <input type="date" defaultValue={endDate} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>負担年度:</label>
        <input type="text" defaultValue={year} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>負担番号:</label>
        <input type="text" defaultValue={burdenNumber} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>相手先:</label>
        <input type="text" defaultValue={partner} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>修繕内容:</label>
        <input type="text" defaultValue={repairContent} className="ml-2 border p-1" />
      </div>
      <div className="mb-4">
        <label>備考:</label>
        <textarea defaultValue={note} className="ml-2 border p-1 w-full" />
      </div>
      <div className="mb-4">
        <label>費用</label>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <label>税込額:</label>
            <input type="number" defaultValue={taxIncluded} className="ml-2 border p-1" />
          </div>
          <div>
            <label>税抜額:</label>
            <input type="number" defaultValue={taxExcluded} className="ml-2 border p-1" />
          </div>
          <div>
            <label>消費税額:</label>
            <input type="number" defaultValue={consumptionTax} className="ml-2 border p-1" />
          </div>
          <div>
            <label>消費税率:</label>
            <select className="ml-2 border p-1">
              {taxRateOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option} %
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded-md">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;