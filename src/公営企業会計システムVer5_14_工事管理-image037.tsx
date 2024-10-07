import React from 'react'

// 型定義
type KobetsuFormProps = {
  initialYear: string;
  initialKotoban: string;
  initialBusinessId: string;
  initialDepartmentNumber: string;
  initialAffiliation: string;
  onSubmit?: (data: { year: string; kotoban: string; businessId: string; departmentNumber: string; affiliation: string }) => void;
  onClear?: () => void;
  onEnd?: () => void;
};

const KobetsuForm: React.FC<KobetsuFormProps> = ({
  initialYear,
  initialKotoban,
  initialBusinessId,
  initialDepartmentNumber,
  initialAffiliation,
  onSubmit,
  onClear,
  onEnd
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">工事台帳作成</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            year: initialYear,
            kotoban: initialKotoban,
            businessId: initialBusinessId,
            departmentNumber: initialDepartmentNumber,
            affiliation: initialAffiliation
          };
          if (onSubmit) onSubmit(data);
        }}
      >
        <div className="grid grid-cols-3 gap-4 mb-4">
          <label>
            工事台帳年度
            <input
              type="text"
              defaultValue={initialYear}
              className="border rounded px-2 py-1"
            />
          </label>
          <label>
            工事台帳番号
            <input
              type="text"
              defaultValue={initialKotoban}
              className="border rounded px-2 py-1"
            />
            〜
            <input
              type="text"
              className="border rounded px-2 py-1"
            />
          </label>
          <label>
            事業科目
            <input
              type="text"
              defaultValue={initialBusinessId}
              className="border rounded px-2 py-1"
            />
          </label>
          <label>
            工区番号
            <input
              type="text"
              defaultValue={initialDepartmentNumber}
              className="border rounded px-2 py-1"
            />
          </label>
          <label>
            所属
            <input
              type="text"
              defaultValue={initialAffiliation}
              className="border rounded px-2 py-1"
            />
            〜
            <input
              type="text"
              className="border rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            OK
          </button>
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={onEnd}
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default KobetsuForm;
```