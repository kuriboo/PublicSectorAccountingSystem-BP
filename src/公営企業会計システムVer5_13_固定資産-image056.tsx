import React from 'react';

type AssetFormProps = {
  date: string;
  outputUnit: 'year' | 'month';
  division: 'managementNumber' | 'outsideManagement' | 'summary' | 'summaryPrediction';
  assetNumberStart: number;
  assetNumberEnd: number;
  movementMonth: string;
  departmentCodeStart: string;
  departmentNameStart: string;
  departmentCodeEnd: string;
  departmentNameEnd: string;
  acquisitionMonth: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  date,
  outputUnit,
  division,
  assetNumberStart,
  assetNumberEnd,
  movementMonth,
  departmentCodeStart,
  departmentNameStart,
  departmentCodeEnd,
  departmentNameEnd,
  acquisitionMonth,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-purple-700 mb-4">異動予測リスト作成</h2>
      <div className="mb-4">
        <label className="block mb-2">作表年月日</label>
        <input
          type="text"
          value={date}
          className="border rounded w-full py-2 px-3 text-gray-700"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">出力単位</label>
        <div>
          <input type="radio" checked={outputUnit === 'year'} readOnly /> 年単位
          <input type="radio" checked={outputUnit === 'month'} className="ml-4" readOnly /> 月単位
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">作表区分</label>
        <div>
          <input type="radio" checked={division === 'managementNumber'} readOnly /> 管理(資産番号)
          <input type="radio" checked={division === 'outsideManagement'} className="ml-4" readOnly /> 管理以外
          <input type="radio" checked={division === 'summary'} className="ml-4" readOnly /> 管理(とりまとめ)
          <input type="radio" checked={division === 'summaryPrediction'} className="ml-4" readOnly /> 管理(とりまとめ)予測
        </div>
      </div>
      <div className="border-t pt-4">
        <label className="block mb-2">範囲指定</label>
        <div className="mb-4">
          <label className="block mb-2">資産番号</label>
          <div className="flex">
            <input
              type="number"
              value={assetNumberStart}
              className="border rounded w-full py-2 px-3 text-gray-700"
              readOnly
            />
            <span className="mx-2">~</span>
            <input
              type="number"
              value={assetNumberEnd}
              className="border rounded w-full py-2 px-3 text-gray-700"
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">異動年月</label>
          <input
            type="text"
            value={movementMonth}
            className="border rounded w-full py-2 px-3 text-gray-700"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">部門</label>
          <div className="flex">
            <input
              type="text"
              value={`${departmentCodeStart} ${departmentNameStart}`}
              className="border rounded w-full py-2 px-3 text-gray-700"
              readOnly
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={`${departmentCodeEnd} ${departmentNameEnd}`}
              className="border rounded w-full py-2 px-3 text-gray-700"
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">取得年月</label>
          <input
            type="text"
            value={acquisitionMonth}
            className="border rounded w-full py-2 px-3 text-gray-700"
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default AssetForm;
