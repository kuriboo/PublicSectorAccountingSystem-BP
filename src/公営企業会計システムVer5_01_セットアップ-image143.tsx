// components/DecisionTableMaster.tsx

import React from 'react';
import 'tailwindcss/tailwind.css';

type DecisionTableMasterProps = {
  fiscalYear: string;
  columnCode: string;
  decisionCodes: Array<{ code: string; name: string }>;
  showExtraOptions?: boolean;
  onConfirm: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const DecisionTableMaster: React.FC<DecisionTableMasterProps> = ({
  fiscalYear,
  columnCode,
  decisionCodes,
  showExtraOptions = false,
  onConfirm,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">決裁欄マスタ</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">会計年度</label>
        <div className="border py-2 px-3 mt-1 block">{fiscalYear} 年度</div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">欄コード</label>
        <input
          type="text"
          className="border py-2 px-3 mt-1 block w-full"
          value={columnCode}
          readOnly
        />
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-medium text-gray-700">決裁合議者コード</h2>
        <div className="grid grid-cols-5 gap-2 mt-1">
          {decisionCodes.map((decision, index) => (
            <div key={index} className="flex flex-col items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                value={decision.code}
              />
              <span className="text-xs">{decision.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {showExtraOptions && (
        <div className="mb-4">
          <h2 className="text-sm font-medium text-gray-700">決裁不要フラグ</h2>
          <div className="grid grid-cols-5 gap-2 mt-1">
            {decisionCodes.map((decision, index) => (
              <span key={index} className="text-xs">上水</span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-200 text-black px-4 py-2 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DecisionTableMaster;
```