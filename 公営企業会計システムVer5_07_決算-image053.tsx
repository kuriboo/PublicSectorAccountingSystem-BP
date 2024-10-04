```tsx
import React from 'react';

type FormProps = {
  title: string;
  startDate: string;
  endDate: string;
  size: 'A4 Horizontal' | 'A4 Vertical';
  hasPageNumber: boolean;
  startPage: number;
  note: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountingForm: React.FC<FormProps> = ({
  title,
  startDate,
  endDate,
  size,
  hasPageNumber,
  startPage,
  note,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">決算損益計算書</h1>
      <div className="mb-4">
        <label className="block font-medium">会計期間</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            className="border rounded p-2 flex-1"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            className="border rounded p-2 flex-1"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">サイズ</label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              value="A4 横"
              checked={size === 'A4 Horizontal'}
              readOnly
            />{' '}
            A4 横
          </label>
          <label>
            <input
              type="radio"
              value="A4 縦"
              checked={size === 'A4 Vertical'}
              readOnly
            />{' '}
            A4 縦
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">タイトル</label>
        <input
          type="text"
          value={title}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">頁印字</label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              value="する"
              checked={hasPageNumber}
              readOnly
            />{' '}
            する
          </label>
          <label>
            <input
              type="radio"
              value="しない"
              checked={!hasPageNumber}
              readOnly
            />{' '}
            しない
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">開始頁</label>
        <input
          type="number"
          value={startPage}
          className="border rounded p-2 w-20"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">処理概要</label>
        <textarea
          value={note}
          className="border rounded p-2 w-full"
          readOnly
          rows={3}
        ></textarea>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```