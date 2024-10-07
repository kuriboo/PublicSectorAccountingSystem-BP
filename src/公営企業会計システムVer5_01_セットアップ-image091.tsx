import React from 'react';

type FormProps = {
  shukeiBango: string;
  itemName: string;
  cfDivision: string;
  amountDisplayType: string;
  reviseDivision: string;
  indent: number;
  showOutputCheck: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CustomForm: React.FC<FormProps> = ({
  shukeiBango,
  itemName,
  cfDivision,
  amountDisplayType,
  reviseDivision,
  indent,
  showOutputCheck,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <form className="p-4 bg-white border rounded shadow-md space-y-4">
      <div className="flex items-center">
        <label className="mr-2">集計番号</label>
        <input
          type="text"
          value={shukeiBango}
          className="border rounded p-1"
          readOnly
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <label>項目名称1</label>
        <input
          type="text"
          value={itemName}
          className="flex-1 border rounded p-1"
          readOnly
        />
      </div>

      <div className="flex items-center space-x-2">
        <label>CF区分</label>
        <select
          value={cfDivision}
          className="flex-1 border rounded p-1"
          readOnly
        >
          <option>業務活動によるキャッシュ・フロー</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label>金額印字区分</label>
        <select
          value={amountDisplayType}
          className="flex-1 border rounded p-1"
          readOnly
        >
          <option>名称印字・金額〇印字</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label>改行区分</label>
        <select
          value={reviseDivision}
          className="flex-1 border rounded p-1"
          readOnly
        >
          <option>1行改行</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label>インデント</label>
        <input
          type="number"
          value={indent}
          className="w-16 border rounded p-1"
          readOnly
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showOutputCheck}
          readOnly
        />
        <label>帳票出力無し</label>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white rounded px-4 py-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          type="button"
          className="bg-red-500 text-white rounded px-4 py-2"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
```