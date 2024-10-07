import React from 'react';

type DataMigrationComponentProps = {
  year: string;
  businessTypes: { code: string; name: string }[];
  onSubmit: (type: string, serialNumber?: string, facility?: string) => void;
};

const DataMigrationComponent: React.FC<DataMigrationComponentProps> = ({ year, businessTypes, onSubmit }) => {
  const [selectedBusinessType, setSelectedBusinessType] = React.useState<string>(businessTypes[0].code);
  const [serialNumber, setSerialNumber] = React.useState<string>('');
  const [facility, setFacility] = React.useState<string>('');
  const [dataIntegrationType, setDataIntegrationType] = React.useState<string>('corporate');

  const handleSubmit = () => {
    onSubmit(dataIntegrationType, dataIntegrationType === 'corporate' ? serialNumber : undefined, facility);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <span className="font-semibold">年度: {year}</span>
      </div>
      <div className="mb-4">
        <select
          className="border p-2 rounded-md"
          value={selectedBusinessType}
          onChange={(e) => setSelectedBusinessType(e.target.value)}
        >
          {businessTypes.map((type) => (
            <option key={type.code} value={type.code}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            value="corporate"
            checked={dataIntegrationType === 'corporate'}
            onChange={() => setDataIntegrationType('corporate')}
            className="mr-2"
          />
          <span>企業債データを取り込みます。</span>
        </div>
        {dataIntegrationType === 'corporate' && (
          <div className="flex space-x-4 mt-2">
            <input
              type="text"
              placeholder="表番号"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="施設"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              className="border p-2 rounded-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSubmit}
            >
              取込
            </button>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            value="simpleWaterworks"
            checked={dataIntegrationType === 'simpleWaterworks'}
            onChange={() => setDataIntegrationType('simpleWaterworks')}
            className="mr-2"
          />
          <span>簡易水道データを取り込みます。</span>
        </div>
        {dataIntegrationType === 'simpleWaterworks' && (
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            取込
          </button>
        )}
      </div>
    </div>
  );
};

export default DataMigrationComponent;
