import React from 'react';

// TypeScript interface for props
interface ComponentProps {
  screenId: string;
  executionSequence: string;
  outputPosition: number;
  selectedText: number;
  texts: string[];
  onEditDetails: () => void;
  onDeleteRow: () => void;
  onConfirm: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const CustomComponent: React.FC<ComponentProps> = ({
  screenId,
  executionSequence,
  outputPosition,
  selectedText,
  texts,
  onEditDetails,
  onDeleteRow,
  onConfirm,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <span className="font-semibold">画面ID:</span>
          <input
            type="text"
            value={screenId}
            readOnly
            className="border rounded px-2"
          />
          <span className="font-semibold">入札執行旬:</span>
          <input
            type="text"
            value={executionSequence}
            readOnly
            className="border rounded px-2"
          />
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <div>
          <span className="font-semibold">出力位置:</span>
          <input
            type="number"
            value={outputPosition}
            readOnly
            className="border rounded px-2"
          />
        </div>
        <div>
          <span className="font-semibold">選択文章:</span>
          <input
            type="number"
            value={selectedText}
            readOnly
            className="border rounded px-2"
          />
        </div>
      </div>

      <button
        onClick={onEditDetails}
        className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded mb-2 mr-2"
      >
        明細編集
      </button>
      <button
        onClick={onDeleteRow}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-2"
      >
        行削除
      </button>

      <table className="w-full bg-white rounded-lg shadow-sm mb-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="text-left px-4 py-2">文章マスタ</th>
            <th className="text-left px-4 py-2">文章</th>
          </tr>
        </thead>
        <tbody>
          {texts.map((text, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="px-4 py-2">文章マスタ{index + 1}</td>
              <td className="px-4 py-2">{text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-2">
        <input type="text" className="flex-1 border rounded px-4 py-2" />
        <button
          onClick={onConfirm}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          行確定
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomComponent;
