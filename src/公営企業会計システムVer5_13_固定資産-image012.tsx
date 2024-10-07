// imports
import React from 'react';

// TypeScript types for props
type FormComponentProps = {
  displayDate: string;
  initialDate: string;
  finalDate: string;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
  onClearForm: () => void;
  onCloseForm: () => void;
};

// Functional component with props
const FormComponent: React.FC<FormComponentProps> = ({
  displayDate,
  initialDate,
  finalDate,
  onDateChange,
  onSubmitForm,
  onClearForm,
  onCloseForm
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* Header */}
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">DPD1510 取得改良一覧表作成</h3>
        <span>{displayDate}</span>
      </div>
      
      {/* Form Body */}
      <div className="mt-4">
        {/* 作表年月日 */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">作表年月日</label>
          <input 
            type="text" 
            value={displayDate}
            readOnly
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* 作表区分 */}
        <div className="mb-4">
          <span className="block font-semibold mb-2">作表区分</span>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" name="tableDivision" value="detailed" className="form-radio"/>
              <span className="ml-2">詳細印字有り</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="radio" name="tableDivision" value="simple" className="form-radio"/>
              <span className="ml-2">詳細印字無し</span>
            </label>
          </div>
        </div>

        {/* 会計区分 */}
        <div className="mb-4">
          <span className="block font-semibold mb-2">会計区分</span>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" name="accountType" value="none" className="form-radio"/>
              <span className="ml-2">指定なし</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="radio" name="accountType" value="code" className="form-radio"/>
              <span className="ml-2">会計区分コード</span>
            </label>
          </div>
        </div>

        {/* 範囲指定 */}
        <div className="border p-4">
          <span className="block font-semibold mb-2">範囲指定</span>
          <div className="mb-2">
            <label className="block">固定資産科目</label>
            <input type="text" className="p-2 border border-gray-300 rounded w-full"/>
          </div>
          <div className="mb-2">
            <label className="block">資産番号</label>
            <input type="text" className="p-2 border border-gray-300 rounded w-full"/>
          </div>
          <div className="mb-2">
            <label className="block">取得年月日</label>
            <div>
              <input 
                type="text" 
                value={initialDate} 
                onChange={onDateChange}
                className="p-2 border border-gray-300 rounded"
              />
              <span className="mx-2">~</span>
              <input 
                type="text" 
                value={finalDate} 
                onChange={onDateChange}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4">
        <button 
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmitForm}
        >
          OK
        </button>
        <button 
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClearForm}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCloseForm}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
