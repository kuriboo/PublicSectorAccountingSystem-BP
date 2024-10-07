import React from 'react';

type InventoryPrepProps = {
  locationCode: string;
  locationName: string;
  onOk: () => void;
  onClose: () => void;
  onConfirmError: () => void;
};

const InventoryPrep: React.FC<InventoryPrepProps> = ({
  locationCode,
  locationName,
  onOk,
  onClose,
  onConfirmError
}) => {
  return (
    <div className="border rounded shadow-lg p-4 max-w-lg mx-auto">
      <div className="bg-purple-100 rounded-t px-4 py-2 flex justify-between">
        <div>棚卸準備処理</div>
        <div>
          <p>行政市水道事業会計</p>
          <p>平成29年08月14日</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center my-3">
          <span className="bg-gray-200 p-2 mr-2">保管場所</span>
          <input
            type="text"
            value={locationCode}
            readOnly
            className="border rounded px-2 py-1"
          />
          <span className="ml-2">{locationName}</span>
        </div>
        <p className="text-blue-700 my-2">
          前回棚卸時の棚卸高数をクリアします。
        </p>
        <p className="text-red-700 my-2">
          (注) 本処理は必ず棚卸結果入力の前に行ってください。
        </p>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={onConfirmError}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          エラー確認
        </button>
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryPrep;
