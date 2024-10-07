import React from 'react';

// 型定義
type MasterType = {
  code: string;
  name: string;
};

type Props = {
  title: string;
  masterTypes: MasterType[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const MasterComponent: React.FC<Props> = ({
  title,
  masterTypes,
  onRegister,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      {/* タイトル */}
      <h1 className="text-lg font-bold mb-4">{title}</h1>

      {/* マスタ種別 */}
      <div className="mb-4">
        <label className="block font-semibold">マスタ種別</label>
        <div className="flex space-x-4">
          {['異動区分マスタ', '借入方科目区分マスタ', '予測入力区分マスタ', '書式区分マスタ'].map((type) => (
            <label key={type} className="flex items-center">
              <input type="radio" name="masterType" className="mr-2" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* 異動区分コードと名称入力 */}
      <div className="mb-4">
        <label className="block font-semibold">異動区分コード</label>
        <input type="text" className="border p-2 w-full mb-2" />
        <label className="block font-semibold">名称</label>
        <input type="text" className="border p-2 w-full" />
      </div>

      {/* ボタン */}
      <div className="mb-4 flex space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">登録</button>
        <button onClick={onEdit} className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">削除</button>
      </div>

      {/* マスタデータ表示テーブル */}
      <div className="mb-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-200 px-4 py-2">異動区分コード</th>
              <th className="border border-gray-200 px-4 py-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {masterTypes.map((type) => (
              <tr key={type.code} className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2 text-center">{type.code}</td>
                <td className="border border-gray-200 px-4 py-2">{type.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OK、クリア、終了ボタン */}
      <div className="flex space-x-2">
        <button onClick={onOk} className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default MasterComponent;
