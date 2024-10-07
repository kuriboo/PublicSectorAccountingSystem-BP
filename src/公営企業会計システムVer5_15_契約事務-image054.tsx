import React from 'react';

// 型定義
type ContractChangeInputProps = {
  fiscalYear: number;
  acceptanceNumber: string;
  businessType: string;
  contractor: string;
  projectName: string;
  location: string;
  contractDate: string;
  provisionalDate: string;
  approvalDate: string;
  beforeTaxAmount: number;
  afterTaxAmount: number;
  requestTaxAmount: number;
  startYearMonth: string;
  period: number;
  extension: boolean;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ContractChangeInput: React.FC<ContractChangeInputProps> = ({
  fiscalYear,
  acceptanceNumber,
  businessType,
  contractor,
  projectName,
  location,
  contractDate,
  provisionalDate,
  approvalDate,
  beforeTaxAmount,
  afterTaxAmount,
  requestTaxAmount,
  startYearMonth,
  period,
  extension,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">契約変更入力</h1>
      <div className="grid gap-4">
        <div>
          <label className="block text-sm">年度</label>
          <span>{fiscalYear}</span>
        </div>
        <div>
          <label className="block text-sm">受付番号</label>
          <span>{acceptanceNumber}</span>
        </div>
        <div>
          <label className="block text-sm">業種</label>
          <span>{businessType}</span>
        </div>
        <div>
          <label className="block text-sm">業者名</label>
          <span>{contractor}</span>
        </div>
        <div>
          <label className="block text-sm">件名</label>
          <span>{projectName}</span>
        </div>
        <div>
          <label className="block text-sm">工事場所</label>
          <span>{location}</span>
        </div>
        <div>
          <label className="block text-sm">契約日</label>
          <span>{contractDate}</span>
        </div>
        <div>
          <label className="block text-sm">仮契約日</label>
          <span>{provisionalDate}</span>
        </div>
        <div>
          <label className="block text-sm">議会承認日</label>
          <span>{approvalDate}</span>
        </div>
        <div>
          <label className="block text-sm">設計額変更前</label>
          <span>{beforeTaxAmount}</span>
        </div>
        <div>
          <label className="block text-sm">設計額変更後</label>
          <span>{afterTaxAmount}</span>
        </div>
        <div>
          <label className="block text-sm">契約額請負率</label>
          <span>{requestTaxAmount}</span>
        </div>
        <div>
          <label className="block text-sm">着手年月日</label>
          <span>{startYearMonth}</span>
        </div>
        <div>
          <label className="block text-sm">期間</label>
          <span>{period}</span>
        </div>
        <div>
          <label className="block text-sm">延長</label>
          <span>{extension ? '有' : '無'}</span>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onConfirm}>
          OK
        </button>
        <button className="bg-gray-300 py-2 px-4 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-300 py-2 px-4 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default ContractChangeInput;
