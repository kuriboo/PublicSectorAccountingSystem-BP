import React from 'react';

// 型定義
type DocumentProps = {
  fiscalYear: string;
  documentNumber: number;
  previousDate: string;
  department: string;
  applicant: string;
  description: string;
  partner: string;
  amount: number;
  customContent: string[];
  onReissue: () => void;
  onCancel: () => void;
};

const DocumentComponent: React.FC<DocumentProps> = ({
  fiscalYear,
  documentNumber,
  previousDate,
  department,
  applicant,
  description,
  partner,
  amount,
  customContent,
  onReissue,
  onCancel,
}) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-8">
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold">年度: {fiscalYear}</p>
          <p className="text-lg font-bold">何書番号: {documentNumber}</p>
        </div>
        <div className="w-1/3 p-2 border rounded">
          <p className="font-bold">自由設計内容</p>
          <ul>
            {customContent.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-4">
        <p>前渡伺処理日: {previousDate}</p>
        <p>起案所属: {department}</p>
        <p>起案者: {applicant}</p>
        <p>摘要: {description}</p>
        <p>相手先: {partner}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold">資金前渡額</p>
        <p className="text-xl">{amount.toLocaleString()} 円</p>
      </div>

      <table className="w-full my-4 text-center border border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th className="border px-2 py-1">仕訳節</th>
            <th className="border px-2 py-1">仕訳明細</th>
            <th className="border px-2 py-1">資金前渡額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">営業前払金</td>
            <td className="border px-2 py-1">営業前払金</td>
            <td className="border px-2 py-1">{amount.toLocaleString()} 円</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end space-x-4 mt-8">
        <button
          onClick={onReissue}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          再発行
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DocumentComponent;
```