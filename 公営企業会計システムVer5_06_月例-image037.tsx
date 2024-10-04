import React from 'react';

// Props type definition
type FormProps = {
  startDate: string;
  endDate: string;
  subjectStart: string;
  subjectEnd: string;
  detailStart: string;
  detailEnd: string;
  target: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  subjectStart,
  subjectEnd,
  detailStart,
  detailEnd,
  target,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block mb-1">作表日</label>
        <div className="flex space-x-2">
          <input type="text" value={startDate} className="border rounded px-2 py-1 w-full" readOnly />
          <span>〜</span>
          <input type="text" value={endDate} className="border rounded px-2 py-1 w-full" readOnly />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">仕訳科目</label>
        <div className="flex space-x-2">
          <input type="text" value={subjectStart} className="border rounded px-2 py-1 w-full" readOnly />
          <span>〜</span>
          <input type="text" value={subjectEnd} className="border rounded px-2 py-1 w-full" readOnly />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">仕訳細節</label>
        <div className="flex space-x-2">
          <input type="text" value={detailStart} className="border rounded px-2 py-1 w-full" readOnly />
          <span>〜</span>
          <input type="text" value={detailEnd} className="border rounded px-2 py-1 w-full" readOnly />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">集計対象</label>
        <input type="text" value={target} className="border rounded px-2 py-1 w-full" readOnly />
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white py-1 px-4 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingForm;