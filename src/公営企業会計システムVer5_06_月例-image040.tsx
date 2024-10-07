import React from 'react';

// Type definition for component props
interface AccountingFormProps {
  collectionDate: string;
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  displayDivision: 'day' | 'section' | 'detail';
  decisionExplanation: boolean;
  onFormSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  collectionDate,
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  displayDivision,
  decisionExplanation,
  onFormSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">MAD8450 総勘定合計表作成</h1>
      <div className="bg-gray-100 border p-4 rounded-lg">
        <div className="mb-2">
          <span>集計日付</span>
          <input
            type="text"
            value={collectionDate}
            className="border ml-2 p-1"
            readOnly
          />
        </div>
        <div className="mb-2">
          <span>時点</span>
          <input
            type="text"
            value={startDate}
            className="border ml-2 p-1"
            readOnly
          />
          ～
          <input
            type="text"
            value={endDate}
            className="border ml-2 p-1"
            readOnly
          />
        </div>
        <div className="mb-2">
          <span>仕訳科目</span>
          <input
            type="text"
            value={startAccountCode}
            className="border ml-2 p-1"
            readOnly
          />
          ～
          <input
            type="text"
            value={endAccountCode}
            className="border ml-2 p-1"
            readOnly
          />
        </div>
        <div className="mb-2">
          <span>作表区分</span>
          <label className="ml-2">
            <input
              type="radio"
              checked={displayDivision === 'day'}
              readOnly
            />
            日
          </label>
          <label className="ml-2">
            <input
              type="radio"
              checked={displayDivision === 'section'}
              readOnly
            />
            細節
          </label>
          <label className="ml-2">
            <input
              type="radio"
              checked={displayDivision === 'detail'}
              readOnly
            />
            明細
          </label>
        </div>
        <div className="mb-2">
          <span>決算仕訳</span>
          <label className="ml-2">
            <input
              type="radio"
              checked={decisionExplanation}
              readOnly
            />
            含む
          </label>
          <label className="ml-2">
            <input
              type="radio"
              checked={!decisionExplanation}
              readOnly
            />
            含まない
          </label>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onFormSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg">OK</button>
          <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 mr-2 rounded-lg">クリア</button>
          <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded-lg">終了</button>
        </div>
      </div>
    </div>
  );
};

export default AccountingForm;
```