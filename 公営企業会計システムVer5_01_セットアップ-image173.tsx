```tsx
import React from 'react';

type Permissions = {
  registration: boolean;
  deletion: boolean;
  reference: boolean;
};

type Props = {
  fiscalYear: string;
  departmentCode: string;
  inChargeCode: string;
  apGroupCode: string;
  operationalDepartmentCode: string;
  permissions: Permissions;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PermissionForm: React.FC<Props> = ({
  fiscalYear,
  departmentCode,
  inChargeCode,
  apGroupCode,
  operationalDepartmentCode,
  permissions,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow p-4">
      <h1 className="text-xl font-bold mb-4">データ権限個別設定マスタ</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            年度
          </label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            所属コード
          </label>
          <input
            type="text"
            value={departmentCode}
            readOnly
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            担当コード
          </label>
          <input
            type="text"
            value={inChargeCode}
            readOnly
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            APグループコード
          </label>
          <input
            type="text"
            value={apGroupCode}
            readOnly
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            操作可能所属コード
          </label>
          <input
            type="text"
            value={operationalDepartmentCode}
            readOnly
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4 border p-4">
          <h2 className="text-sm font-medium text-gray-700">可能フラグ</h2>
          <div className="flex justify-between mt-2">
            <div>登録</div>
            <div>{permissions.registration ? '可能' : '不可'}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>削除</div>
            <div>{permissions.deletion ? '可能' : '不可'}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>参照</div>
            <div>{permissions.reference ? '可能' : '不可'}</div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClear}
            className="bg-gray-200 p-2 rounded"
          >
            クリア
          </button>
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default PermissionForm;
```