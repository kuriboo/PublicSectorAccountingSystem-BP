import React from 'react';

// 定義する型
type RequestFormProps = {
  fiscalYear: number;
  startAffiliation: string;
  endAffiliation: string;
  startBusinessCode: string;
  endBusinessCode: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const RequestForm: React.FC<RequestFormProps> = ({
  fiscalYear,
  startAffiliation,
  endAffiliation,
  startBusinessCode,
  endBusinessCode,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-lg">
      <h2 className="text-lg font-bold">事業別見積要求書(記入用・当初) 作成</h2>
      
      <div className="mt-4">
        <label className="block mb-2">
          年度:
          <span className="ml-2">{`平成${fiscalYear}`}</span>
        </label>
      </div>

      <div className="mt-4 border p-4 rounded-md">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <label>所属</label>
          <input
            type="text"
            value={startAffiliation}
            className="border px-2 py-1 rounded-md"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={endAffiliation}
            className="border px-2 py-1 rounded-md"
            readOnly
          />
        </div>

        <div className="flex items-center space-x-2">
          <label>事業科目</label>
          <input
            type="text"
            value={startBusinessCode}
            className="border px-2 py-1 rounded-md"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={endBusinessCode}
            className="border px-2 py-1 rounded-md"
            readOnly
          />
        </div>
      </div>

      <div className="mt-4 flex space-x-3">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default RequestForm;
```