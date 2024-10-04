```tsx
import React from 'react';

// Define types for component props
type IchijiShikinFormProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

const IchijiShikinForm: React.FC<IchijiShikinFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <form className="p-4 bg-white shadow-md rounded">
      {/* 相手先情報 */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">相手先情報</h2>
        <label className="block">
          名称
          <input type="text" className="border rounded w-full p-2" />
        </label>
        <label className="block">
          略名
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
        <label className="block">
          郵便番号
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
        <label className="block">
          住所
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
        <label className="block">
          電話番号
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
        <label className="block">
          FAX番号
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
      </div>

      {/* 振込先銀行情報 */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">振込先銀行情報</h2>
        <label className="block">
          銀行
          <input type="text" className="border rounded w-full p-2" />
        </label>
        <label className="block">
          支店
          <input type="text" className="border rounded w-full p-2 mt-2" />
        </label>
        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span>銀行支店名を印字しない</span>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span>預金種別・口座名義を印字しない</span>
        </div>
        <label className="block mt-2">
          預金種別
          <select className="border rounded w-full p-2">
            <option>選択してください</option>
          </select>
        </label>
        <label className="block mt-2">
          口座番号
          <input type="text" className="border rounded w-full p-2" />
        </label>
        <label className="block mt-2">
          口座名義人
          <input type="text" className="border rounded w-full p-2" />
        </label>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          type="button"
          className="bg-gray-200 text-black px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default IchijiShikinForm;
```