```tsx
import React from 'react';

interface FormProps {
  fiscalYear?: string;
  budgetDivision?: number;
  times?: number;
  typeOfMoney?: string;
  createdDate?: string;
  paperSize?: 'A4横' | 'A4縦';
  title?: string;
  subtitle?: string;
  headerTitle?: string;
  startPage?: number;
  onSave?: () => void;
  onClear?: () => void;
  onFinish?: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  fiscalYear = '令和003',
  budgetDivision = 3,
  times = 1,
  typeOfMoney = '見積要求',
  createdDate = '令和03年11月01日',
  paperSize = 'A4横',
  title = '',
  subtitle = '',
  headerTitle = '',
  startPage = 1,
  onSave,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* 自動仕訳情報 */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">自動仕訳情報</h2>
        <div>
          <label>年度: </label>
          <input type="text" value={fiscalYear} disabled className="border rounded p-2" />
        </div>
        <div>
          <label>予算細区分: </label>
          <input type="number" value={budgetDivision} disabled className="border rounded p-2" />
        </div>
        <div>
          <label>回数: </label>
          <input type="number" value={times} disabled className="border rounded p-2" />
        </div>
        <div>
          <label>金額種別: </label>
          <input type="text" value={typeOfMoney} disabled className="border rounded p-2" />
        </div>
      </div>

      {/* 作表日 */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">作表日</h2>
        <input type="text" value={createdDate} disabled className="border rounded p-2" />
      </div>

      {/* 書式 */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">書式</h2>
        <div>
          <label>サイズ: </label>
          <select value={paperSize} className="border rounded p-2">
            <option value="A4横">A4 横</option>
            <option value="A4縦">A4 縦</option>
          </select>
        </div>
        <div>
          <label>タイトル: </label>
          <input type="text" value={title} className="border rounded p-2" />
        </div>
        <div>
          <label>サブタイトル: </label>
          <input type="text" value={subtitle} className="border rounded p-2" />
        </div>
        <div>
          <label>柱タイトル: </label>
          <input type="text" value={headerTitle} className="border rounded p-2" />
        </div>
        <div>
          <label>開始頁: </label>
          <input type="number" value={startPage} className="border rounded p-2" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button onClick={onSave} className="bg-blue-500 text-white p-2 rounded">
          Excel出力
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white p-2 rounded">
          クリア
        </button>
        <button onClick={onFinish} className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```