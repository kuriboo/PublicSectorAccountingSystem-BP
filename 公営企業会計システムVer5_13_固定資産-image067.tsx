```tsx
import React from 'react';

// Type definitions for component props
interface AccountingSystemProps {
  fiscalYear: string;
  assetCategoryFrom: string;
  assetCategoryTo: string;
  assetNumberFrom: string;
  assetNumberTo: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  fiscalYear,
  assetCategoryFrom,
  assetCategoryTo,
  assetNumberFrom,
  assetNumberTo,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">債却計算解除</h2>

      {/* Fiscal Year */}
      <div className="mt-4">
        <label className="block font-semibold">債却計算年度</label>
        <p>{fiscalYear}</p>
      </div>

      {/* Range Specification */}
      <div className="mt-4 border p-4">
        <h3 className="font-semibold">範囲指定</h3>
        <div className="flex items-center mt-2">
          <label className="mr-2">固定資産科目</label>
          <input
            type="text"
            value={assetCategoryFrom}
            className="border p-1 mr-2"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={assetCategoryTo}
            className="border p-1 ml-2"
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <label className="mr-2">資産番号</label>
          <input
            type="text"
            value={assetNumberFrom}
            className="border p-1 mr-2"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={assetNumberTo}
            className="border p-1 ml-2"
            readOnly
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h3 className="font-semibold">処理概要</h3>
        <p className="text-sm">
          各資産について、指定した年度の債却計算を解除します。
          当年度に減損処理を行った資産については、債却解除できません。
          該当資産の債却解除を行いたい場合は、先に減損登録内容を削除してください。
        </p>
      </div>

      {/* Buttons */}
      <div className="flex mt-4 space-x-2">
        <button className="bg-gray-200 py-1 px-4 rounded" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-200 py-1 px-4 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-200 py-1 px-4 rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingSystem;
```