import React from 'react';

type Props = {
  assetNumber: string;
  removalDate: string;
  division: string;
  description: string;
  assetName: string;
  location: string;
  summary: string;
  acquisitionDate: string;
  serviceLife: number;
  depreciation: number;
  sections: string[];
  values: {
    [key: string]: number;
  };
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
  onInputChange: (field: string, value: string) => void;
};

const AssetRemovalForm: React.FC<Props> = ({
  assetNumber,
  removalDate,
  division,
  description,
  assetName,
  location,
  summary,
  acquisitionDate,
  serviceLife,
  depreciation,
  sections,
  values,
  onConfirm,
  onCancel,
  onClear,
  onInputChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center bg-purple-200 p-2 rounded-md">
        <div>資産番号</div>
        <input
          type="text"
          value={assetNumber}
          onChange={(e) => onInputChange('assetNumber', e.target.value)}
          className="border rounded px-2"
        />
        <div>除却年月日</div>
        <input
          type="date"
          value={removalDate}
          onChange={(e) => onInputChange('removalDate', e.target.value)}
          className="border rounded px-2"
        />
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <input
            type="radio"
            value="一部除却"
            checked={division === '一部除却'}
            onChange={(e) => onInputChange('division', e.target.value)}
          />
          <span className="ml-1">一部除却</span>
          <input
            type="radio"
            value="全除却"
            checked={division === '全除却'}
            onChange={(e) => onInputChange('division', e.target.value)}
          />
          <span className="ml-1">全除却</span>
        </div>
        <input
          type="text"
          value={description}
          onChange={(e) => onInputChange('description', e.target.value)}
          placeholder="異動摘要"
          className="w-full border rounded mt-2 px-2"
        />
      </div>

      <div className="mt-4">
        <div>資産名称</div>
        <input
          type="text"
          value={assetName}
          onChange={(e) => onInputChange('assetName', e.target.value)}
          className="w-full border rounded mt-1 px-2"
        />
      </div>

      <div className="mt-4">
        <div>所在地</div>
        <input
          type="text"
          value={location}
          onChange={(e) => onInputChange('location', e.target.value)}
          className="w-full border rounded mt-1 px-2"
        />
      </div>

      <div className="mt-4">
        <div>摘要</div>
        <input
          type="text"
          value={summary}
          onChange={(e) => onInputChange('summary', e.target.value)}
          className="w-full border rounded mt-1 px-2"
        />
      </div>

      <div className="mt-4 flex items-center">
        <div>取得年月日</div>
        <input
          type="date"
          value={acquisitionDate}
          onChange={(e) => onInputChange('acquisitionDate', e.target.value)}
          className="border rounded ml-2 px-2"
        />
      </div>

      <div className="mt-4 flex items-center">
        <div>耐用年数</div>
        <input
          type="number"
          value={serviceLife}
          onChange={(e) => onInputChange('serviceLife', e.target.value)}
          className="border rounded ml-2 px-2 w-16"
        />
      </div>

      <div className="mt-4 flex items-center">
        <div>減価償却額</div>
        <input
          type="number"
          value={depreciation}
          onChange={(e) => onInputChange('depreciation', e.target.value)}
          className="border rounded ml-2 px-2 w-20"
        />
      </div>

      <div className="mt-4">
        {sections.map((section, index) => (
          <div key={index} className="border-b py-2">
            <div>{section}</div>
            <input
              type="number"
              value={values[section]}
              onChange={(e) => onInputChange(section, e.target.value)}
              className="border rounded mt-1 px-2 w-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetRemovalForm;
```