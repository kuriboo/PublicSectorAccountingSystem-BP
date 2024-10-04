import React from 'react';

// TypeScript型定義
interface RangeInputProps {
  label: string;
  startValue: string;
  endValue: string;
  onChangeStart: (value: string) => void;
  onChangeEnd: (value: string) => void;
}

// 範囲入力コンポーネント
const RangeInput: React.FC<RangeInputProps> = ({
  label,
  startValue,
  endValue,
  onChangeStart,
  onChangeEnd
}) => {
  return (
    <div className="flex items-center mb-2">
      <span className="w-32 text-right mr-2">{label}</span>
      <input
        type="text"
        value={startValue}
        onChange={(e) => onChangeStart(e.target.value)}
        className="border rounded-md p-1 w-20 text-center"
      />
      <span className="mx-2">~</span>
      <input
        type="text"
        value={endValue}
        onChange={(e) => onChangeEnd(e.target.value)}
        className="border rounded-md p-1 w-20 text-center"
      />
    </div>
  );
};

// メインコンポーネント
interface DataPermissionProps {
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const DataPermission: React.FC<DataPermissionProps> = ({
  onOk,
  onClear,
  onExit
}) => {
  const [departmentStart, setDepartmentStart] = React.useState("0000000");
  const [departmentEnd, setDepartmentEnd] = React.useState("9999999");
  const [codeStart, setCodeStart] = React.useState("000");
  const [codeEnd, setCodeEnd] = React.useState("999");
  const [groupStart, setGroupStart] = React.useState("0000000");
  const [groupEnd, setGroupEnd] = React.useState("9999999");
  const [locationStart, setLocationStart] = React.useState("0000000");
  const [locationEnd, setLocationEnd] = React.useState("9999999");

  return (
    <div className="p-8 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">データ権限個別設定マスタリスト作成</h1>
      <div className="p-4 border rounded-md mb-4">
        <RangeInput
          label="所属"
          startValue={departmentStart}
          endValue={departmentEnd}
          onChangeStart={setDepartmentStart}
          onChangeEnd={setDepartmentEnd}
        />
        <RangeInput
          label="担当コード"
          startValue={codeStart}
          endValue={codeEnd}
          onChangeStart={setCodeStart}
          onChangeEnd={setCodeEnd}
        />
        <RangeInput
          label="APグループコード"
          startValue={groupStart}
          endValue={groupEnd}
          onChangeStart={setGroupStart}
          onChangeEnd={setGroupEnd}
        />
        <RangeInput
          label="操作可能所属"
          startValue={locationStart}
          endValue={locationEnd}
          onChangeStart={setLocationStart}
          onChangeEnd={setLocationEnd}
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataPermission;