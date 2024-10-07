import React from 'react';

// TypeScript interfaces for props
interface AccountInfo {
  year: string;
  code: string;
  subCode: string;
  detail: string;
  monthlyAmounts: number[];
}

interface JournalEntryProps {
  mode: 'register' | 'edit' | 'delete';
  accountInfo: AccountInfo;
  onSearchClick: () => void;
  onPrevDataClick: () => void;
  onNextDataClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onFinishClick: () => void;
}

// Main component
const JournalEntryComponent: React.FC<JournalEntryProps> = ({
  mode,
  accountInfo,
  onSearchClick,
  onPrevDataClick,
  onNextDataClick,
  onOkClick,
  onClearClick,
  onFinishClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
      <h1 className="font-bold text-lg mb-4">SUD1230 仕訳科目 貸借金額</h1>
      
      <div className="flex items-center mb-4">
        <label className="mr-4">モード:</label>
        <label className="mr-2">
          <input type="radio" name="mode" checked={mode === 'register'} readOnly /> 登録
        </label>
        <label className="mr-2">
          <input type="radio" name="mode" checked={mode === 'edit'} readOnly /> 訂正
        </label>
        <label>
          <input type="radio" name="mode" checked={mode === 'delete'} readOnly /> 削除
        </label>
      </div>

      <div className="mb-2">
        <span>会計年度: {accountInfo.year} 年度</span>
      </div>
      
      <div className="mb-4">
        <input type="text" value={accountInfo.code} readOnly className="border rounded mr-2" placeholder="仕訳節" />
        <input type="text" value={accountInfo.subCode} readOnly className="border rounded mr-2" placeholder="仕訳細節" />
        <input type="text" value={accountInfo.detail} readOnly className="border rounded" placeholder="仕訳明細" />
        <button onClick={onSearchClick} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">科目検索</button>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>月</th>
            <th>金額（円）</th>
          </tr>
        </thead>
        <tbody>
          {['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'].map((month, index) => (
            <tr key={index}>
              <td>{month}</td>
              <td>{accountInfo.monthlyAmounts[index]} 円</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button onClick={onPrevDataClick} className="bg-gray-300 text-black px-3 py-1 rounded">前データ</button>
        <button onClick={onNextDataClick} className="bg-gray-300 text-black px-3 py-1 rounded">次データ</button>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={onOkClick} className="bg-green-500 text-white px-3 py-1 rounded mr-2">OK</button>
        <button onClick={onClearClick} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">クリア</button>
        <button onClick={onFinishClick} className="bg-red-500 text-white px-3 py-1 rounded">終了</button>
      </div>
    </div>
  );
};

export default JournalEntryComponent;