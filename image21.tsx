```tsx
import React from 'react';

// 型定義
interface PrintDialogProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  copies: number;
  setCopies: (copies: number) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

// コンポーネント定義
const PrintDialog: React.FC<PrintDialogProps> = ({
  selectedOption,
  setSelectedOption,
  copies,
  setCopies,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white border rounded-md p-6 shadow-lg w-96">
      <h2 className="text-lg mb-4">印刷機能選択</h2>

      {/* ラジオボタンのグループ */}
      <div className="mb-4">
        <label className="block">
          <input
            type="radio"
            value="印刷"
            checked={selectedOption === '印刷'}
            onChange={() => setSelectedOption('印刷')}
            className="mr-2"
          />
          印刷
        </label>

        <label className="block">
          <input
            type="radio"
            value="プレビュー"
            checked={selectedOption === 'プレビュー'}
            onChange={() => setSelectedOption('プレビュー')}
            className="mr-2"
          />
          プレビュー
        </label>

        <label className="block">
          <input
            type="radio"
            value="PDF"
            checked={selectedOption === 'PDF'}
            onChange={() => setSelectedOption('PDF')}
            className="mr-2"
          />
          PDF
        </label>
      </div>

      {/* 部数の入力 */}
      <div className="mb-4">
        <label className="block">部数</label>
        <input
          type="number"
          value={copies}
          onChange={(e) => setCopies(Number(e.target.value))}
          min="1"
          className="border rounded p-1 w-16"
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-gray-200 hover:bg-gray-300 rounded px-4 py-2"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 rounded px-4 py-2"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
```