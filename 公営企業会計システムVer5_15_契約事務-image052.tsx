```tsx
import React from 'react';

type Entry = {
  code: string;
  name: string;
};

type ConfirmationDialogProps = {
  entries: Entry[];
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  clearLabel?: string;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  entries,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
  onClear,
  confirmLabel = "OK",
  cancelLabel = "キャンセル",
  clearLabel = "クリア"
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white w-full max-w-md">
      <div className="flex justify-between mb-4">
        <button 
          className="bg-blue-500 text-white py-1 px-3 rounded"
          onClick={onEdit}
        >
          明細編集
        </button>
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
          onClick={onDelete}
        >
          行削除
        </button>
      </div>

      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border px-2 py-1">コード</th>
            <th className="border px-2 py-1">名称</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className={`bg-${index % 2 === 0 ? "gray-100" : "blue-100"}`}>
              <td className="border px-2 py-1">{entry.code}</td>
              <td className="border px-2 py-1">{entry.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end space-x-2">
        <button 
          className="bg-gray-500 text-white py-1 px-3 rounded"
          onClick={onConfirm}
        >
          {confirmLabel}
        </button>
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
          onClick={onClear}
        >
          {clearLabel}
        </button>
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
          onClick={onCancel}
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
```