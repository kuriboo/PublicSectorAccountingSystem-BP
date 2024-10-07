import React from 'react';

type Props = {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReportForm: React.FC<Props> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl mb-4">所属別収納明細表</h1>
      <div className="border p-4">
        <h2 className="text-lg mb-2">範囲指定</h2>
        <div className="flex items-center mb-4">
          <label className="mr-2">収納日</label>
          <input type="text" value={startDate} readOnly className="border p-1 mx-1" />
          <span>~</span>
          <input type="text" value={endDate} readOnly className="border p-1 mx-1" />
        </div>
        <div className="flex items-center mb-4">
          <button className="bg-purple-500 text-white py-1 px-2 rounded mr-2">所属</button>
          <input type="text" value={startCode} readOnly className="border p-1 w-20 mx-1" />
          <span>~</span>
          <input type="text" value={endCode} readOnly className="border p-1 w-20 mx-1" />
          <button className="bg-purple-500 text-white py-1 px-2 rounded ml-2">所属</button>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-gray-300 text-black py-1 px-4 rounded mx-1">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black py-1 px-4 rounded mx-1">クリア</button>
        <button onClick={onExit} className="bg-gray-300 text-black py-1 px-4 rounded mx-1">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```