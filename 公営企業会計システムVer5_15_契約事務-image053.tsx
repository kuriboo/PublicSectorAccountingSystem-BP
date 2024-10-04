```tsx
// ContractForm.tsx
import React from 'react';

// 型定義
type ContractFormProps = {
  fiscalYear: string;
  requestNumber: string;
  businessType: string;
  receptionCategory: string;
  contractor: string;
  item1: string;
  item2?: string;
  constructionName: string;
  constructionLocation: string;
  hasCouncilApproval: boolean;
  contractDate: string;
  contractAmountWithTax: number;
  contractAmountWithoutTax: number;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  fiscalYear,
  requestNumber,
  businessType,
  receptionCategory,
  contractor,
  item1,
  item2,
  constructionName,
  constructionLocation,
  hasCouncilApproval,
  contractDate,
  contractAmountWithTax,
  contractAmountWithoutTax,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">本契約締結入力</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>年度:</label> {fiscalYear}
        </div>
        <div>
          <label>受付番号:</label> {requestNumber}
        </div>
        <div>
          <label>業種:</label> {businessType}
        </div>
        <div>
          <label>受付区分:</label> {receptionCategory}
        </div>
        <div>
          <label>請負業者:</label> {contractor}
        </div>
        <div>
          <label>件名1:</label> {item1}
        </div>
        {item2 && (
          <div>
            <label>件名2:</label> {item2}
          </div>
        )}
        <div>
          <label>工事名:</label> {constructionName}
        </div>
        <div>
          <label>工事場所:</label> {constructionLocation}
        </div>
        <div>
          <label>議会承認:</label>
          {hasCouncilApproval ? '可決' : '否決'}
        </div>
        <div>
          <label>契約日:</label> {contractDate}
        </div>
        <div>
          <label>契約金額(税込):</label> {contractAmountWithTax.toLocaleString()}
        </div>
        <div>
          <label>契約金額(税抜):</label> {contractAmountWithoutTax.toLocaleString()}
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
}

export default ContractForm;
```