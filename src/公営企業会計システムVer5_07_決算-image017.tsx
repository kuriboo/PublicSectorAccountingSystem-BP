import React from 'react';

// 型定義
type ReportFormProps = {
  reportDate: string;
  title: string;
  startPage: number;
  onTitleChange: (title: string) => void;
  onStartPageChange: (page: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  reportDate,
  title,
  startPage,
  onTitleChange,
  onStartPageChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">決算貸借対照表</h1>
      <div className="mb-4">
        <label className="block text-gray-700">作表日</label>
        <input 
          type="text" 
          value={reportDate} 
          readOnly 
          className="mt-1 w-full bg-gray-100 border border-gray-300 rounded p-2" 
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">サイズ</span>
        <label className="mr-4">
          <input type="radio" name="size" value="A4_Yoko" className="mr-1" />
          A4 横
        </label>
        <label>
          <input type="radio" name="size" value="A4_Tate" className="mr-1" />
          A4 縦
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">タイトル</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded p-2" 
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">頁印字</span>
        <label className="mr-4">
          <input type="radio" name="printPage" value="Yes" className="mr-1" />
          する
        </label>
        <label>
          <input type="radio" name="printPage" value="No" className="mr-1" />
          しない
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">開始頁</label>
        <input 
          type="number" 
          value={startPage} 
          onChange={(e) => onStartPageChange(Number(e.target.value))}
          className="mt-1 w-20 border border-gray-300 rounded p-2"
        />
      </div>
      <div className="text-center mt-6 space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```