import React from 'react';

// TypeScriptの型定義
interface EmployeeData {
  jobType: string;
  count: number;
}

interface AnnotationData {
  code: string;
  name: string;
}

interface BusinessInfoProps {
  businessName: string;
  kana: string;
  employeeData: EmployeeData[];
  annotationData: AnnotationData[];
  onCancel: () => void;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  businessName,
  kana,
  employeeData,
  annotationData,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-lg">業者名 {businessName}</h2>
          <p>ぎょうせい: {kana}</p>
        </div>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
      <div className="flex mt-4">
        <table className="w-1/2 bg-gray-100 border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="border p-2">職員種別</th>
              <th className="border p-2">職員数</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{employee.jobType}</td>
                <td className="border p-2 text-center">{employee.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-1/2 bg-gray-100 border-collapse ml-4">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="border p-2">注記識別</th>
              <th className="border p-2">注記名称</th>
            </tr>
          </thead>
          <tbody>
            {annotationData.map((annotation, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{annotation.code}</td>
                <td className="border p-2">{annotation.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessInfo;