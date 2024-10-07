import React from 'react';

type AccountManagementProps = {
  fiscalYear: number;
  managementDivision: string;
  accountCode: string;
  segment: string;
  onShow: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountManagement: React.FC<AccountManagementProps> = ({
  fiscalYear,
  managementDivision,
  accountCode,
  segment,
  onShow,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white border rounded-md">
      <h2 className="mb-4 text-xl font-bold">科目別性質管理保守</h2>
      <div className="mb-2">
        <label>会計年度: </label>
        <span className="mx-2">{fiscalYear} 年度</span>
      </div>
      <div className="mb-2">
        <label>管理区分: </label>
        <select
          value={managementDivision}
          className="mx-2 p-1 border rounded"
          onChange={() => {}}
        >
          <option value="01">01</option>
          {/* Additional options can be added here */}
        </select>
        <button className="px-3 py-1 bg-gray-300 rounded" onClick={onShow}>
          表示
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 border-b">科目コード</th>
            <th className="py-2 border-b">管理名称</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 border-b">{accountCode}</td>
            <td className="py-2 border-b">{segment}</td>
          </tr>
        </tbody>
      </table>
      <div className="my-4">
        <label className="mr-2">科目</label>
        <input type="text" value={accountCode} className="p-1 border rounded" readOnly />
        <label className="mx-4">セグメント</label>
        <input type="text" value={segment} className="p-1 border rounded" readOnly />
        <button className="ml-4 px-3 py-1 bg-gray-300 rounded" onClick={onSubmit}>
          確定
        </button>
      </div>
      <div>
        <button className="mr-2 px-3 py-1 bg-gray-300 rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="mr-2 px-3 py-1 bg-gray-300 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountManagement;
