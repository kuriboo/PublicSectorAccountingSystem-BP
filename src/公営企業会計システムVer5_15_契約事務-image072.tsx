import React from 'react';

// 型定義
interface FormProps {
  year: number;
  division: string;
  receiptNumberStart: string;
  receiptNumberEnd: string;
  registrationStartDate: string;
  registrationEndDate: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  year,
  division,
  receiptNumberStart,
  receiptNumberEnd,
  registrationStartDate,
  registrationEndDate,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div className="bg-purple-200 p-4 rounded-t-lg">
        <h1 className="text-xl font-bold">指名業者一覧表</h1>
      </div>
      <div className="bg-white p-4 border border-t-0">
        <div className="flex items-center mb-4">
          <span>年度</span>
          <input
            type="number"
            value={year}
            className="mx-2 p-2 border rounded"
            readOnly
          />
          <span>受付区分</span>
          <select value={division} className="ml-2 p-2 border rounded">
            <option>工事</option>
            {/* 他のオプション */}
          </select>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">受付番号</span>
          <input
            type="text"
            value={receiptNumberStart}
            className="p-2 border rounded"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={receiptNumberEnd}
            className="p-2 border rounded"
            readOnly
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">登録年月日</span>
          <input
            type="text"
            value={registrationStartDate}
            className="p-2 border rounded"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={registrationEndDate}
            className="p-2 border rounded"
            readOnly
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-500 text-white p-2 rounded"
          >
            クリア
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white p-2 rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
