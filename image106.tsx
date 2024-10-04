```tsx
import React from 'react';

// Propsの型定義
type AnnotationFormProps = {
  year: string;
  code: string;
  name: string;
  onPrevious: () => void;
  onNext: () => void;
  onConfirm: () => void;
};

const AnnotationForm: React.FC<AnnotationFormProps> = ({
  year,
  code,
  name,
  onPrevious,
  onNext,
  onConfirm,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* 年度選択 */}
      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <input type="text" value={year} readOnly className="border rounded px-2 py-1" />
      </div>

      {/* 注記種別名称 */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">注記種別名称</h2>
        <div className="flex items-center mb-2">
          <label className="mr-2">コード:</label>
          <input type="text" value={code} readOnly className="border rounded px-2 py-1 mr-4" />
          <button onClick={onPrevious} className="mr-2 px-4 py-1 bg-gray-200 rounded">
            前データ
          </button>
          <button onClick={onNext} className="px-4 py-1 bg-gray-200 rounded">
            次データ
          </button>
        </div>
        <div>
          <label className="mr-2">名称:</label>
          <input type="text" value={name} readOnly className="border rounded px-2 py-1 w-full" />
        </div>
      </div>

      {/* 確定ボタン */}
      <div className="mt-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
          確定
        </button>
      </div>
    </div>
  );
};

export default AnnotationForm;
```