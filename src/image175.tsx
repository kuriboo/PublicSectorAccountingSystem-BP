import React from 'react';

// Propsの型定義
type PermissionSettingsProps = {
  year: string;
  departmentCode: string;
  staffCode: string;
  groupCode: string;
  operationCode: string;
  registrationFlag: boolean;
  deleteFlag: boolean;
  referenceFlag: boolean;
  onCancel: () => void;
  onClear: () => void;
  onOk: () => void;
};

// コンポーネント定義
const PermissionSettings: React.FC<PermissionSettingsProps> = ({
  year,
  departmentCode,
  staffCode,
  groupCode,
  operationCode,
  registrationFlag,
  deleteFlag,
  referenceFlag,
  onCancel,
  onClear,
  onOk,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* 年度選択 */}
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <span>{year}</span>
      </div>

      {/* 所属コード */}
      <div className="mb-4">
        <label className="block text-gray-700">所属コード</label>
        <span>{departmentCode}</span>
      </div>

      {/* 担当コード */}
      <div className="mb-4">
        <label className="block text-gray-700">担当コード</label>
        <span>{staffCode}</span>
      </div>

      {/* APグループコード */}
      <div className="mb-4">
        <label className="block text-gray-700">APグループコード</label>
        <span>{groupCode}</span>
      </div>

      {/* 操作可能所属コード */}
      <div className="mb-4">
        <label className="block text-gray-700">操作可能所属コード</label>
        <span>{operationCode}</span>
      </div>

      {/* 可否フラグ */}
      <div className="mb-4">
        <label className="block text-gray-700">可能フラグ</label>
        <div className="flex space-x-4">
          <div>
            <span>登録: </span>
            <span>{registrationFlag ? '可能' : '不可'}</span>
          </div>
          <div>
            <span>削除: </span>
            <span>{deleteFlag ? '可能' : '不可'}</span>
          </div>
          <div>
            <span>参照: </span>
            <span>{referenceFlag ? '可能' : '不可'}</span>
          </div>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          キャンセル
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PermissionSettings;
