```tsx
import React from 'react';

type DocumentFormProps = {
  fiscalYear: number;
  edition: number;
  calculationType: 'estimate' | 'fixed';
  size: 'A4 Horizontal' | 'A4 Vertical';
  title: string;
  subtitle: string;
  columnTitle: string;
  paginate: boolean;
  startPage: number;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const DocumentForm: React.FC<DocumentFormProps> = ({
  fiscalYear,
  edition,
  calculationType,
  size,
  title,
  subtitle,
  columnTitle,
  paginate,
  startPage,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <form className="p-4 border rounded shadow-md">
      {/* Fiscal Year and Edition */}
      <div className="mb-4">
        <label className="block mb-1">年度</label>
        <input type="number" value={fiscalYear} className="border p-2" />
        <label className="ml-4">回</label>
        <input type="number" value={edition} className="border p-2" />
      </div>

      {/* Calculation Type */}
      <div className="mb-4">
        <label className="block mb-1">自動仕訳情報</label>
        <label>
          <input type="radio" checked={calculationType === 'estimate'} /> 見積要求額
        </label>
        <label className="ml-4">
          <input type="radio" checked={calculationType === 'fixed'} /> 査定額
        </label>
      </div>

      {/* Document Format */}
      <div className="mb-4">
        <label className="block mb-1">書式</label>
        <div>
          <label>
            <input type="radio" checked={size === 'A4 Horizontal'} /> A4 横
          </label>
          <label className="ml-4">
            <input type="radio" checked={size === 'A4 Vertical'} /> A4 縦
          </label>
        </div>
        <div className="mt-2">
          <label>タイトル</label>
          <input type="text" value={title} className="border p-2 w-full" />
        </div>
        <div className="mt-2">
          <label>サブタイトル</label>
          <input type="text" value={subtitle} className="border p-2 w-full" />
        </div>
        <div className="mt-2">
          <label>柱タイトル</label>
          <input type="text" value={columnTitle} className="border p-2 w-full" />
        </div>
      </div>

      {/* Pagination */}
      <div className="mb-4">
        <label className="block mb-1">頁印字</label>
        <label>
          <input type="radio" checked={paginate} /> する
        </label>
        <label className="ml-4">
          <input type="radio" checked={!paginate} /> しない
        </label>
        <div className="mt-2">
          <label>開始頁</label>
          <input type="number" value={startPage} className="border p-2" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">OK</button>
        <button type="button" onClick={onClear} className="bg-gray-500 text-white px-4 py-2 mr-2 rounded">クリア</button>
        <button type="button" onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </form>
  );
};

export default DocumentForm;
```