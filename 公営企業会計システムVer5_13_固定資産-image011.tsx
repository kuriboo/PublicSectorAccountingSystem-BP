```tsx
import React from 'react';

// タイプ定義
type FormComponentProps = {
  dateCreated: string;
  dateAcquired: string;
  assetCategoryStart: string;
  assetCategoryEnd: string;
  assetNumberStart: number;
  assetNumberEnd: number;
  detailsIncluded: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  dateCreated,
  dateAcquired,
  assetCategoryStart,
  assetCategoryEnd,
  assetNumberStart,
  assetNumberEnd,
  detailsIncluded,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">取得改良一覧表作成</h1>

      <div className="mt-4">
        <label className="block mb-1">作表年月日</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={dateCreated}
          readOnly
        />
      </div>

      <div className="mt-4">
        <p className="mb-2">作表区分</p>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              checked={detailsIncluded}
              readOnly
            />{' '}
            詳細印字有り
          </label>
          <label>
            <input
              type="radio"
              checked={!detailsIncluded}
              readOnly
            />{' '}
            詳細印字無し
          </label>
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2">範囲指定</p>
        
        <div className="flex mb-2">
          <label className="flex-1 mr-4">
            固定資産科目
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={assetCategoryStart}
              readOnly
            />
          </label>
          <span>~</span>
          <label className="flex-1 ml-4">
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={assetCategoryEnd}
              readOnly
            />
          </label>
        </div>

        <div className="flex mb-2">
          <label className="flex-1 mr-4">
            資産番号
            <input
              type="number"
              className="border rounded p-2 w-full"
              value={assetNumberStart}
              readOnly
            />
          </label>
          <span>~</span>
          <label className="flex-1 ml-4">
            <input
              type="number"
              className="border rounded p-2 w-full"
              value={assetNumberEnd}
              readOnly
            />
          </label>
        </div>

        <div className="flex mb-4">
          <label className="flex-1">
            取得年月日
            <input
              type="text"
              className="border rounded p-2 w-full"
              value={dateAcquired}
              readOnly
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```