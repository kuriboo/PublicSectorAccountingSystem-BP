```tsx
import React from 'react';

type UpdateFormProps = {
  updateDate: string;
  section: string;
  assetNumber: string;
  assetName: string;
  location: string;
  summary: string;
  depreciationBefore: number;
  depreciationAfter: number;
  annualDepreciationAfter: number;
  onPrevious: () => void;
  onNext: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const UpdateForm: React.FC<UpdateFormProps> = ({
  updateDate,
  section,
  assetNumber,
  assetName,
  location,
  summary,
  depreciationBefore,
  depreciationAfter,
  annualDepreciationAfter,
  onPrevious,
  onNext,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">法改正対応耐用年数変更</h1>

      <div className="mb-4">
        <label>変更年月日:</label>
        <input type="text" className="ml-2 border-b-2" value={updateDate} readOnly />
      </div>

      <div className="mb-4">
        <label>節:</label>
        <input type="text" className="ml-2 border-b-2" value={section} readOnly />
      </div>

      <div className="mb-4">
        <label>資産番号:</label>
        <input type="text" className="ml-2 border-b-2" value={assetNumber} readOnly />
      </div>

      <div className="mb-4">
        <label>資産名称:</label>
        <input type="text" className="ml-2 border-b-2" value={assetName} readOnly />
      </div>

      <div className="mb-4">
        <label>所在地:</label>
        <input type="text" className="ml-2 border-b-2" value={location} readOnly />
      </div>

      <div className="mb-4">
        <label>摘要:</label>
        <input type="text" className="ml-2 border-b-2" value={summary} readOnly />
      </div>

      <div className="flex justify-between mb-6">
        <div>
          <h2 className="font-semibold mb-2">訂正前</h2>
          <div><label>年間償却額: </label><span>{depreciationBefore}</span></div>
        </div>
        <div>
          <h2 className="font-semibold mb-2">訂正後</h2>
          <div><label>年間償却額: </label><span>{depreciationAfter}</span></div>
          <div><label>年間償却: </label><span>{annualDepreciationAfter}</span></div>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={onPrevious} className="px-4 py-2 bg-blue-500 text-white rounded">前データ</button>
        <button onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded">次データ</button>
        <button onClick={onOk} className="px-4 py-2 bg-green-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-black rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
}

export default UpdateForm;
```