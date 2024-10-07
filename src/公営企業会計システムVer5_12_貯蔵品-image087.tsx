import React from 'react';

// 型定義
interface Props {
  year: string;
  storageLocationStart: string;
  storageLocationEnd: string;
  itemNumberStart: string;
  itemNumberEnd: string;
  includeEvaluationItemsOnly: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const FormComponent: React.FC<Props> = ({
  year,
  storageLocationStart,
  storageLocationEnd,
  itemNumberStart,
  itemNumberEnd,
  includeEvaluationItemsOnly,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h1 className="text-lg font-bold mb-4">範囲入力</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mb-2">
          <label className="font-bold">年度:</label>
          <input
            type="text"
            value={year}
            readOnly
            className="ml-2 p-1 border-b"
          />
        </div>

        <div className="mb-2">
          <label className="font-bold">保管場所:</label>
          <input
            type="text"
            value={storageLocationStart}
            readOnly
            className="ml-2 p-1 border-b"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={storageLocationEnd}
            readOnly
            className="ml-2 p-1 border-b"
          />
        </div>

        <div className="mb-2">
          <label className="font-bold">品番:</label>
          <input
            type="text"
            value={itemNumberStart}
            readOnly
            className="ml-2 p-1 border-b"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={itemNumberEnd}
            readOnly
            className="ml-2 p-1 border-b"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeEvaluationItemsOnly}
              readOnly
            />
            <span className="ml-2">評価損発生品番のみ抽出</span>
          </label>
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
