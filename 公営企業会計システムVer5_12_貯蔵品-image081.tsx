```tsx
import React from 'react';

type InventoryFormProps = {
  yearMonth: string;
  locationStart: string;
  locationEnd: string;
  itemStart: string;
  itemEnd: string;
  categoryCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
  setYearMonth: (value: string) => void;
  setLocationStart: (value: string) => void;
  setLocationEnd: (value: string) => void;
  setItemStart: (value: string) => void;
  setItemEnd: (value: string) => void;
  setCategoryCode: (value: string) => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  yearMonth,
  locationStart,
  locationEnd,
  itemStart,
  itemEnd,
  categoryCode,
  onSubmit,
  onClear,
  onExit,
  setYearMonth,
  setLocationStart,
  setLocationEnd,
  setItemStart,
  setItemEnd,
  setCategoryCode,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Title */}
      <div className="text-lg font-bold text-purple-700 mb-4">
        分類別棚卸結果表
      </div>
      
      {/* Input Section */}
      <div className="mb-4 border p-4 rounded">
        <h3 className="font-semibold mb-2">棚卸結果表範囲入力</h3>
        <div className="flex flex-wrap space-y-2 text-sm">
          <div className="w-full md:w-1/2 flex items-center">
            <label className="mr-2">棚卸年月:</label>
            <input 
              type="text" 
              value={yearMonth} 
              onChange={(e) => setYearMonth(e.target.value)} 
              className="border rounded p-1 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <label className="mr-2">保管場所:</label>
            <input 
              type="text" 
              value={locationStart} 
              onChange={(e) => setLocationStart(e.target.value)} 
              className="border rounded p-1 w-full"
            />
            <span className="mx-2">~</span>
            <input 
              type="text" 
              value={locationEnd} 
              onChange={(e) => setLocationEnd(e.target.value)} 
              className="border rounded p-1 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <label className="mr-2">品番:</label>
            <input 
              type="text" 
              value={itemStart} 
              onChange={(e) => setItemStart(e.target.value)} 
              className="border rounded p-1 w-full"
            />
            <span className="mx-2">~</span>
            <input 
              type="text" 
              value={itemEnd} 
              onChange={(e) => setItemEnd(e.target.value)} 
              className="border rounded p-1 w-full"
            />
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="mb-4 border p-4 rounded">
        <h3 className="font-semibold mb-2">作表区分</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="radio" name="categoryType" className="mr-2" />大分類
          </label>
          <label className="flex items-center">
            <input type="radio" name="categoryType" className="mr-2" />中分類
          </label>
          <label className="flex items-center">
            <input type="radio" name="categoryType" className="mr-2" />小分類
          </label>
        </div>
        <div className="flex items-center mt-2">
          <label className="mr-2">分類コード:</label>
          <input 
            type="text" 
            value={categoryCode} 
            onChange={(e) => setCategoryCode(e.target.value)} 
            className="border rounded p-1 w-full"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black py-1 px-4 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 text-black py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default InventoryForm;
```