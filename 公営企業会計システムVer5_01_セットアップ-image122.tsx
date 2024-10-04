```tsx
import React from 'react';

// TypeScriptの型定義
interface UnitMasterProps {
  year: string;
  managementNumber: string;
  manager: string;
  unitType: string;
  subclassification: string;
  code: string;
  name: string;
  abbreviation: string;
  unit: string;
  taxRate: string;
  includeTax: boolean;
  applicableDate: string;
  price: string;
}

const UnitMaster: React.FC<UnitMasterProps> = ({
  year,
  managementNumber,
  manager,
  unitType,
  subclassification,
  code,
  name,
  abbreviation,
  unit,
  taxRate,
  includeTax,
  applicableDate,
  price,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">単価マスタ</h1>
        <button className="bg-blue-500 text-white py-1 px-3 rounded">参照</button>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 左側の入力エリア */}
          <div>
            <div>年度: {year}</div>
            <div>管理番号: {managementNumber}</div>
            <div>管理者: {manager}</div>
            <div>単価性質: {unitType}</div>
            <div>単価性質分類: {subclassification}</div>
            <div>単価: {code}</div>
          </div>
          {/* 右側の入力エリア */}
          <div>
            <div>コード: {code}</div>
            <div>名称: {name}</div>
            <div>略名: {abbreviation}</div>
            <div>単位: {unit}</div>
            <div>消費税率: {taxRate}</div>
            <div>税込/抜: {includeTax ? '込' : '抜'}</div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">単価設定</h2>
          <table className="w-full mt-2 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2">適用開始年月日</th>
                <th className="border border-gray-300 px-2">単価</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2">{applicableDate}</td>
                <td className="border border-gray-300 px-2">{price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-gray-300 py-1 px-3 rounded mr-2">前データ</button>
          <button className="bg-gray-300 py-1 px-3 rounded">次データ</button>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-green-500 text-white py-1 px-3 rounded mr-2">OK</button>
          <button className="bg-yellow-500 text-white py-1 px-3 rounded mr-2">クリア</button>
          <button className="bg-red-500 text-white py-1 px-3 rounded">終了</button>
        </div>
      </div>
    </div>
  );
};

export default UnitMaster;
```