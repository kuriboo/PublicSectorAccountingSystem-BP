import React from 'react';

type Props = {
  title?: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ExampleComponent: React.FC<Props> = ({ title = '資金計画科目編集', onOk, onClear, onCancel }) => {
  return (
    <div className="min-w-md max-w-lg mx-auto p-4 border-2 border-blue-600 rounded-lg shadow-lg bg-white">
      <h1 className="text-lg font-semibold text-center bg-blue-600 text-white p-2 rounded-t">{title}</h1>
      <div className="p-4">
        {/* Radio Options */}
        <div className="flex justify-between mb-4">
          <label className="flex items-center">
            <input type="radio" name="option" />
            <span className="ml-2">借方</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="option" />
            <span className="ml-2">貸方</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="option" />
            <span className="ml-2">仕訳</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="option" className="text-blue-600" />
            <span className="ml-2 text-blue-600">予算</span>
          </label>
        </div>

        {/* Search Field */}
        <div className="flex items-center mb-4">
          <button className="bg-gray-200 border rounded-l px-4 py-2">
            科目検索
          </button>
          <input
            type="text"
            className="border rounded-r px-4 py-2"
            placeholder="00801 01"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onOk}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded"
          >
            クリア
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
