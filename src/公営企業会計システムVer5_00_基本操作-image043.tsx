import React, { useState } from 'react';

type PrintOptions = '印刷' | 'プレビュー' | 'PDF' | 'CSV';

interface PrintDialogProps {
  initialOption?: PrintOptions;
  copies?: number;
  onConfirm: (option: PrintOptions, copies: number) => void;
  onCancel: () => void;
}

const PrintDialog: React.FC<PrintDialogProps> = ({
  initialOption = '印刷',
  copies = 1,
  onConfirm,
  onCancel,
}) => {
  const [selectedOption, setSelectedOption] = useState<PrintOptions>(initialOption);
  const [copyCount, setCopyCount] = useState<number>(copies);

  return (
    <div className="max-w-xs p-4 border rounded bg-white shadow-lg">
      <div className="mb-4">
        <label className="font-semibold">印刷機能選択</label>
        <div className="ml-4 mt-2">
          {['印刷', 'プレビュー', 'PDF', 'CSV'].map((option) => (
            <div key={option}>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="printOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option as PrintOptions)}
                  className="form-radio"
                />
                <span className="ml-2">{option}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="font-semibold">部数</label>
        <input
          type="number"
          value={copyCount}
          onChange={(e) => setCopyCount(Number(e.target.value))}
          min={1}
          className="border rounded px-2 ml-2"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => onConfirm(selectedOption, copyCount)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
