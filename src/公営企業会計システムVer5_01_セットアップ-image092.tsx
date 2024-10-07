import React from 'react';

type AccountingFormProps = {
  accountCode: string;
  onAccountCodeChange: (value: string) => void;
  isDeferredFlag: boolean;
  onDeferredFlagChange: (value: boolean) => void;
  counterAccountOption: string;
  onCounterAccountOptionChange: (value: string) => void;
  debitCreditOption: string;
  onDebitCreditOptionChange: (value: string) => void;
  taxOption: string;
  onTaxOptionChange: (value: string) => void;
  addOption: string;
  onAddOptionChange: (value: string) => void;
  notes: string;
  onNotesChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  accountCode,
  onAccountCodeChange,
  isDeferredFlag,
  onDeferredFlagChange,
  counterAccountOption,
  onCounterAccountOptionChange,
  debitCreditOption,
  onDebitCreditOptionChange,
  taxOption,
  onTaxOptionChange,
  addOption,
  onAddOptionChange,
  notes,
  onNotesChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <form className="max-w-sm mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">自科目選択</label>
        <input
          type="text"
          value={accountCode}
          onChange={(e) => onAccountCodeChange(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        />
        <label className="mt-2 flex items-center">
          <input
            type="checkbox"
            checked={isDeferredFlag}
            onChange={(e) => onDeferredFlagChange(e.target.checked)}
            className="mr-2"
          />
          未収未払フラグ
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">相手科目選択</label>
        <select
          value={counterAccountOption}
          onChange={(e) => onCounterAccountOptionChange(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        >
          <option value="科目指定">科目指定</option>
          <option value="現金同等物">現金同等物</option>
          <option value="科目指定なし">科目指定なし</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">貸借区分</label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              name="debitCredit"
              value="借方"
              checked={debitCreditOption === '借方'}
              onChange={(e) => onDebitCreditOptionChange(e.target.value)}
              className="mr-1"
            />
            借方
          </label>
          <label>
            <input
              type="radio"
              name="debitCredit"
              value="貸方"
              checked={debitCreditOption === '貸方'}
              onChange={(e) => onDebitCreditOptionChange(e.target.value)}
              className="mr-1"
            />
            貸方
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">消費税区分</label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              name="taxOption"
              value="税込み"
              checked={taxOption === '税込み'}
              onChange={(e) => onTaxOptionChange(e.target.value)}
              className="mr-1"
            />
            税込み
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="taxOption"
              value="税抜き"
              checked={taxOption === '税抜き'}
              onChange={(e) => onTaxOptionChange(e.target.value)}
              className="mr-1"
            />
            税抜き
          </label>
          <label>
            <input
              type="radio"
              name="taxOption"
              value="税のみ"
              checked={taxOption === '税のみ'}
              onChange={(e) => onTaxOptionChange(e.target.value)}
              className="mr-1"
            />
            税のみ
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">加減区分</label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              name="addOption"
              value="+"
              checked={addOption === '+'}
              onChange={(e) => onAddOptionChange(e.target.value)}
              className="mr-1"
            />
            +
          </label>
          <label>
            <input
              type="radio"
              name="addOption"
              value="-"
              checked={addOption === '-'}
              onChange={(e) => onAddOptionChange(e.target.value)}
              className="mr-1"
            />
            -
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">備考</label>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default AccountingForm;
```