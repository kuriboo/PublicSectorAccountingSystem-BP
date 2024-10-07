// Import necessary modules
import React from 'react';

interface Props {
  fiscalYear: number;
  departmentCode: string;
  departmentName: string;
  staffCode: string;
  staffName: string;
  apGroupCode: string;
  onApply?: () => void;
  onClear?: () => void;
  onExit?: () => void;
}

const AuthorizationComponent: React.FC<Props> = ({
  fiscalYear,
  departmentCode,
  departmentName,
  staffCode,
  staffName,
  apGroupCode,
  onApply,
  onClear,
  onExit,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-purple-200 p-2 rounded text-center font-bold">アプリケーション権限マスタ</div>

      <div className="mt-4">
        <label className="block">
          年度
          <input
            type="number"
            value={fiscalYear}
            className="border border-gray-400 p-1 ml-2"
            readOnly
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="block">
          所属コード
          <input
            type="text"
            value={departmentCode}
            className="border border-gray-400 p-1 ml-2"
            readOnly
          />
          {departmentName}
        </label>
      </div>

      <div className="mt-4">
        <label className="block">
          担当コード
          <input
            type="text"
            value={staffCode}
            className="border border-gray-400 p-1 ml-2"
            readOnly
          />
          {staffName}
        </label>
      </div>

      <div className="mt-4">
        <label className="block">
          APグループコード
          <input
            type="text"
            value={apGroupCode}
            className="border border-gray-400 p-1 ml-2"
            readOnly
          />
        </label>
      </div>

      <div className="mt-6">
        <table className="table-auto w-full text-center border">
          <thead>
            <tr>
              <th className="border px-4 py-2">権限区分</th>
              <th className="border px-4 py-2">なし</th>
              <th className="border px-4 py-2">全データ</th>
              <th className="border px-4 py-2">所属大分類データ</th>
              <th className="border px-4 py-2">所属中分類データ</th>
              <th className="border px-4 py-2">所属小分類データ</th>
              <th className="border px-4 py-2">個別設定</th>
            </tr>
          </thead>
          <tbody>
            {['登録', '削除', '参照'].map((category) => (
              <tr key={category}>
                <td className="border px-4 py-2">{category}</td>
                {Array(5).fill(0).map((_, i) => (
                  <td key={i} className="border px-4 py-2">
                    <input type="radio" name={category} disabled />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-gray-200 p-2 rounded" onClick={onApply}>OK</button>
        <button className="bg-gray-200 p-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-200 p-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default AuthorizationComponent;
