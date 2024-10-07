import React from 'react';

type CashSettingProps = {
  accumulationNumber: number;
  itemName1: string;
  amountSection?: number;
  modificationSection?: number;
  indent?: number;
  noReportOutput?: boolean;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CashSetting: React.FC<CashSettingProps> = ({
  accumulationNumber,
  itemName1,
  amountSection = 1,
  modificationSection = 1,
  indent = 0,
  noReportOutput = false,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-md bg-white shadow-lg rounded-md">
      <div className="mb-2">
        <label className="block text-sm font-semibold">集計番号</label>
        <input
          type="text"
          value={accumulationNumber}
          className="w-full mt-1 p-2 border"
          readOnly
        />
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-semibold">項目名称1</label>
        <input
          type="text"
          value={itemName1}
          className="w-full mt-1 p-2 border"
          readOnly
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-semibold">金額印字区分</label>
        <select className="w-full mt-1 p-2 border" defaultValue={amountSection}>
          <option value="1">名称印字・金額印字</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-semibold">改行区分</label>
        <select className="w-full mt-1 p-2 border" defaultValue={modificationSection}>
          <option value="1">1行改行</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-semibold">インデント</label>
        <input
          type="number"
          value={indent}
          className="w-full mt-1 p-2 border"
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={noReportOutput}
            className="form-checkbox"
          />
          <span className="ml-2">帳票出力無し</span>
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CashSetting;
