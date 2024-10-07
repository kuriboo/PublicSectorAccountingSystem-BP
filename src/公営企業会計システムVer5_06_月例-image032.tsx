import React from 'react';

// TypeScriptの型定義
type AccountingFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネントの定義
const AccountingForm: React.FC<AccountingFormProps> = ({ onSubmit, onClear, onClose }) => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">MAD8440 月次合計残高試算表作成</h1>
      <div className="border p-4 mb-4">
        <h2 className="font-bold">範囲指定</h2>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="date" value="point" /> 集計日付
          </label>
          <input type="text" className="border px-2 py-1" placeholder="令和05年09月20日" />
        </div>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="date" value="range" /> 期間
          </label>
          <input type="text" className="border px-2 py-1 mr-2" placeholder="令和05年04月01日" />
          <span>～</span>
          <input type="text" className="border px-2 py-1 ml-2" placeholder="令和06年03月31日" />
        </div>
        <div className="mb-4">
          <span>決算仕様</span>
          <label className="ml-2">
            <input type="radio" name="spec" value="include" /> 含む
          </label>
          <label className="ml-2">
            <input type="radio" name="spec" value="exclude" /> 含まない
          </label>
        </div>
        <div className="mb-4">
          <span>前掛け</span>
          <label className="ml-2">
            <input type="radio" name="carry" value="do" /> する
          </label>
          <label className="ml-2">
            <input type="radio" name="carry" value="do-not" /> しない
          </label>
        </div>
        <div className="mb-4">
          <span>集計対象</span>
          <label className="ml-2">
            <input type="radio" name="target" value="all" /> 全体
          </label>
          <label className="ml-2">
            <input type="radio" name="target" value="block" /> ブロック
          </label>
          <label className="ml-2">
            <input type="radio" name="target" value="segment" /> セグメント
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input type="text" className="border px-2 py-1" />
          <input type="text" className="border px-2 py-1" />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default AccountingForm;
```