import React from 'react';

// Props interface for the ChecklistForm component
interface ChecklistFormProps {
  year: number;
  subjectCodeFrom: string;
  subjectCodeTo: string;
  managementDivision: string;
  outputDivision: 'all' | 'setOnly' | 'excludeUnset';
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ChecklistForm: React.FC<ChecklistFormProps> = ({
  year,
  subjectCodeFrom,
  subjectCodeTo,
  managementDivision,
  outputDivision,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">管理区分チェックリスト</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">出力帳票</h3>
        <div className="flex flex-col">
          <label>
            <input type="radio" name="output" value="budget" /> 予算科目別管理チェックリスト
          </label>
          <label>
            <input type="radio" name="output" value="detail" /> 仕訳科目別性質管理チェックリスト
          </label>
          <label>
            <input type="radio" name="output" value="name" /> 管理名称マスタチェックリスト
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block">年度</label>
            <input type="text" value={year} className="border rounded p-1" readOnly />
          </div>
          <div>
           <label className="block">科目コード</label>
           <input
             type="text"
             value={subjectCodeFrom}
             className="border rounded p-1"
             readOnly
           />
           <span> ~ </span>
           <input
             type="text"
             value={subjectCodeTo}
             className="border rounded p-1"
             readOnly
           />
          </div>
          <div>
            <label className="block">管理区分</label>
            <input
              type="text"
              value={managementDivision}
              className="border rounded p-1"
              readOnly
            />
          </div>
        </div>
        <div>
          <label className="font-semibold">出力区分</label>
          <div>
            <label>
              <input
                type="radio"
                name="outputDivision"
                value="all"
                checked={outputDivision === 'all'}
                readOnly
              /> 全て
            </label>
            <label>
              <input
                type="radio"
                name="outputDivision"
                value="setOnly"
                checked={outputDivision === 'setOnly'}
                readOnly
              /> 未設定のみ
            </label>
            <label>
              <input
                type="radio"
                name="outputDivision"
                value="excludeUnset"
                checked={outputDivision === 'excludeUnset'}
                readOnly
              /> 未設定を含まない
            </label>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="bg-blue-500 text-white py-1 px-4 rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 text-black py-1 px-4 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white py-1 px-4 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default ChecklistForm;
```