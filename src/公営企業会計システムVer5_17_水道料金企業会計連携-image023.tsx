// components/DataExportForm.tsx

import React from 'react';

type DataExportFormProps = {
  exportPath: string;
  onExportPathChange: (value: string) => void;
  onSubmit: () => void;
};

const DataExportForm: React.FC<DataExportFormProps> = ({
  exportPath,
  onExportPathChange,
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">会計連携データ出力</h1>
      
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          出力先
        </label>
        <input
          type="text"
          value={exportPath}
          onChange={(e) => onExportPathChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">調定年月</label>
        <div className="flex space-x-2">
          <input type="date" className="w-full p-2 border border-gray-300 rounded" />
          <input type="date" className="w-full p-2 border border-gray-300 rounded" />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataExportForm;
