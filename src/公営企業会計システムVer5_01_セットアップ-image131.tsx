import React from 'react';

type Props = {
  startNumber: string;
  endNumber: string;
  isTemporary: boolean;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PartnerMasterList: React.FC<Props> = ({
  startNumber,
  endNumber,
  isTemporary,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-lg font-bold text-center mb-4">
        相手先マスタリスト作成
      </h1>
      {/* Range Selection */}
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="flex items-center mb-2">
          <label className="mr-2">
            <input
              type="radio"
              name="partnerType"
              checked={!isTemporary}
              readOnly
            />
            通常相手先
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="partnerType"
              checked={isTemporary}
              readOnly
            />
            一時相手先
          </label>
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">相手先</label>
          <input
            type="text"
            className="w-24 p-1 border rounded"
            value={startNumber}
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            className="w-24 p-1 border rounded"
            value={endNumber}
            readOnly
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label>適格請求書登録番号未入力のみ</label>
        </div>
      </div>
      {/* Button Group */}
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PartnerMasterList;
