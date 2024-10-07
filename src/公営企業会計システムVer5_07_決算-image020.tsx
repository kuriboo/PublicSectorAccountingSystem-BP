import React from 'react';

type Props = {
  startDate: string;
  endDate: string;
  size: 'A4横' | 'A4縦';
  title: string;
  showPageNumber: boolean;
  startPageNumber: number;
  remarks: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ProfitLossStatement: React.FC<Props> = ({
  startDate,
  endDate,
  size,
  title,
  showPageNumber,
  startPageNumber,
  remarks,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">決算損益計算書</h2>
      
      <div className="mb-4">
        <label className="block mb-2">会計期間</label>
        <input className="border rounded p-2 mr-2" type="text" value={startDate} readOnly />
        <span>〜</span>
        <input className="border rounded p-2 ml-2" type="text" value={endDate} readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">サイズ</label>
        <div>
          <label>
            <input type="radio" checked={size === 'A4横'} readOnly /> A4 横
          </label>
          <label className="ml-4">
            <input type="radio" checked={size === 'A4縦'} readOnly /> A4 縦
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">タイトル</label>
        <input className="w-full border rounded p-2" type="text" value={title} readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">頁印字</label>
        <div>
          <label>
            <input type="radio" checked={showPageNumber} readOnly /> する
          </label>
          <label className="ml-4">
            <input type="radio" checked={!showPageNumber} readOnly /> しない
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">開始頁</label>
        <input className="border rounded p-2" type="number" value={startPageNumber} readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">処理摘要</label>
        <textarea className="w-full border rounded p-2" value={remarks} readOnly />
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ProfitLossStatement;
```