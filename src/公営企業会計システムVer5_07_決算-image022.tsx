import React from 'react';

type ReportFormProps = {
  reportDate: string; // 作表日
  size: 'A4横' | 'A4縦'; // サイズ
  title: string; // タイトル
  includePageNumbers: boolean; // 頁印字
  startPage: number; // 開始頁
  onSubmit: () => void; // OKボタンのコールバック
  onClear: () => void; // クリアボタンのコールバック
  onClose: () => void; // 終了ボタンのコールバック
};

const ReportForm: React.FC<ReportFormProps> = ({
  reportDate,
  size,
  title,
  includePageNumbers,
  startPage,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form className="bg-white p-4 max-w-md mx-auto rounded-md shadow-sm space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">作表日</label>
        <input
          type="text"
          value={reportDate}
          readOnly
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700">サイズ</span>
        <div className="mt-1 flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              checked={size === 'A4横'}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">A4 横</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={size === 'A4縦'}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">A4 縦</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">タイトル</label>
        <input
          type="text"
          value={title}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700">頁印字</span>
        <div className="mt-1 flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              checked={includePageNumbers}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">する</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={!includePageNumbers}
              readOnly
              className="form-radio"
            />
            <span className="ml-2">しない</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">開始頁</label>
        <input
          type="number"
          value={startPage}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
