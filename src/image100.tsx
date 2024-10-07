import React from 'react';

type BusinessMasterProps = {
  fiscalYear: string;
  section: string;
  applicantName: string;
  shortName: string;
  registrationDate: string;
  searchKana: string;
  registrationType: '本登録' | '仮登録';
  capital: number;
  employeesByType: number;
  totalEmployees: number;
  operatingYears: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BusinessMaster: React.FC<BusinessMasterProps> = ({
  fiscalYear,
  section,
  applicantName,
  shortName,
  registrationDate,
  searchKana,
  registrationType,
  capital,
  employeesByType,
  totalEmployees,
  operatingYears,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">年度:</label>
        <select className="mt-1 block w-full">
          <option>{fiscalYear}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">受付区分:</label>
        <select className="mt-1 block w-full">
          <option>{section}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">業者名:</label>
        <input type="text" className="mt-1 block w-full" value={applicantName} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">略名:</label>
        <input type="text" className="mt-1 block w-full" value={shortName} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">変更届出日:</label>
        <input type="text" className="mt-1 block w-full" value={registrationDate} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">検索カナ:</label>
        <input type="text" className="mt-1 block w-full" value={searchKana} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">登録区分:</label>
        <div className="mt-1">
          <label className="mr-4">
            <input type="radio" checked={registrationType === '本登録'} readOnly /> 本登録
          </label>
          <label>
            <input type="radio" checked={registrationType === '仮登録'} readOnly /> 仮登録
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">資本金:</label>
        <input type="text" className="mt-1 block w-full" value={`${capital} 千円`} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">区分別職員数:</label>
        <input type="text" className="mt-1 block w-full" value={employeesByType} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">総職員数:</label>
        <input type="text" className="mt-1 block w-full" value={totalEmployees} readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">営業年数:</label>
        <input type="text" className="mt-1 block w-full" value={operatingYears} readOnly />
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BusinessMaster;
```