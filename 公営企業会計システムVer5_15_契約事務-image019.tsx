import React from 'react';

// 型定義
interface FilterFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="p-6 bg-gray-50 border rounded-lg">
      <h1 className="text-lg font-bold mb-4">50音順業者名簿</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* 50音順 */}
        <div>
          <label className="block mb-1">50音順</label>
          <select className="border p-1 mr-2">
            <option>ア</option>
          </select>
          <span>~</span>
          <select className="border p-1 ml-2">
            <option>ワ</option>
          </select>
        </div>

        {/* 地区 */}
        <div>
          <label className="block mb-1">地区</label>
          <select className="border p-1 mr-2">
            <option>001: 市内</option>
          </select>
          <span>~</span>
          <select className="border p-1 ml-2">
            <option>001: 市内</option>
          </select>
        </div>

        {/* 変更届出日 */}
        <div>
          <label className="block mb-1">変更届出日</label>
          <input type="date" className="border p-1 mr-2" />
          <span>~</span>
          <input type="date" className="border p-1 ml-2" />
        </div>

        {/* 指名停止基準日 */}
        <div>
          <label className="block mb-1">指名停止基準日</label>
          <input type="date" className="border p-1 w-full" />
        </div>

        {/* 経審有効期限 */}
        <div>
          <label className="block mb-1">経審有効期限</label>
          <input type="date" className="border p-1 w-full" />
        </div>        
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 p-2 mx-1 rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 p-2 mx-1 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-300 p-2 mx-1 rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default FilterForm;