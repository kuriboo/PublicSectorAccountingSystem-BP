import React from 'react';
import { useState } from 'react';

type Props = {
  startDate?: string;
  endDate?: string;
  startCode?: string;
  endCode?: string;
  onSubmit: (data: { startDate: string; endDate: string; startCode: string; endCode: string }) => void;
  onClear: () => void;
  onClose: () => void;
};

const RangeSelector: React.FC<Props> = ({
  startDate = '',
  endDate = '',
  startCode = '',
  endCode = '',
  onSubmit,
  onClear,
  onClose,
}) => {
  const [localStartDate, setLocalStartDate] = useState(startDate);
  const [localEndDate, setLocalEndDate] = useState(endDate);
  const [localStartCode, setLocalStartCode] = useState(startCode);
  const [localEndCode, setLocalEndCode] = useState(endCode);

  // Handles form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ startDate: localStartDate, endDate: localEndDate, startCode: localStartCode, endCode: localEndCode });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">範囲指定</h2>
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            調定日
            <input
              type="text"
              value={localStartDate}
              onChange={(e) => setLocalStartDate(e.target.value)}
              className="w-full border px-2 py-1 mt-1"
              placeholder="開始日"
            />
          </label>
          <label className="block">
            <span className="invisible">〜</span>
            <input
              type="text"
              value={localEndDate}
              onChange={(e) => setLocalEndDate(e.target.value)}
              className="w-full border px-2 py-1 mt-1"
              placeholder="終了日"
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="block">
            所属コード
            <input
              type="text"
              value={localStartCode}
              onChange={(e) => setLocalStartCode(e.target.value)}
              className="w-full border px-2 py-1 mt-1"
              placeholder="0000000"
            />
          </label>
          <label className="block">
            <span className="invisible">〜</span>
            <input
              type="text"
              value={localEndCode}
              onChange={(e) => setLocalEndCode(e.target.value)}
              className="w-full border px-2 py-1 mt-1"
              placeholder="9999999"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onClear} className="px-4 py-2 border rounded shadow">
          クリア
        </button>
        <button type="submit" className="px-4 py-2 border rounded shadow bg-blue-500 text-white">
          OK
        </button>
        <button type="button" onClick={onClose} className="px-4 py-2 border rounded shadow">
          終了
        </button>
      </div>
    </form>
  );
};

export default RangeSelector;