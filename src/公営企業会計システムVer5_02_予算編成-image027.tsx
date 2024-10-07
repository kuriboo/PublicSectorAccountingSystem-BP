// Import necessary modules
import React from 'react';

// Define types for the component props
interface BudgetAdjustmentFormProps {
  fiscalYear: string;
  centerName: string;
  onRegister: () => void;
  onModify: () => void;
  onDelete: () => void;
  data: {
    lineNumber: string;
    description: string;
    unitPrice: string;
    quantity: string;
    unit: string;
    amount: string;
    isChecked: boolean;
  }[];
}

// Define the main component
const BudgetAdjustmentForm: React.FC<BudgetAdjustmentFormProps> = ({
  fiscalYear,
  centerName,
  onRegister,
  onModify,
  onDelete,
  data,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded">
      <h2 className="text-lg font-bold mb-2">補正事業別科目別内訳要求登録</h2>
      <p className="mb-4">
        {fiscalYear}年度 - {centerName}
      </p>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>行番号</th>
            <th>積算基礎</th>
            <th>単価</th>
            <th>数量</th>
            <th>単位</th>
            <th>金額(円)</th>
            <th>共</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.lineNumber}</td>
              <td>{item.description}</td>
              <td>{item.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.amount}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  readOnly
                  className="form-checkbox"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
          登録
        </button>
        <button onClick={onModify} className="bg-yellow-500 text-white px-4 py-2 rounded">
          訂正
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          行削除
        </button>
      </div>
    </div>
  );
};

export default BudgetAdjustmentForm;
