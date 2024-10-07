// NextYearMasterCreation.tsx
import React from 'react';

// TypeScript interface for props
interface NextYearMasterCreationProps {
  year: string;
  onCopyBasicInfoChange: (checked: boolean) => void;
  isBasicInfoOnly: boolean;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
}

// Tailwind CSS is used for styling
const NextYearMasterCreation: React.FC<NextYearMasterCreationProps> = ({
  year,
  onCopyBasicInfoChange,
  isBasicInfoOnly,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg">
      <h1 className="text-xl font-bold mb-4">次年度マスタ作成</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">年:</span>
        <span className="font-semibold">{year}</span>
      </div>
      <p className="mb-4">年度のマスタ内容を翌年度に複写します。</p>
      <div className="border rounded p-2 mb-4">
        <h2 className="font-bold">対象</h2>
        <div className="flex justify-between">
          <ul className="list-disc pl-4">
            <li>用語マスタ</li>
            <li>格付指針</li>
            <li>契約管理区分種別名称マスタ</li>
            <li>契約管理区分名称マスタ</li>
            <li>所属別受付</li>
            <li>契約状況欄マスタ</li>
            <li>契約決裁合議者マスタ</li>
          </ul>
          <ul className="list-disc pl-4">
            <li>業者マスタ</li>
            <li>業者別営業所マスタ</li>
            <li>相手先リンクマスタ</li>
            <li>業者職員マスタ</li>
            <li>注記種別名称マスタ</li>
            <li>注記名称マスタ</li>
            <li>業者注記マスタ</li>
            <li>業者別業種マスタ</li>
            <li>業者別業種明細マスタ</li>
            <li>物品明細マスタ</li>
            <li>業者経歴</li>
            <li>指名停止履歴</li>
            <li>JV構成マスタ</li>
            <li>業者別経審</li>
          </ul>
        </div>
        <div className="mt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={isBasicInfoOnly}
              onChange={(e) => onCopyBasicInfoChange(e.target.checked)}
            />
            <span className="ml-2">基本情報のみ複写する</span>
          </label>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        ※何回でも実行可能です。ただし、前回の次年度マスタ作成処理後に行った変更内容は削除されますので、注意してください。
      </p>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCloseClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default NextYearMasterCreation;
```