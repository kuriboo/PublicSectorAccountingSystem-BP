```tsx
import React from 'react';

type FixedAssetImportProps = {
  fiscalYear: string;
  exceptionMonth: string;
  filePath: string;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FixedAssetImport: React.FC<FixedAssetImportProps> = ({
  fiscalYear,
  exceptionMonth,
  filePath,
  onFileUpload,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 shadow-lg bg-white rounded-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">固定資産コンパート</h2>

      <div className="mb-2">
        <label className="font-semibold">当期会計年度: </label>
        <span>{fiscalYear}</span>
      </div>

      <div className="mb-2">
        <label className="font-semibold">異動年月日: </label>
        <span>{exceptionMonth}</span>
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">ファイル: </label>
        <input
          type="file"
          onChange={onFileUpload}
          className="border p-1 mr-2"
        />
        <span className="truncate">{filePath}</span>
      </div>

      <div className="bg-gray-100 p-4 border rounded-md text-sm">
        <ul className="list-disc list-inside">
          <li>固定資産情報をファイルから取込、登録を行います。</li>
          <li>ZIP圧縮されたファイルのみ取込めます。取込むファイルについては専用のEXCELファイル（原票）から作成してください。</li>
          <li>原票以外で作成、編集されたファイルを取込むとエラーとなります。</li>
          <li>異動年月日には当期会計年度の年月日を入力してください。</li>
          <li>コンバートするデータの異動年月日とは無関係で入力した異動年月日の日付で登録されます。</li>
        </ul>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default FixedAssetImport;
```