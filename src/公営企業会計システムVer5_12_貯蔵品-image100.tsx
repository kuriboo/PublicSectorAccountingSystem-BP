import React from 'react';

// TypeScript interface for props
interface MasterListProps {
  locationStart?: string;
  locationEnd?: string;
  codeStart?: string;
  codeEnd?: string;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const MasterList: React.FC<MasterListProps> = ({
  locationStart = '',
  locationEnd = '',
  codeStart = '',
  codeEnd = '',
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">貯蔵単価金額マスタリスト</h1>
      <div className="border p-4 rounded-md bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">範囲指定</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Location Range */}
          <div className="flex items-center">
            <label className="mr-2">保管場所</label>
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={locationStart}
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={locationEnd}
            />
          </div>
          {/* Code Range */}
          <div className="flex items-center">
            <label className="mr-2">単価コード</label>
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={codeStart}
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={codeEnd}
            />
          </div>
        </div>
        {/* Checkboxes */}
        <div className="mt-4">
          <label className="mr-4">
            <input type="checkbox" className="mr-1" />
            契約単価
          </label>
          <label className="mr-4">
            <input type="checkbox" className="mr-1" />
            売却単価
          </label>
          <label className="mr-4">
            <input type="checkbox" className="mr-1" />
            修整単価
          </label>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onFinish}
        >
          終了
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MasterList;
