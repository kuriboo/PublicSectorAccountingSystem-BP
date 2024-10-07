import React from "react";

// TypeScriptの型定義
type MasterListProps = {
  year?: number;
  startCode?: string;
  endCode?: string;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const MasterList: React.FC<MasterListProps> = ({
  year = new Date().getFullYear(),
  startCode = "000",
  endCode = "999",
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 className="mb-4 text-xl font-bold">決裁マスタリスト作成</h2>
      <div className="mb-4">
        <label className="block font-medium">年度:</label>
        <input
          type="number"
          className="w-full p-2 border rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={year}
        />
      </div>
      <div className="mb-4 border p-2 rounded">
        <p className="font-medium">範囲指定</p>
        <div className="flex justify-between items-center mt-2">
          <span>伝票種別区分:</span>
          <input
            type="text"
            className="w-20 p-2 border rounded text-center"
            defaultValue={startCode}
          />
          <span>〜</span>
          <input
            type="text"
            className="w-20 p-2 border rounded text-center"
            defaultValue={endCode}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="py-1 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="py-1 px-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterList;
