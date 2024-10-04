import React from 'react';

// TypeScriptの型定義
type PrintDialogProps = {
  selectedOptions: string[];
  onSelectionChange: (selected: string[]) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PrintDialog: React.FC<PrintDialogProps> = ({
  selectedOptions,
  onSelectionChange,
  onConfirm,
  onClear,
  onCancel,
}) => {
  // 項目リスト
  const options = [
    '負担行為とりまとめ伺書',
    'とりまとめ債権収調書兼請求書',
  ];

  // チェックボックスの変更ハンドラ
  const handleCheckboxChange = (option: string) => () => {
    if (selectedOptions.includes(option)) {
      onSelectionChange(selectedOptions.filter((o) => o !== option));
    } else {
      onSelectionChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4">印刷対象帳票名</h2>
      <div className="border p-2 mb-4">
        {options.map((option) => (
          <div key={option}>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button onClick={onConfirm} className="mx-1 px-4 py-2 bg-gray-300 rounded">OK</button>
        <button onClick={onClear} className="mx-1 px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onCancel} className="mx-1 px-4 py-2 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default PrintDialog;