import React from 'react';

// 定義するプロパティの型
interface OfficeFormProps {
  year: string;
  receptionDivision: string;
  officeType: string;
  entries: {
    phone: string;
    fax: string;
    email: string;
    representativeRole: string;
    representative: string;
    managerRole: string;
    manager: string;
  }[];
}

const OfficeForm: React.FC<OfficeFormProps> = ({
  year,
  receptionDivision,
  officeType,
  entries,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex mb-4">
        {/* 年度、受付区分、営業所区分 */}
        <div className="mr-4">
          <label className="block font-bold">年度</label>
          <span>{year}</span>
        </div>
        <div className="mr-4">
          <label className="block font-bold">受付区分</label>
          <span>{receptionDivision}</span>
        </div>
        <div>
          <label className="block font-bold">営業所区分</label>
          <span>{officeType}</span>
        </div>
      </div>
      <div className="bg-white shadow rounded-md p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">電話番号</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FAX番号</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eメール</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">代表者役職名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">代表者名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">担当者役職名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">担当者名</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{entry.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.fax}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.representativeRole}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.representative}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.managerRole}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.manager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfficeForm;
```