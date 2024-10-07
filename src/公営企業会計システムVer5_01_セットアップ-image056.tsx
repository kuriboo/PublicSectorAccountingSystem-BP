// components/BudgetForm.tsx
import React from 'react';

type BudgetFormProps = {
  fiscalYear: string;
  compilationNumber: string;
  itemName: string;
  itemDivision: string;
  amountDivision: string;
  reformDivision: string;
  previousMonthSum: number;
  currentMonthSum: number;
  nextMonthSum: number;
  nextNextMonthSum: number;
  onEditDetails: () => void;
  onDeleteRow: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear,
  compilationNumber,
  itemName,
  itemDivision,
  amountDivision,
  reformDivision,
  previousMonthSum,
  currentMonthSum,
  nextMonthSum,
  nextNextMonthSum,
  onEditDetails,
  onDeleteRow,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">資金予算表集計マスタ</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">会計年度</label>
            <input
              type="text"
              value={fiscalYear}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">集計番号</label>
            <input
              type="text"
              value={compilationNumber}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">項目名称</label>
            <input
              type="text"
              value={itemName}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">項目区分</label>
            <input
              type="text"
              value={itemDivision}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">金額印字区分</label>
            <input
              type="text"
              value={amountDivision}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">改行区分</label>
            <input
              type="text"
              value={reformDivision}
              className="border p-2 w-full"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">前月末累計金額</label>
            <input
              type="number"
              value={previousMonthSum}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">当月実績額</label>
            <input
              type="number"
              value={currentMonthSum}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">翌月金額</label>
            <input
              type="number"
              value={nextMonthSum}
              className="border p-2 w-full"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">翌々月金額</label>
            <input
              type="number"
              value={nextNextMonthSum}
              className="border p-2 w-full"
              readOnly
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button type="button" onClick={onEditDetails} className="bg-blue-500 text-white px-4 py-2 rounded">
            明細編集
          </button>
          <button type="button" onClick={onDeleteRow} className="bg-red-500 text-white px-4 py-2 rounded">
            行削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;