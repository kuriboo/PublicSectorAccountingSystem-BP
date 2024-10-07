import React from 'react';

// プロパティの型定義
interface RangeSelectorProps {
  storageLocationStart: string;
  storageLocationEnd: string;
  unitCodeStart: string;
  unitCodeEnd: string;
  targetMonthStart: string;
  targetMonthEnd: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

// コンポーネントの定義
const RangeSelector: React.FC<RangeSelectorProps> = ({
  storageLocationStart,
  storageLocationEnd,
  unitCodeStart,
  unitCodeEnd,
  targetMonthStart,
  targetMonthEnd,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl mb-4">貯蔵月別入出庫リスト作成</h1>
      
      <div className="border p-4 mb-4">
        <h2 className="text-lg mb-2">範囲指定</h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block">保管場所</label>
            <input 
              type="text" 
              value={storageLocationStart} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
          <div className="text-center">~</div>
          <div>
            <input 
              type="text" 
              value={storageLocationEnd} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block">単位コード</label>
            <input 
              type="text" 
              value={unitCodeStart} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
          <div className="text-center">~</div>
          <div>
            <input 
              type="text" 
              value={unitCodeEnd} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block">対象年月</label>
            <input 
              type="text" 
              value={targetMonthStart} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
          <div className="text-center">~</div>
          <div>
            <input 
              type="text" 
              value={targetMonthEnd} 
              className="w-full border p-2" 
              readOnly 
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">クリア</button>
        <button onClick={onExit} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">終了</button>
      </div>
    </div>
  );
};

export default RangeSelector;
```