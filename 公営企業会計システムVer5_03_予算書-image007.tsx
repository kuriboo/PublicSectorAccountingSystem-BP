```tsx
import React from 'react';

// Props type definition
interface AdjustmentFormProps {
  subjectLevel: string;
  setSubjectLevel: (level: string) => void;
  code: string;
  subjectName: string;
  debitSubject: string;
  creditSubject: string;
  amount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  subjectLevel,
  setSubjectLevel,
  code,
  subjectName,
  debitSubject,
  creditSubject,
  amount,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h1 className="text-lg font-bold mb-4">仕訳科目調整編集</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">科目名称表示レベル</label>
        <div className="flex space-x-4">
          {['目', '節', '細節', '明細'].map((level) => (
            <label key={level} className="flex items-center space-x-2">
              <input
                type="radio"
                value={level}
                checked={subjectLevel === level}
                onChange={() => setSubjectLevel(level)}
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="font-semibold mr-2">仕訳コード</span>
        <span>{code}</span> <span>{subjectName}</span>
      </div>

      <div className="mb-4 flex justify-between">
        <div>
          <label className="block font-semibold mb-2">借方科目</label>
          <div>{debitSubject}</div>
        </div>
        <div>
          <label className="block font-semibold mb-2">貸方科目</label>
          <div>{creditSubject}</div>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          readOnly
          value={amount.toLocaleString()}
          className="border p-2"
        /> 
        <span className="ml-2">円</span>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-gray-200 px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default AdjustmentForm;
```