```tsx
// AccountForm.tsx
import React from 'react';

type AccountFormProps = {
  title?: string;
  managerName?: string;
  cashierName?: string;
  headPersonName?: string;
  boxReceiptLabel?: string;
  collectionLabel?: string;
  decisionCode?: string;
  controlTypeOptions?: string[];
  customText1?: string;
  customText2?: string;
  customTotalAmountTitle1?: string;
  customTotalAmountTitle2?: string;
  onSave: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountForm: React.FC<AccountFormProps> = ({
  title = '帳票タイトルマスタ',
  managerName = '',
  cashierName = '',
  headPersonName = '',
  boxReceiptLabel = '',
  collectionLabel = '',
  decisionCode = '',
  controlTypeOptions = ['改葬様式', 'その他'],
  customText1 = '',
  customText2 = '',
  customTotalAmountTitle1 = '',
  customTotalAmountTitle2 = '',
  onSave,
  onClear,
  onExit
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      {/* Form Title */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>

      {/* Input fields */}
      <div className="grid grid-cols-2 gap-4">
        <label className="col-span-1">
          管理者職名:
          <input type="text" value={managerName} className="border rounded w-full" />
        </label>
        <label>
          領収者:
          <input type="text" value={cashierName} className="border rounded w-full" />
        </label>
        <label>
          首長名:
          <input type="text" value={headPersonName} className="border rounded w-full" />
        </label>
        <label>
          箱収日印字名称:
          <input type="text" value={boxReceiptLabel} className="border rounded w-full" />
        </label>
        <label>
          検収者:
          <input type="text" value={collectionLabel} className="border rounded w-full" />
        </label>
        <label>
          決裁コード:
          <input type="text" value={decisionCode} className="border rounded w-full" />
        </label>
        <label>
          帳票様式:
          <select className="border rounded w-full">
            {controlTypeOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          自由設定文1:
          <textarea className="border rounded w-full">{customText1}</textarea>
        </label>
        <label>
          自由設定文2:
          <textarea className="border rounded w-full">{customText2}</textarea>
        </label>
        <label>
          自由設定合計額印字タイトル1:
          <input type="text" value={customTotalAmountTitle1} className="border rounded w-full" />
        </label>
        <label>
          自由設定合計額印字タイトル2:
          <input type="text" value={customTotalAmountTitle2} className="border rounded w-full" />
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={onSave} className="bg-blue-500 text-white py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
```