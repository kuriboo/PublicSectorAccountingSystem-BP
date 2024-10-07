import React from 'react';

// TypeScriptでの型定義
interface EditFormProps {
  subjectLabel: string;
  initialCode: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ subjectLabel, initialCode, onOk, onClear, onCancel }) => {
  const [code, setCode] = React.useState(initialCode);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        {/* 仕訳科目ラベル */}
        <label className="mr-4 text-blue-700 font-semibold">{subjectLabel}</label>
        {/* 入力フィールド */}
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-gray-300 rounded-lg p-1"
        />
      </div>
      <div className="flex justify-around mt-4">
        {/* ボタン */}
        <button onClick={onOk} className="bg-gray-200 hover:bg-gray-300 rounded-lg py-1 px-3">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 hover:bg-gray-300 rounded-lg py-1 px-3">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 rounded-lg py-1 px-3">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EditForm;
