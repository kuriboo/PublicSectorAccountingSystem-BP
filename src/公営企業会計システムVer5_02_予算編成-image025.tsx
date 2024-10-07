import React from 'react';

// TypeScriptの型定義
type EstimateRequestFormProps = {
  year: number;
  impressionType: string;
  count: number;
  fromDepartment: string;
  toDepartment: string;
  fromProjectCode: string;
  toProjectCode: string;
  showTaxDetails: boolean;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const EstimateRequestForm: React.FC<EstimateRequestFormProps> = ({
  year,
  impressionType,
  count,
  fromDepartment,
  toDepartment,
  fromProjectCode,
  toProjectCode,
  showTaxDetails,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* 年度入力 */}
      <div className="mb-4">
        <label className="font-bold">年度</label>
        <input
          type="text"
          value={`平成${year}`}
          readOnly
          className="border w-full p-2 mt-1"
        />
      </div>

      {/* 印字区分 */}
      <div className="mb-4">
        <label className="font-bold">印字区分</label>
        <div className="flex items-center mt-1">
          <input type="radio" name="impressionType" checked={impressionType === '見積要求額'} readOnly />
          <span className="ml-2">見積要求額</span>
          <input type="radio" name="impressionType" checked={impressionType === '査定額'} className="ml-4" readOnly />
          <span className="ml-2">査定額</span>
          <select value={count} readOnly className="ml-4 border p-1">
            <option>{count}</option>
          </select>
        </div>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="font-bold">範囲指定</label>
        <div className="border p-4 mt-1">
          <div className="flex items-center mb-2">
            <button className="border px-4 py-1">所属</button>
            <input type="text" value={fromDepartment} readOnly className="border mx-2 px-2 w-full" />
            <span className="mx-2">~</span>
            <input type="text" value={toDepartment} readOnly className="border px-2 w-full" />
          </div>
          <div className="flex items-center">
            <button className="border px-4 py-1">事業科目</button>
            <input type="text" value={fromProjectCode} readOnly className="border mx-2 px-2 w-full" />
            <span className="mx-2">~</span>
            <input type="text" value={toProjectCode} readOnly className="border px-2 w-full" />
          </div>
        </div>
      </div>

      {/* 消費税率オプション */}
      <div className="mb-4">
        <label>
          <input type="checkbox" checked={showTaxDetails} readOnly />
          <span className="ml-2">消費税率ごとの要求(査定)額明細を表示する</span>
        </label>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default EstimateRequestForm;
