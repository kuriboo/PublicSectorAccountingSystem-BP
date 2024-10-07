import React from 'react';

// 型定義
type VoucherProps = {
  issueDateStart: string;
  issueDateEnd: string;
  rangeStart: string;
  rangeEnd: string;
  budgetType: '予算所属' | '起案所属';
  divisionType: '振替分' | '調定分' | '支払分' | '決算仕訳分';
  issueCategory: '新規' | '再発行';
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const VoucherComponent: React.FC<VoucherProps> = ({
  issueDateStart,
  issueDateEnd,
  rangeStart,
  rangeEnd,
  budgetType,
  divisionType,
  issueCategory,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h1 className="text-xl font-bold mb-4">振替伝票（一覧）作成</h1>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">振替日：</label>
          <input type="date" value={issueDateStart} className="border rounded p-1 mr-2" />
          <span>~</span>
          <input type="date" value={issueDateEnd} className="border rounded p-1 ml-2" />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">範囲：</label>
          <input type="text" value={rangeStart} className="border rounded p-1 mr-2 w-24" />
          <span>~</span>
          <input type="text" value={rangeEnd} className="border rounded p-1 ml-2 w-24" />
        </div>
        <div className="flex mb-2">
          <label className="mr-2">所属：</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" checked={budgetType === '予算所属'} readOnly /> 予算所属
            </label>
            <label>
              <input type="radio" checked={budgetType === '起案所属'} readOnly /> 起案所属
            </label>
          </div>
        </div>
        <div className="flex mb-2">
          <label className="mr-2">区分：</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" checked={divisionType === '振替分'} readOnly /> 振替分
            </label>
            <label>
              <input type="radio" checked={divisionType === '調定分'} readOnly /> 調定分
            </label>
            <label>
              <input type="radio" checked={divisionType === '支払分'} readOnly /> 支払分
            </label>
            <label>
              <input type="radio" checked={divisionType === '決算仕訳分'} readOnly /> 決算仕訳分
            </label>
          </div>
        </div>
        <div className="flex mb-4">
          <label className="mr-2">発行区分：</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" checked={issueCategory === '新規'} readOnly /> 新規
            </label>
            <label>
              <input type="radio" checked={issueCategory === '再発行'} readOnly /> 再発行
            </label>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default VoucherComponent;
```