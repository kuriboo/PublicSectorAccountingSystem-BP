```tsx
import React from 'react';

// Props type definition for the component
type CommandFormProps = {
  issueType: '新規' | '再発行';
  paymentStartDate: string;
  paymentEndDate: string;
  retainYears: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const CommandForm: React.FC<CommandFormProps> = ({
  issueType,
  paymentStartDate,
  paymentEndDate,
  retainYears,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold bg-purple-200 p-2 rounded">控除額支出命令書発行</h2>

      <div className="border p-4 mt-4">
        <h3 className="font-semibold">発行区分</h3>
        <div className="flex items-center mt-2">
          <input type="radio" id="new" name="issueType" checked={issueType === '新規'} readOnly />
          <label htmlFor="new" className="ml-2">新規</label>
          <input type="radio" id="reissue" name="issueType" checked={issueType === '再発行'} readOnly className="ml-4" />
          <label htmlFor="reissue" className="ml-2">再発行</label>
        </div>
      </div>

      <div className="border p-4 mt-4">
        <h3 className="font-semibold">発行対象</h3>
        <div className="mt-2">
          <p>支払年月日</p>
          <input type="text" value={paymentStartDate} readOnly className="border rounded p-1 mx-2"/>
          ～
          <input type="text" value={paymentEndDate} readOnly className="border rounded p-1 mx-2"/>
        </div>
      </div>

      <div className="border p-4 mt-4">
        <h3 className="font-semibold">伝票印字用自由設定項目</h3>
        <div className="mt-2">
          <button className="bg-blue-600 text-white py-1 px-3 rounded mr-2">保存年限</button>
          <span>{retainYears}年保存</span>
        </div>
      </div>

      <div className="flex justify-end mt-4 space-x-4">
        <button onClick={onSubmit} className="bg-gray-300 py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 py-2 px-4 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default CommandForm;
```