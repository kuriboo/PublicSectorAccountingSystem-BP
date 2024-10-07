import React from 'react';

type DescriptionFormProps = {
  lineNum: string;
  description: string;
  detailNum: string;
  amountInThousand: number;
  amountInYen: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DescriptionForm: React.FC<DescriptionFormProps> = ({
  lineNum,
  description,
  detailNum,
  amountInThousand,
  amountInYen,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <h2 className="text-lg mb-2">説明欄情報</h2>
        <div className="flex justify-between mb-2">
          <label className="flex-1">
            行番号
            <input
              type="text"
              value={lineNum}
              className="border p-1 rounded w-24 ml-2"
              readOnly
            />
          </label>
          <label className="flex-1 ml-4">
            説明欄
            <input
              type="text"
              value={description}
              className="border p-1 rounded w-full ml-2"
              readOnly
            />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <label className="flex-1">
            細節
            <input
              type="text"
              value={detailNum}
              className="border p-1 rounded w-16 ml-2"
              readOnly
            />
          </label>
          <label className="flex-1 ml-4">
            金額（千円）
            <input
              type="number"
              value={amountInThousand}
              className="border p-1 rounded w-24 ml-2 text-right"
              readOnly
            />
          </label>
          <label className="flex-1 ml-4">
            金額（円）
            <input
              type="number"
              value={amountInYen}
              className="border p-1 rounded w-32 ml-2 text-right"
              readOnly
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DescriptionForm;
