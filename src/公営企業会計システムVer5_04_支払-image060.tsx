import React from 'react';

// Propsの型定義
type CheckboxItem = {
  label: string;
  checked: boolean;
};

type PrintDialogProps = {
  title: string;
  checkboxItems: CheckboxItem[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネントの定義
const PrintDialog: React.FC<PrintDialogProps> = ({ title, checkboxItems, onOk, onClear, onCancel }) => {
  return (
    <div className="border rounded-md shadow-lg p-6 max-w-sm">
      {/* タイトル */}
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="border p-4">
        <h3 className="mb-2">印刷対象帳票名</h3>
        {/* チェックボックスリスト */}
        <form>
          {checkboxItems.map((item, index) => (
            <div key={index} className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" checked={item.checked} className="mr-2" />
                <span>{item.label}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        {/* ボタン */}
        <button
          onClick={onOk}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
```