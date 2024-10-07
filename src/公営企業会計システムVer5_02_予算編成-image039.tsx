import React from 'react';

// TypeScriptの型定義
type BusinessAssessmentProps = {
  year: number;
  determinationCount: number;
  data: {
    code: string;
    department: string;
    detail: string;
    amount: number;
  }[];
  onRegister: () => void;
  onEdit: () => void;
};

const BusinessAssessment: React.FC<BusinessAssessmentProps> = ({
  year,
  determinationCount,
  data,
  onRegister,
  onEdit
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-center font-bold text-xl mb-4">当初事業別査定登録</h2>

      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="mr-2">年度</span>
          <input
            type="number"
            value={year}
            className="border rounded px-2 py-1 mr-4"
            readOnly
          />
          <span className="mr-2">査定</span>
          <input
            type="number"
            value={determinationCount}
            className="border rounded px-2 py-1"
            readOnly
          />
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onRegister}
          >
            登録
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onEdit}
          >
            訂正
          </button>
        </div>
      </div>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-purple-200">
            <th>科目コード</th>
            <th>節</th>
            <th>細節</th>
            <th>税込金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center border-b">
              <td>{item.code}</td>
              <td>{item.department}</td>
              <td>{item.detail}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BusinessAssessment;
```