```tsx
import React from 'react';

type AssetFormProps = {
  initialDate: string;
  endDate: string;
  assetClassFrom: number;
  assetClassTo: number;
  assetNumberFrom: number;
  assetNumberTo: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  initialDate,
  endDate,
  assetClassFrom,
  assetClassTo,
  assetNumberFrom,
  assetNumberTo,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-xl mb-4">固定資産現況表作成</h1>
      <div className="mb-4">
        <label className="block text-gray-700">作表年月日:</label>
        <div className="py-2">{initialDate}</div>
      </div>
      <div className="border bg-white p-4 rounded">
        <h2 className="text-lg mb-2">範囲指定</h2>
        <div className="mb-4">
          <label className="block text-gray-700">固定資産科目:</label>
          <div className="flex gap-2">
            <input
              type="text"
              defaultValue={assetClassFrom}
              className="p-2 border rounded"
            />
            <span>～</span>
            <input
              type="text"
              defaultValue={assetClassTo}
              className="p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">資産番号:</label>
          <div className="flex gap-2">
            <input
              type="text"
              defaultValue={assetNumberFrom}
              className="p-2 border rounded"
            />
            <span>～</span>
            <input
              type="text"
              defaultValue={assetNumberTo}
              className="p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">取得年月日:</label>
          <div className="flex gap-2">
            <input type="text" defaultValue={initialDate} className="p-2 border rounded" />
            <span>～</span>
            <input type="text" defaultValue={endDate} className="p-2 border rounded" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default AssetForm;
```