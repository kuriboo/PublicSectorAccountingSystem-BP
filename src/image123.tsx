// src/components/UnitMasterForm.tsx

import React from 'react';

type UnitMasterFormProps = {
  title: string;
  fiscalYear: string;
  managerCode: string;
  unitTypeCode: string;
  unitCode: string;
  referenceCode?: string;
  unitName: string;
  unitSpecification: string;
  unit: string;
  taxRateCode: string;
  taxRate: string;
  onRegister: () => void;
  onModify: () => void;
  onDelete: () => void;
};

const UnitMasterForm: React.FC<UnitMasterFormProps> = ({
  title,
  fiscalYear,
  managerCode,
  unitTypeCode,
  unitCode,
  referenceCode,
  unitName,
  unitSpecification,
  unit,
  taxRateCode,
  taxRate,
  onRegister,
  onModify,
  onDelete
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="border-b border-gray-300 mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">年度: {fiscalYear}</label>
          <label className="block font-medium">管理者: {managerCode}</label>
          <label className="block font-medium">単価性質: {unitTypeCode}</label>
          <label className="block font-medium">単価: {unitCode}</label>
          <label className="block font-medium">参照コード: {referenceCode}</label>
        </div>
        <div>
          <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">登録</button>
          <button onClick={onModify} className="bg-green-500 text-white px-4 py-2 rounded mr-2">訂正</button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">削除</button>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-white shadow">
        <div className="mb-4">
          <label className="block font-medium">単価名称: {unitName}</label>
          <label className="block font-medium">単価規格: {unitSpecification}</label>
        </div>
        <div className="mb-4">
          <label className="block font-medium">単位: {unit}</label>
          <label className="block font-medium">消費税率: {taxRateCode} {taxRate} %</label>
        </div>
      </div>
    </div>
  );
};

export default UnitMasterForm;
```