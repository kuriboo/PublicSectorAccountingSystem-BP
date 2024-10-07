import React, { FC } from 'react';

type InspectionFormProps = {
  year: string;
  receiptNumber: string;
  projectType: string;
  requestNumber: string;
  itemName1: string;
  itemName2: string;
  workLocation: string;
  arrivalDate: string;
  completionDate: string;
  outputCount: number;
  interimInspectionCount: number;
  remarks?: string;
  onSearch: (query: string) => void;
  onAddRow: () => void;
  onRemoveRow: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const InspectionForm: FC<InspectionFormProps> = ({
  year,
  receiptNumber,
  projectType,
  requestNumber,
  itemName1,
  itemName2,
  workLocation,
  arrivalDate,
  completionDate,
  outputCount,
  interimInspectionCount,
  remarks,
  onSearch,
  onAddRow,
  onRemoveRow,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">検査入力</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">年度</label>
          <input type="text" value={year} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">受付番号</label>
          <input type="text" value={receiptNumber} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">業種</label>
          <input type="text" value={projectType} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">請負業者</label>
          <input type="text" value={requestNumber} readOnly className="mt-1 block w-full border rounded" />
        </div>
      </div>

      <div className="py-4">
        <label className="block font-semibold">件名1</label>
        <input type="text" value={itemName1} readOnly className="mt-1 block w-full border rounded" />

        <label className="block font-semibold mt-4">件名2</label>
        <input type="text" value={itemName2} readOnly className="mt-1 block w-full border rounded" />
      </div>

      <div className="grid grid-cols-2 gap-4 py-4">
        <div>
          <label className="block font-semibold">着工年月日</label>
          <input type="text" value={arrivalDate} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">竣工年月日</label>
          <input type="text" value={completionDate} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">出来高回数</label>
          <input type="number" value={outputCount} readOnly className="mt-1 block w-full border rounded" />
        </div>
        <div>
          <label className="block font-semibold">中間検査回数</label>
          <input type="number" value={interimInspectionCount} readOnly className="mt-1 block w-full border rounded" />
        </div>
      </div>

      <div className="py-4">
        <label className="block font-semibold">検索</label>
        <div className="flex">
          <input type="text" placeholder="検索" className="mt-1 block w-full border rounded" />
          <button onClick={() => onSearch('')} className="ml-2 py-2 px-4 text-white bg-blue-500 rounded shadow">検索</button>
        </div>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onAddRow} className="py-2 px-4 bg-blue-500 text-white rounded shadow">行追加</button>
        <button onClick={onRemoveRow} className="py-2 px-4 bg-gray-300 rounded shadow">行削除</button>
        <button onClick={onSubmit} className="py-2 px-4 bg-green-500 text-white rounded shadow">OK</button>
        <button onClick={onClear} className="py-2 px-4 bg-yellow-500 text-white rounded shadow">クリア</button>
        <button onClick={onClose} className="py-2 px-4 bg-red-500 text-white rounded shadow">終了</button>
      </div>
    </div>
  );
};

export default InspectionForm;
