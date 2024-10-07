import React from 'react';

type FormProps = {
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  onSubmit: () => void;
};

const AccountingForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  onSubmit,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">作表日</label>
        <input
          type="text"
          value={startDate}
          className="border p-2 rounded w-full"
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          value={endDate}
          className="border p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">仕訳科目</label>
        <input
          type="text"
          value={startAccountCode}
          className="border p-2 rounded w-full"
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          value={endAccountCode}
          className="border p-2 rounded w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">作表区分</label>
        <div>
          <label className="mr-4">
            <input type="radio" name="reportType" value="daily" />
            日
          </label>
          <label>
            <input type="radio" name="reportType" value="section" />
            節
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">決算仕訳</label>
        <div>
          <label className="mr-4">
            <input type="radio" name="settlement" value="include" />
            含む
          </label>
          <label>
            <input type="radio" name="settlement" value="exclude" />
            含まない
          </label>
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        OK
      </button>
    </div>
  );
};

export default AccountingForm;