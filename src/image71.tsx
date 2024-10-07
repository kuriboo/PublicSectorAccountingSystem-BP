import React from 'react';

// Props type definition
type MasterCreationProps = {
  year: number;
  onSelect: (option: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
  isBasicInfoOnly: boolean;
  setIsBasicInfoOnly: (value: boolean) => void;
};

// MasterCreation component
const MasterCreation: React.FC<MasterCreationProps> = ({
  year,
  onSelect,
  onConfirm,
  onClear,
  onClose,
  isBasicInfoOnly,
  setIsBasicInfoOnly,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-2">次年度マスタ作成</h1>
      <p className="mb-4">
        <span className="mr-2">年度</span>
        <span>{year}</span>
      </p>

      <div className="border p-4 bg-gray-100 rounded mb-4">
        <div className="mb-2">
          <h2 className="font-bold">対象</h2>
          <p className="leading-relaxed">
            &lt;基本情報&gt;<br />
            ・用品マスタ<br />
            ・格付指票<br />
            ・契約管理区分種別名称マスタ<br />
            ・契約管理区分名称マスタ<br />
            ・所属別受付<br />
            ・契約決裁欄マスタ<br />
            ・契約決裁合議者マスタ<br />
          </p>
        </div>

        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={isBasicInfoOnly}
            onChange={() => setIsBasicInfoOnly(!isBasicInfoOnly)}
            className="mr-2"
          />
          基本情報のみ複写する
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterCreation;
