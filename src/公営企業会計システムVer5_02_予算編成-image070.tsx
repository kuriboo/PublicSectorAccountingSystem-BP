import React from 'react';

type Props = {
  year: number;
  accountType: '所属別' | '事業別';
  rangeStart: string;
  rangeEnd: string;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const PlanningDetailForm: React.FC<Props> = ({
  year,
  accountType = '所属別',
  rangeStart,
  rangeEnd,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">実施計画明細表</h1>
      
      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <select className="border p-1">
          {[...Array(100).keys()].map((i) => (
            <option key={i} value={year - i}>
              平成{year - i}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <span className="mr-4">帳票種別:</span>
        <label className="mr-2">
          <input
            type="radio"
            name="accountType"
            value="所属別"
            checked={accountType === '所属別'}
            className="mr-1"
            readOnly
          />
          所属別
        </label>
        <label>
          <input
            type="radio"
            name="accountType"
            value="事業別"
            checked={accountType === '事業別'}
            className="mr-1"
            readOnly
          />
          事業別
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">範囲指定:</label>
        <div className="flex items-center">
          <span>所属</span>
          <input
            type="text"
            value={rangeStart}
            className="border ml-2 mr-2 p-1 w-24"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEnd}
            className="border ml-2 p-1 w-24"
            readOnly
          />
        </div>

        <div className="flex items-center mt-2">
          <span>事業科目</span>
          <input
            type="text"
            value={rangeStart}
            className="border ml-2 mr-2 p-1 w-24"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEnd}
            className="border ml-2 p-1 w-24"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <p>処理概要</p>
        <p className="text-gray-600">
          指定した年度から5年分の実施計画データを出力します。
          施策内訳の内容を出力します。
        </p>
      </div>

      <div className="flex justify-end gap-2">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-300 px-4 py-2" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-300 px-4 py-2" onClick={onFinish}>
          終了
        </button>
      </div>
    </div>
  );
};

export default PlanningDetailForm;
```