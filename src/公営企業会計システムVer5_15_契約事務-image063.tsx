// Import necessary modules and components
import React from 'react';

// Define the prop types
interface TextMasterProps {
  screenId: string;
  contractChange: string;
  outputPosition: string;
  selectedText: string;
  textItems: string[];
  onConfirm: () => void;
  onDelete: () => void;
  onCancel: () => void;
  onOk: () => void;
  onClear: () => void;
}

// Create the TextMasterComponent with props
const TextMasterComponent: React.FC<TextMasterProps> = ({
  screenId,
  contractChange,
  outputPosition,
  selectedText,
  textItems,
  onConfirm,
  onDelete,
  onCancel,
  onOk,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between mb-4">
        <div>
          <div className="mb-2">
            <label className="text-sm">画面ID</label>
            <input type="text" value={screenId} readOnly className="ml-2 px-2 py-1 border rounded" />
          </div>
          <div>
            <label className="text-sm">契約変更伺</label>
            <input type="text" value={contractChange} readOnly className="ml-2 px-2 py-1 border rounded" />
          </div>
        </div>
        <div className="text-end">
          {/* Optional additional information */}
          <p className="text-sm">平成19年01月30日</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label className="text-sm">出力位置</label>
          <input type="text" value={outputPosition} readOnly className="ml-2 px-2 py-1 border rounded" />
        </div>
        <div>
          <label className="text-sm">選択文章</label>
          <input type="text" value={selectedText} readOnly className="ml-2 px-2 py-1 border rounded" />
        </div>
      </div>
      <div>
        <button onClick={onConfirm} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">行確定</button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded">行削除</button>
      </div>
      <table className="w-full mt-4 border text-left">
        <thead>
          <tr>
            <th className="border px-2 py-1">文章マスタ</th>
            <th className="border px-2 py-1">文章</th>
          </tr>
        </thead>
        <tbody>
          {textItems.map((text, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{`文章マスタ${index + 1}`}</td>
              <td className="border px-2 py-1">{text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <label className="text-sm">文章</label>
        <input type="text" value={textItems[0]} readOnly className="ml-2 px-2 py-1 border rounded w-full" />
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onOk} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">OK</button>
        <button onClick={onClear} className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default TextMasterComponent;
