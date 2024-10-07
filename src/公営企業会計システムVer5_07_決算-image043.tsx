import React from 'react';

// 型定義
interface AccountingFormProps {
  year: number;
  blockOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  year,
  blockOptions,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      {/* フォームヘッダー */}
      <div className="mb-4">
        <h1 className="text-xl text-blue-700">決算損益計算書集計処理</h1>
        <div className="mt-2">
          集計年度: <span className="text-blue-700">{year}</span>
        </div>
      </div>

      {/* 処理概要 */}
      <div className="mb-4">
        <h2 className="text-blue-700">処理概要</h2>
        <p>決算損益計算書・決算値借対照表データを作成します。</p>
      </div>

      {/* 集計対象セクション */}
      <div className="mb-4 border p-4">
        <h3>集計対象</h3>
        <div className="mb-2">
          <label className="mr-4">
            <input type="radio" name="mode" value="全体" /> 全体
          </label>
          <label className="mr-4">
            <input type="radio" name="mode" value="ブロック" /> ブロック
          </label>
          <label>
            <input type="radio" name="mode" value="セグメント" /> セグメント
          </label>
        </div>
        <div>
          <select className="border px-2 py-1">
            {blockOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="py-1 px-4 bg-blue-500 text-white rounded-lg">OK</button>
        <button onClick={onClear} className="py-1 px-4 bg-gray-500 text-white rounded-lg">クリア</button>
        <button onClick={onClose} className="py-1 px-4 bg-gray-500 text-white rounded-lg">終了</button>
      </div>
    </div>
  );
};

export default AccountingForm;
```