import React from 'react';

// 型定義
interface AccountEntryFormProps {
  fiscalYear: string;
  minAccount: string;
  maxAccount: string;
  accountType: '予算科目' | '仕訳科目';
  onConfirm: (code: string, segment: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AccountEntryForm: React.FC<AccountEntryFormProps> = ({
  fiscalYear,
  minAccount,
  maxAccount,
  accountType,
  onConfirm,
  onSubmit,
  onClear,
  onClose,
}) => {
  const [code, setCode] = React.useState('');
  const [segment, setSegment] = React.useState('');

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl mb-4">予算・仕訳科目別管理マスタ自動作成</h2>
      <div className="flex items-center mb-4">
        <span className="mr-2">会計年度:</span>
        <span>{fiscalYear}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">科目:</span>
        <input
          type="text"
          className="border rounded-md p-1"
          value={minAccount}
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          className="border rounded-md p-1"
          value={maxAccount}
          readOnly
        />
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">科目明細別管理コード関連付け:</span>
        <input
          type="text"
          className="border rounded-md p-1 mr-2"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          className="border rounded-md p-1 mr-2"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={() => onConfirm(code, segment)}
        >
          確定
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountEntryForm;
