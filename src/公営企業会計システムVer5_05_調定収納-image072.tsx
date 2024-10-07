// ReceiptForm.tsx

import React from 'react';

type Props = {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReceiptForm: React.FC<Props> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">収入伝票（単票）作成</h2>
      
      <div className="mb-4">
        <label className="block font-medium">
          収納日
        </label>
        <div className="flex space-x-2">
          <input type="date" className="border rounded p-1" />
          <span>〜</span>
          <input type="date" className="border rounded p-1" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          伝票範囲
        </label>
        <div className="flex space-x-2 items-center">
          <input type="text" placeholder="0000000" className="border rounded p-1" />
          <span>〜</span>
          <input type="text" placeholder="9999999" className="border rounded p-1" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          伝票種類
        </label>
        <div className="space-x-2">
          <label><input type="checkbox" />個別</label>
          <label><input type="checkbox" />前受</label>
          <label><input type="checkbox" />集合</label>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block font-medium">
          伝票番号
        </label>
        <div className="space-x-2">
          <label><input type="radio" name="number" />指定しない</label>
          <label><input type="radio" name="number" />指定する</label>
          <div className="flex space-x-2">
            <input type="number" placeholder="0" className="border rounded p-1" />
            <span>〜</span>
            <input type="number" placeholder="999999" className="border rounded p-1" />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          電子決裁
        </label>
        <div className="space-x-2">
          <label><input type="radio" name="approval" />連携する</label>
          <label><input type="radio" name="approval" />連携しない</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          連携ステータス
        </label>
        <div className="space-y-2">
          <label><input type="checkbox" />未連携</label>
          <label><input type="checkbox" />連携済み (決裁中)</label>
          <label><input type="checkbox" />決裁完了</label>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReceiptForm;
```