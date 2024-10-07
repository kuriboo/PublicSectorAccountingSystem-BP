import React from 'react';
import { useState } from 'react';

type LandDetailsProps = {
  assetNumber: string;
  assetName: string;
  editDate: string;
  registerNumber: string;
  acquisitionPlaceName: string;
  district: string;
  lotNumber: string;
  registryDate: string;
  publicArea: string;
  measuredArea: string;
  acquisitionAmount: string;
  summary: string;
  formerOwnerName: string;
  formerOwnerAddress: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const LandDetails: React.FC<LandDetailsProps> = ({
  assetNumber,
  assetName,
  editDate,
  registerNumber,
  acquisitionPlaceName,
  district,
  lotNumber,
  registryDate,
  publicArea,
  measuredArea,
  acquisitionAmount,
  summary,
  formerOwnerName,
  formerOwnerAddress,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow-md bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold">土地明細編集</h2>
        <div className="flex justify-between">
          <span>資産番号: {assetNumber}</span>
          <span>資産名称: {assetName}</span>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="space-y-2">
        <div>
          <label>異動年月日</label>
          <input type="text" defaultValue={editDate} className="input" />
        </div>
        <div className="flex space-x-2">
          <div>
            <label>整理番号</label>
            <input type="text" defaultValue={registerNumber} className="input w-20" />
          </div>
          <div>
            <label>技番号</label>
            <input type="text" defaultValue={district} className="input w-20" />
          </div>
        </div>
        <div>
          <label>取得地名称</label>
          <input type="text" defaultValue={acquisitionPlaceName} className="input" />
        </div>
        <div className="flex space-x-2">
          <div>
            <label>地番</label>
            <input type="text" defaultValue={lotNumber} className="input" />
          </div>
          <div>
            <label>地目</label>
            <input type="text" defaultValue={district} className="input" />
          </div>
        </div>
        <div>
          <label>登記年月日</label>
          <input type="text" defaultValue={registryDate} className="input" />
        </div>
        <div className="flex space-x-2">
          <div>
            <label>公図面積</label>
            <input type="text" defaultValue={publicArea} className="input w-20" />
          </div>
          <div>
            <label>実測面積</label>
            <input type="text" defaultValue={measuredArea} className="input w-20" />
          </div>
        </div>
        <div>
          <label>異動価格</label>
          <input type="text" defaultValue={acquisitionAmount} className="input" />
        </div>
        <div>
          <label>摘要</label>
          <input type="text" defaultValue={summary} className="input" />
        </div>
        <div>
          <label>元所有者氏名</label>
          <input type="text" defaultValue={formerOwnerName} className="input" />
        </div>
        <div>
          <label>元所有者住所</label>
          <input type="text" defaultValue={formerOwnerAddress} className="input" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          行確定
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default LandDetails;
