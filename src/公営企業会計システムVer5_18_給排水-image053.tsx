import React from 'react';

// コンポーネントのPropsの型定義
interface PrintDialogProps {
  selectedOption: string;
  onSelectOption: (option: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

// 再利用可能なPrintDialogコンポーネント
const PrintDialog: React.FC<PrintDialogProps> = ({
  selectedOption,
  onSelectOption,
  quantity,
  onQuantityChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border shadow-lg max-w-md mx-auto">
      <fieldset className="border mb-4 p-2">
        <legend className="text-sm font-bold">印刷機能選択</legend>
        <label className="block">
          <input
            type="radio"
            name="printOption"
            value="印刷"
            checked={selectedOption === '印刷'}
            onChange={() => onSelectOption('印刷')}
            className="mr-2"
          />
          印刷
        </label>
        <label className="block">
          <input
            type="radio"
            name="printOption"
            value="プレビュー"
            checked={selectedOption === 'プレビュー'}
            onChange={() => onSelectOption('プレビュー')}
            className="mr-2"
          />
          プレビュー
        </label>
        <label className="block">
          <input
            type="radio"
            name="printOption"
            value="PDF"
            checked={selectedOption === 'PDF'}
            onChange={() => onSelectOption('PDF')}
            className="mr-2"
          />
          PDF
        </label>
      </fieldset>
      <div className="flex items-center mb-4">
        <span className="mr-4">部数</span>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="border p-1 w-16"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onConfirm}
          className="bg-gray-200 rounded-md p-2 mr-4 hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 rounded-md p-2 hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
