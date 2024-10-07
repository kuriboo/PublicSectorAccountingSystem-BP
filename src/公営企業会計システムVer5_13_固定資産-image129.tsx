// components/LandDetailForm.tsx

import React from 'react';

// TypeScript type definitions for props
type LandDetailFormProps = {
  assetNumber: string;
  assetName: string;
  registrationNumber: string;
  branchNumber: string;
  acquisitionDate: string;
  acquisitionPlaceName: string;
  lotNumber: string;
  siteNumber: string;
  registrationDate: string;
  publicArea: number;
  measuredArea: number;
  transferValue: string;
  summary: string;
  formerOwnerName: string;
  formerOwnerAddress: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const LandDetailForm: React.FC<LandDetailFormProps> = ({
  assetNumber,
  assetName,
  registrationNumber,
  branchNumber,
  acquisitionDate,
  acquisitionPlaceName,
  lotNumber,
  siteNumber,
  registrationDate,
  publicArea,
  measuredArea,
  transferValue,
  summary,
  formerOwnerName,
  formerOwnerAddress,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">異動土地明細</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>資産番号: </label>
          <span>{assetNumber}</span>
        </div>
        <div>
          <label>資産名称: </label>
          <span>{assetName}</span>
        </div>
        <div>
          <label>整理番号: </label>
          <span>{registrationNumber}</span>
        </div>
        <div>
          <label>枝番: </label>
          <span>{branchNumber}</span>
        </div>
        <div>
          <label>異動年月日: </label>
          <span>{acquisitionDate}</span>
        </div>
        <div>
          <label>取得地名称: </label>
          <span>{acquisitionPlaceName}</span>
        </div>
        <div>
          <label>地番: </label>
          <span>{lotNumber}</span>
        </div>
        <div>
          <label>地目: </label>
          <span>{siteNumber}</span>
        </div>
        <div>
          <label>登記年月日: </label>
          <span>{registrationDate}</span>
        </div>
        <div>
          <label>公図面積: </label>
          <span>{publicArea}</span>
        </div>
        <div>
          <label>実測面積: </label>
          <span>{measuredArea}</span>
        </div>
        <div>
          <label>異動価格: </label>
          <span>{transferValue}</span>
        </div>
        <div>
          <label>摘要: </label>
          <span>{summary}</span>
        </div>
        <div>
          <label>元所有者氏名: </label>
          <span>{formerOwnerName}</span>
        </div>
        <div>
          <label>元所有者住所: </label>
          <span>{formerOwnerAddress}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button 
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default LandDetailForm;
