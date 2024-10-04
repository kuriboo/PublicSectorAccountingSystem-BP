import React from 'react';

type InitialValueMasterProps = {
  year: string;
  menu: string;
  rows: {
    code: string;
    title: string;
    id: number;
    initialValue: string;
    content: string;
    individualSetting: boolean;
    hidden: boolean;
  }[];
  onIndividualSettingClick?: () => void;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onCloseClick?: () => void;
};

const InitialValueMaster: React.FC<InitialValueMasterProps> = ({
  year,
  menu,
  rows,
  onIndividualSettingClick,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="mr-2">年度：</span>
          <span>{year}</span>
        </div>
        <div>
          <span className="mr-2">メニュー：</span>
          <span>{menu}</span>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-500 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">画面CD</th>
            <th className="border border-gray-500 p-2">画面タイトル</th>
            <th className="border border-gray-500 p-2">ID</th>
            <th className="border border-gray-500 p-2">初期値</th>
            <th className="border border-gray-500 p-2">内容</th>
            <th className="border border-gray-500 p-2">個別設定</th>
            <th className="border border-gray-500 p-2">非表示</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-500 p-2">{row.code}</td>
              <td className="border border-gray-500 p-2">{row.title}</td>
              <td className="border border-gray-500 p-2">{row.id}</td>
              <td className="border border-gray-500 p-2">{row.initialValue}</td>
              <td className="border border-gray-500 p-2">{row.content}</td>
              <td className="border border-gray-500 p-2 text-center">
                <input type="checkbox" checked={row.individualSetting} readOnly />
              </td>
              <td className="border border-gray-500 p-2 text-center">
                <input type="checkbox" checked={row.hidden} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-start mb-4">
        <button
          className="mr-2 bg-gray-300 px-4 py-2 rounded shadow"
          onClick={onIndividualSettingClick}
        >
          個別設定
        </button>
      </div>

      <div className="flex justify-end">
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded shadow" onClick={onOkClick}>
          OK
        </button>
        <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded shadow" onClick={onClearClick}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded shadow" onClick={onCloseClick}>
          終了
        </button>
      </div>
    </div>
  );
};

export default InitialValueMaster;