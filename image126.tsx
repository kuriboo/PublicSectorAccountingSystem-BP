```tsx
import React from 'react';

type MasterDataExportProps = {
  fiscalYear: string;
  date: string;
  title: string;
  description: string;
};

const MasterDataExport: React.FC<MasterDataExportProps> = ({
  fiscalYear,
  date,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      {/* Header */}
      <div className="bg-blue-200 p-2 rounded-t-md">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      {/* Content */}
      <div className="bg-white p-4 border rounded-b-md">
        <div className="mb-4">
          <span className="font-semibold">当期会計年度: </span>
          <span>{fiscalYear}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">日付: </span>
          <span>{date}</span>
        </div>
        <p>{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          OK
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterDataExport;
```