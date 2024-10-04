```tsx
import React from 'react';

type FormProps = {
  taxDivision: string;
  consumptionTax: string;
  revenueDivision: string;
  economicDivision: string;
  unpaidDivision: string;
  budgetItem: string;
  entryDivision: string;
  calculationFlag: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

export const ExampleForm: React.FC<FormProps> = ({
  taxDivision, 
  consumptionTax, 
  revenueDivision, 
  economicDivision, 
  unpaidDivision, 
  budgetItem, 
  entryDivision, 
  calculationFlag, 
  onSubmit, 
  onClear, 
  onCancel 
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <form className="grid grid-cols-2 gap-4">
        {/* Tax Division */}
        <div>
          <label className="block">税区分</label>
          <input type="text" value={taxDivision} className="border p-1 w-full" />
        </div>
        
        {/* Consumption Tax */}
        <div>
          <label className="block">消費税</label>
          <input type="text" value={consumptionTax} className="border p-1 w-full" />
        </div>
        
        {/* Revenue Division */}
        <div>
          <label className="block">収入区分</label>
          <input type="text" value={revenueDivision} className="border p-1 w-full" />
        </div>
        
        {/* Economic Division */}
        <div>
          <label className="block">経区分</label>
          <input type="text" value={economicDivision} className="border p-1 w-full" />
        </div>
        
        {/* Unpaid Division */}
        <div>
          <label className="block">未払計上区分</label>
          <input type="text" value={unpaidDivision} className="border p-1 w-full" />
        </div>

        {/* Budget Item */}
        <div>
          <label className="block">予算科目区分</label>
          <input type="text" value={budgetItem} className="border p-1 w-full" />
        </div>
        
        {/* Entry Division */}
        <div>
          <label className="block">エントリー区分</label>
          <input type="text" value={entryDivision} className="border p-1 w-full" />
        </div>

        {/* Calculation Flag */}
        <div className="col-span-2">
          <label className="block">積算基礎税込フラグ</label>
          <input type="text" value={calculationFlag} className="border p-1 w-full" />
        </div>
        
        {/* Buttons */}
        <div className="col-span-2 flex justify-end space-x-2">
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2">キャンセル</button>
          <button type="button" onClick={onClear} className="bg-yellow-400 text-white px-4 py-2">クリア</button>
          <button type="submit" onClick={onSubmit} className="bg-blue-600 text-white px-4 py-2">OK</button>
        </div>
      </form>
    </div>
  );
};
```