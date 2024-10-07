import React from 'react';

// TypeScriptの型定義
type BidResultInputProps = {
  fiscalYear: string;
  receiptNumber: string;
  projectName: string;
  location: string;
  bidResultsConfirmed: boolean;
  bidResult: string;
  numberOfBids: number;
  contractorName: string;
  totalAmount: {
    taxIncluded: number;
    taxExcluded: number;
    consumptionTax: number;
  };
  unitAmount: {
    taxIncluded: number;
    taxExcluded: number;
    consumptionTax: number;
  };
  contractDate: string;
  contractBond: number;
};

// コンポーネント定義
const BidResultInput: React.FC<BidResultInputProps> = ({
  fiscalYear,
  receiptNumber,
  projectName,
  location,
  bidResultsConfirmed,
  bidResult,
  numberOfBids,
  contractorName,
  totalAmount,
  unitAmount,
  contractDate,
  contractBond,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">入札結果入力</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>年度: {fiscalYear}</p>
          <p>受付番号: {receiptNumber}</p>
          <p>件名: {projectName}</p>
          <p>場所: {location}</p>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={bidResultsConfirmed} readOnly />
            入札結果確定
          </label>
          <p>入札結果: {bidResult}</p>
          <p>入札回数: {numberOfBids} 回</p>
          <p>落札業者: {contractorName}</p>
        </div>
      </div>
      <div className="mt-4 border-t pt-4">
        <h2 className="text-xl font-bold mb-2">落札金額</h2>
        <div className="grid grid-cols-3">
          <p>税込額: {totalAmount.taxIncluded.toLocaleString()}</p>
          <p>税抜額: {totalAmount.taxExcluded.toLocaleString()}</p>
          <p>消費税額: {totalAmount.consumptionTax.toLocaleString()}</p>
        </div>
        <h2 className="text-xl font-bold mt-4 mb-2">落札単価金額</h2>
        <div className="grid grid-cols-3">
          <p>税込額: {unitAmount.taxIncluded.toLocaleString()}</p>
          <p>税抜額: {unitAmount.taxExcluded.toLocaleString()}</p>
          <p>消費税額: {unitAmount.consumptionTax.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>契約年月日: {contractDate}</p>
        <p>契約保証金: {contractBond.toLocaleString()}</p>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BidResultInput;
