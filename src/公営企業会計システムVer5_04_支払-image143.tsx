import React from 'react';

type DateRangeFormProps = {
  startDate: string;
  endDate: string;
  departmentStart: number;
  departmentEnd: number;
  isNew: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const DateRangeForm: React.FC<DateRangeFormProps> = ({
  startDate,
  endDate,
  departmentStart,
  departmentEnd,
  isNew,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block">日付範囲</label>
        <input type="date" defaultValue={startDate} className="mr-2 p-1 border"/>
        ~
        <input type="date" defaultValue={endDate} className="ml-2 p-1 border"/>
      </div>
      <div className="mb-4">
        <label className="block">部署範囲</label>
        <input type="number" defaultValue={departmentStart} className="mr-2 p-1 border"/>
        ~
        <input type="number" defaultValue={departmentEnd} className="ml-2 p-1 border"/>
      </div>
      <div className="mb-4">
        <label className="block">発行区分</label>
        <label className="mr-2">
          <input type="radio" checked={isNew} readOnly className="mr-1"/> 新規
        </label>
        <label>
          <input type="radio" checked={!isNew} readOnly className="mr-1"/> 再発行
        </label>
      </div>
      <div className="flex justify-end">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 mr-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default DateRangeForm;
