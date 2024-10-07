import React from 'react';

type PriceMasterListProps = {
  year: string;
  category: '所属別' | '単価コード';
  rangeStart: { category: number; price: number };
  rangeEnd: { category: number; price: number };
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const PriceMasterList: React.FC<PriceMasterListProps> = ({
  year,
  category,
  rangeStart,
  rangeEnd,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">単価マスタリスト作成</h1>
      
      {/* Yearly Selection */}
      <div className="mb-4">
        <label className="mr-2">年度: </label>
        <span>{year}</span>
      </div>

      {/* Category Radio Buttons */}
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" checked={category === '所属別'} readOnly /> 所属別
        </label>
        <label>
          <input type="radio" checked={category === '単価コード'} readOnly /> 単価コード
        </label>
      </div>

      {/* Range Specification */}
      <fieldset className="mb-4 border p-2">
        <legend className="px-2 font-bold">範囲指定</legend>
        
        {/* Range Start Input */}
        <div className="flex items-center mb-2">
          <label className="mr-2">所属</label>
          <input
            type="text"
            className="border rounded px-2 py-1 w-24"
            value={rangeStart.category.toString()}
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            className="border rounded px-2 py-1 w-24"
            defaultValue={rangeEnd.category.toString()}
            readOnly
          />
        </div>

        {/* Range End Input */}
        <div className="flex items-center">
          <label className="mr-2">単価</label>
          <input
            type="text"
            className="border rounded px-2 py-1 w-24"
            value={rangeStart.price.toString()}
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            className="border rounded px-2 py-1 w-24"
            defaultValue={rangeEnd.price.toString()}
            readOnly
          />
        </div>
      </fieldset>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onFinish}>
          終了
        </button>
      </div>
    </div>
  );
};

export default PriceMasterList;