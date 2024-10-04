```tsx
import React from 'react';

// TypeScript interface for component props
interface ContractInfoProps {
  designYear: number;
  contractYear: number;
  contractChangeCount: number;
  totalAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  completionDate: string;
  processingDate: string;
  paidAmount: number;
  previousAmount: number;
  unpaidAmount: number;
  onCancel: () => void;
}

const ContractInfo: React.FC<ContractInfoProps> = ({
  designYear,
  contractYear,
  contractChangeCount,
  totalAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
  completionDate,
  processingDate,
  paidAmount,
  previousAmount,
  unpaidAmount,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300">
      <div className="text-xl font-bold mb-4">契約内容</div>
      <table className="w-full text-left table-fixed">
        <tbody>
          <tr>
            <td className="w-1/3">予定・負担番号</td>
            <td>設計</td>
            <td>{designYear}年度</td>
          </tr>
          <tr>
            <td>契約</td>
            <td></td>
            <td>{contractYear}年度</td>
          </tr>
          <tr>
            <td>契約変更</td>
            <td>回</td>
            <td>{contractChangeCount}</td>
          </tr>
          <tr>
            <td colspan="3" className="border-b"></td>
          </tr>
          <tr>
            <td>本体金額</td>
            <td colSpan={2}>{totalAmount}</td>
          </tr>
          <tr>
            <td>税抜金額</td>
            <td colSpan={2}>{taxExcludedAmount}</td>
          </tr>
          <tr>
            <td>消費税額</td>
            <td colSpan={2}>{consumptionTaxAmount}</td>
          </tr>
          <tr>
            <td colspan="3" className="border-b"></td>
          </tr>
          <tr>
            <td>完了予定日</td>
            <td colSpan={2}>{completionDate || '__年__月__日'}</td>
          </tr>
          <tr>
            <td>処理年月日</td>
            <td colSpan={2}>{processingDate || '__年__月__日'}</td>
          </tr>
          <tr>
            <td colspan="3" className="border-b"></td>
          </tr>
          <tr>
            <td>支払済額</td>
            <td colSpan={2}>{paidAmount}</td>
          </tr>
          <tr>
            <td>内前金額</td>
            <td colSpan={2}>{previousAmount}</td>
          </tr>
          <tr>
            <td>未支払額</td>
            <td colSpan={2}>{unpaidAmount}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={onCancel}
        className="mt-4 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
      >
        キャンセル
      </button>
    </div>
  );
};

export default ContractInfo;
```