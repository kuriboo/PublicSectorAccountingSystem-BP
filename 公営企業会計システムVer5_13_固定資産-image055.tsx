```tsx
import React from 'react';

type ExtractionChecklistProps = {
  date: string;
  managementNumberStart: string;
  managementNumberEnd: string;
  fixedAssetCategoryStart: string;
  fixedAssetCategoryEnd: string;
  departmentStart: string;
  departmentEnd: string;
  acquisitionYearStart: string;
  acquisitionYearEnd: string;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const ExtractionChecklist: React.FC<ExtractionChecklistProps> = ({
  date,
  managementNumberStart,
  managementNumberEnd,
  fixedAssetCategoryStart,
  fixedAssetCategoryEnd,
  departmentStart,
  departmentEnd,
  acquisitionYearStart,
  acquisitionYearEnd,
  onOk,
  onClear,
  onFinish
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">抽出処理チェックリスト作成</h2>
      <div className="mb-4">
        <span className="font-semibold">作表年月日: </span>{date}
      </div>
      <div className="mb-4">
        <div className="font-semibold">範囲指定</div>
        <div className="flex items-center">
          <span>管理番号: </span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={managementNumberStart}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={managementNumberEnd}
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <span>固定資産種目: </span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={fixedAssetCategoryStart}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={fixedAssetCategoryEnd}
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <span>部門: </span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={departmentStart}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={departmentEnd}
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <span>取得年度: </span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={acquisitionYearStart}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border mx-2 p-1"
            value={acquisitionYearEnd}
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOk} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 py-1 px-4 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ExtractionChecklist;
```