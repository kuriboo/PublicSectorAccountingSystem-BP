```tsx
import React from 'react';

type RepairFormProps = {
  assetNumber: string;
  assetName: string;
  recordTypeOptions: string[];
  startDate: string;
  fiscalYearOptions: string[];
  responsibleNumber: string;
  recipient: string;
  modificationDetails: string;
  notes: string[];
  taxAmounts: {
    inclTax: number;
    exclTax: number;
    consumptionTax: number;
  };
  taxRateOptions: number[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const RepairForm: React.FC<RepairFormProps> = ({
  assetNumber,
  assetName,
  recordTypeOptions,
  startDate,
  fiscalYearOptions,
  responsibleNumber,
  recipient,
  modificationDetails,
  notes,
  taxAmounts,
  taxRateOptions,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label>資産番号</label>
          <div>{assetNumber}</div>
        </div>
        <div>
          <label>資産名称</label>
          <div>{assetName}</div>
        </div>
        <div>
          <label>履歴区分</label>
          <select className="border p-1">
            {recordTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>着手年月日</label>
          <div>{startDate}</div>
        </div>
        <div>
          <label>負担年度</label>
          <select className="border p-1">
            {fiscalYearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>負担番号</label>
          <div>{responsibleNumber}</div>
        </div>
      </div>

      <div className="my-4">
        <label>相手先</label>
        <input type="text" className="border w-full p-1" value={recipient} />
      </div>

      <div className="my-4">
        <label>修繕内容</label>
        <input type="text" className="border w-full p-1" value={modificationDetails} />
      </div>

      <div className="my-4">
        <label>備考</label>
        {notes.map((note, index) => (
          <input key={index} type="text" className="border w-full p-1 mb-1" value={note} />
        ))}
      </div>

      <div className="my-4">
        <label>費用</label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>税込額</label>
            <input type="number" className="border w-full p-1" value={taxAmounts.inclTax} />
          </div>
          <div>
            <label>税抜額</label>
            <input type="number" className="border w-full p-1" value={taxAmounts.exclTax} />
          </div>
          <div className="flex items-center">
            <label>消費税率</label>
            <select className="border p-1 ml-2">
              {taxRateOptions.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}%
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default RepairForm;
```