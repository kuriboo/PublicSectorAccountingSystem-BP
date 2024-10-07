import React from 'react';

// 型定義
interface PrintDialogProps {
  title: string;
  options: { label: string; checked: boolean }[];
  reprintOptions: { key: string; label: string; enabled: boolean }[];
  date: string;
  onOptionChange: (index: number) => void;
  onReprintOptionChange: (key: string) => void;
  onDateChange: (date: string) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const PrintDialog: React.FC<PrintDialogProps> = ({
  title,
  options,
  reprintOptions,
  date,
  onOptionChange,
  onReprintOptionChange,
  onDateChange,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="border p-4 w-full max-w-md bg-white shadow-md">
      {/* タイトル */}
      <h1 className="text-lg font-bold mb-4">{title}</h1>

      {/* オプション */}
      <div className="mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => onOptionChange(index)}
              className="mr-2"
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>

      {/* 再印字オプション */}
      <div className="mb-4">
        {reprintOptions.map(({ key, label, enabled }) => (
          <div key={key} className="flex items-center">
            <label className="mr-2">{label}</label>
            <div className="flex items-center">
              <input
                type="radio"
                name={key}
                checked={enabled}
                onChange={() => onReprintOptionChange(key)}
                className="mr-1"
              />
              <span className="mr-2">有</span>
              <input
                type="radio"
                name={key}
                checked={!enabled}
                onChange={() => onReprintOptionChange(key)}
                className="mr-1"
              />
              <span>無</span>
            </div>
          </div>
        ))}
      </div>

      {/* 日付選択 */}
      <div className="mb-4">
        <label className="block">精算日印字:</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="dateOption"
            checked={!date}
            onChange={() => onDateChange('')}
            className="mr-2"
          />
          <span className="mr-4">全精算日</span>
          <input
            type="radio"
            name="dateOption"
            checked={!!date}
            onChange={() => onDateChange(date)}
            className="mr-2"
          />
          <span className="mr-2">指定日</span>
          <input
            type="text"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="border px-2 py-1"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
