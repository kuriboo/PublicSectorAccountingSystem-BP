```tsx
import React from 'react';

type FormComponentProps = {
  year?: string;
  budgetCode?: string;
  abbreviation?: string;
  taxDivision?: string;
  consumptionTax?: number;
  revenueDivision?: string;
  expenseDivision?: string;
  unpaidDivision?: string;
  entryDivision?: string;
  accountCode?: string;
  department?: string;
  businessCode?: string;
  measure?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  year = '平成27',
  budgetCode = '002001013',
  abbreviation = '電子書籍費',
  taxDivision = '課税 1',
  consumptionTax = 8,
  revenueDivision = '',
  expenseDivision = '経常',
  unpaidDivision = '通常未払計上 2',
  entryDivision = '',
  accountCode = '0620501 00100001 営業未払金',
  department = '000001 検証用',
  businessCode = '',
  measure = '',
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
      <div className="flex gap-4 mb-4">
        <div>年度: {year}</div>
        <div>予算科目コード: {budgetCode}</div>
        <div>略名: {abbreviation}</div>
      </div>
      
      <div className="mb-4">
        <label>税区分</label>
        <select className="ml-2 p-1 border rounded">
          <option>{taxDivision}</option>
        </select>
      </div>

      <div className="mb-4">
        <label>消費税</label>
        <input
          type="number"
          value={consumptionTax}
          className="ml-2 p-1 w-20 border rounded"
          readOnly
        />%
      </div>

      <div className="mb-4">
        <label>収入区分</label>
        <select className="ml-2 p-1 border rounded">
          <option>{revenueDivision}</option>
        </select>
      </div>

      <div className="mb-4">
        <label>経費区分</label>
        <select className="ml-2 p-1 border rounded">
          <option>{expenseDivision}</option>
        </select>
      </div>

      <div className="mb-4">
        <label>未払計上区分</label>
        <input
          type="text"
          value={unpaidDivision}
          className="ml-2 p-1 w-full border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label>勘定科目</label>
        <input
          type="text"
          value={accountCode}
          className="ml-2 p-1 w-full border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label>所属</label>
        <input
          type="text"
          value={department}
          className="ml-2 p-1 w-full border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label>事業</label>
        <input
          type="text"
          value={businessCode}
          className="ml-2 p-1 w-full border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label>施策</label>
        <input
          type="text"
          value={measure}
          className="ml-2 p-1 w-full border rounded"
          readOnly
        />
      </div>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```