import React from 'react';

type CashFlowProps = {
  aggregationNumber: number;
  itemName: string;
  cfDivisionOptions: string[];
  amountDisplayOptions: string[];
  reviseDivisionOptions: string[];
  onIndentChange: (indent: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CashFlow: React.FC<CashFlowProps> = ({
  aggregationNumber,
  itemName,
  cfDivisionOptions,
  amountDisplayOptions,
  reviseDivisionOptions,
  onIndentChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 shadow-md w-72">
      <div className="mb-2">
        <label className="text-sm">集計番号</label>
        <div>{aggregationNumber}</div>
      </div>
      <div className="mb-2">
        <label className="text-sm">項目名称1</label>
        <input
          type="text"
          defaultValue={itemName}
          className="border border-gray-300 rounded w-full p-1"
        />
      </div>
      <div className="mb-2">
        <label className="text-sm">CF区分</label>
        <select className="border border-gray-300 rounded w-full p-1">
          {cfDivisionOptions.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="text-sm">金額印字区分</label>
        <select className="border border-gray-300 rounded w-full p-1">
          {amountDisplayOptions.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="text-sm">改行区分</label>
        <select className="border border-gray-300 rounded w-full p-1">
          {reviseDivisionOptions.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="text-sm">インデント</label>
        <input
          type="number"
          defaultValue={0}
          className="border border-gray-300 rounded w-full p-1"
          onChange={(e) => onIndentChange(Number(e.target.value))}
        />
      </div>
      <div className="mb-2 flex items-center">
        <input type="checkbox" id="noPrintVoucher" />
        <label htmlFor="noPrintVoucher" className="ml-1 text-sm">帳票出力無し</label>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-gray-200 px-3 py-1 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-3 py-1 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 px-3 py-1 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default CashFlow;
```