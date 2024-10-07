import React from 'react';

// TypeScriptの型定義
interface DepositTypeMasterProps {
  depositTypes: { code: number; name: string }[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const DepositTypeMaster: React.FC<DepositTypeMasterProps> = ({
  depositTypes,
  onRegister,
  onEdit,
  onDelete,
  onCancel,
  onClear,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold mb-4">預金種別マスタ</h1>
      
      {/* ラジオボタンエリア */}
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" name="action" /> 登録
        </label>
        <label className="mr-4">
          <input type="radio" name="action" /> 訂正
        </label>
        <label>
          <input type="radio" name="action" /> 削除
        </label>
      </div>
      
      {/* 入力フォーム */}
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-1">預金種別コード</label>
          <input type="text" className="border p-1" />
        </div>
        <div>
          <label className="block mb-1">名称</label>
          <input type="text" className="border p-1" />
        </div>
      </div>

      {/* ボタン */}
      <div className="mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white p-2 mr-2">
          登録
        </button>
        <button onClick={onEdit} className="bg-blue-500 text-white p-2 mr-2">
          編集
        </button>
        <button onClick={onDelete} className="bg-blue-500 text-white p-2">
          行削除
        </button>
      </div>

      {/* テーブル */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-300">
            <th className="border p-2">コード</th>
            <th className="border p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {depositTypes.map((type) => (
            <tr key={type.code}>
              <td className="border p-2 text-center">{type.code}</td>
              <td className="border p-2">{type.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 下部ボタン */}
      <div className="mt-4 flex justify-end">
        <button onClick={onCancel} className="bg-gray-400 text-white p-2 mr-2">
          終了
        </button>
        <button onClick={onClear} className="bg-gray-400 text-white p-2">
          クリア
        </button>
      </div>
    </div>
  );
};

export default DepositTypeMaster;
