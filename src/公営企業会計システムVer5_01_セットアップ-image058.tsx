import React from 'react';

// プロパティの型定義
interface FormProps {
  accountCode: string;
  onAccountCodeChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネント定義
const AccountForm: React.FC<FormProps> = ({
  accountCode,
  onAccountCodeChange,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="bg-white p-6 rounded shadow-md space-y-4 w-80">
      {/* ラジオボタン */}
      <div className="flex justify-between">
        <div>
          <input type="radio" id="debit" name="transaction" className="mr-2" />
          <label htmlFor="debit">借方</label>
        </div>
        <div>
          <input type="radio" id="credit" name="transaction" className="mr-2" />
          <label htmlFor="credit">貸方</label>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <input type="radio" id="description" name="transaction" className="mr-2" />
          <label htmlFor="description">仕訳</label>
        </div>
        <div>
          <input type="radio" id="budget" name="transaction" className="mr-2" />
          <label htmlFor="budget">予算</label>
        </div>
      </div>

      {/* テキストボックス */}
      <div className="flex items-center">
        <label htmlFor="accountCode" className="mr-2">科目コード</label>
        <input
          type="text"
          id="accountCode"
          value={accountCode}
          onChange={(e) => onAccountCodeChange(e.target.value)}
          className="border px-2 py-1"
        />
      </div>
      
      {/* ボタン */}
      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white rounded py-1 px-5 hover:bg-blue-600">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black rounded py-1 px-5 hover:bg-gray-400">クリア</button>
        <button onClick={onClose} className="bg-gray-300 text-black rounded py-1 px-5 hover:bg-gray-400">終了</button>
      </div>
    </div>
  );
};

export default AccountForm;
```