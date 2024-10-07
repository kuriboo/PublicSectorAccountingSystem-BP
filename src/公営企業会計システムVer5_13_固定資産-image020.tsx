import React from 'react';

type PropertyInfoFormProps = {
  date: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const PropertyInfoForm: React.FC<PropertyInfoFormProps> = ({ date, onSubmit, onClear, onFinish }) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 shadow-md rounded">
      <h2 className="text-center text-lg font-bold mb-4">固定資産 一覧表作成</h2>
      
      {/* 作表年月日 */}
      <div className="mb-4">
        <label className="block mb-2">作表年月日</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={date}
          readOnly
        />
      </div>

      {/* 書式区分 */}
      <fieldset className="mb-4">
        <legend className="mb-2">書式区分</legend>
        <label className="mr-4">
          <input type="radio" name="format" value="formal" />
          有形
        </label>

        <label>
          <input type="radio" name="format" value="informal" />
          無形・投資
        </label>
      </fieldset>

      {/* 会計区分 */}
      <fieldset className="mb-4">
        <legend className="mb-2">会計区分</legend>
        <label className="mr-4">
          <input type="radio" name="account" value="print" />
          印字しない
        </label>

        <label>
          <input type="radio" name="account" value="separate" />
          会計区分別
        </label>
      </fieldset>

      {/* 償却終了区分 */}
      <fieldset className="mb-4">
        <legend className="mb-2">償却終了区分</legend>
        <label className="mr-4">
          <input type="radio" name="depreciation" value="all" />
          すべて
        </label>

        <label>
          <input type="radio" name="depreciation" value="90percent" />
          90%償却了済
        </label>

        <label>
          <input type="radio" name="depreciation" value="95percent" />
          95%償却済
        </label>
      </fieldset>

      {/* 範囲指定 */}
      <div className="mb-4">
        <h4 className="mb-2">範囲指定</h4>
        <label className="flex mb-2">
          固定資産科目 
          <input type="number" className="ml-2 px-3 py-1 border rounded" />
          〜 
          <input type="number" className="ml-2 px-3 py-1 border rounded" />
        </label>

        <label className="flex mb-2">
          資産番号 
          <input type="number" className="ml-2 px-3 py-1 border rounded" />
          〜 
          <input type="number" className="ml-2 px-3 py-1 border rounded" />
        </label>

        <label className="flex">
          取得年月日 
          <input type="text" className="ml-2 px-3 py-1 border rounded" />
          〜 
          <input type="text" className="ml-2 px-3 py-1 border rounded" />
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onFinish}>終了</button>
      </div>
    </div>
  );
};

export default PropertyInfoForm;
