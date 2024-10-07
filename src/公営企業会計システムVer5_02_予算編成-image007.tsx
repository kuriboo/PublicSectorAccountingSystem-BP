import React from 'react';

type BudgetFormProps = {
  year: string;
  isIndividual: boolean;
  section: string;
  detail: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  isIndividual,
  section,
  detail,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      {/* Header */}
      <h2 className="text-lg font-bold mb-4">予算データ削除</h2>
      
      {/* Year Selection */}
      <div className="mb-4">
        <label className="mr-2">
          <select className="border rounded p-1" defaultValue={year}>
            <option value="平成30">平成30</option>
            <option value="平成31">平成31</option>
            <option value="令和元年">令和元年</option>
          </select>
        </label>
        年度
      </div>

      {/* Section Selection */}
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" defaultChecked={isIndividual} className="mr-2"/>
          個別
        </label>
      </div>

      {/* Section Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input type="text" className="border rounded p-1" placeholder="節" defaultValue={section}/>
        <input type="text" className="border rounded p-1" placeholder="細節" defaultValue="0001"/>
        <input type="text" className="border rounded p-1" placeholder="明細" defaultValue="0001"/>
      </div>

      {/* Range Specification */}
      <div className="mb-4">
        <button className="border rounded p-1 bg-blue-500 text-white">予算科目</button>
        <input type="text" className="border rounded p-1 mx-2"/>
        ～
        <input type="text" className="border rounded p-1 mx-2"/>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onSubmit} className="border rounded p-2 bg-green-500 text-white">OK</button>
        <button onClick={onClear} className="border rounded p-2 bg-yellow-500 text-white">クリア</button>
        <button onClick={onExit} className="border rounded p-2 bg-red-500 text-white">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```