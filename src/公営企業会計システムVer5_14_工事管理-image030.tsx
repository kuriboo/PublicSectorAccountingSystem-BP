import React from 'react';

// TypeScriptの型定義
type DetailRow = {
  materialName: string;
  specName: string;
  quantity: string;
  unit: string;
  installYear: string;
  roadNumber: string;
  taxAmount: string;
};

type EngineeringDetailProps = {
  accountYear: string;
  accountNumber: string;
  classification: string;
  projectName: string;
  location: string;
  details: DetailRow[];
  onDetailEdit?: () => void;
  onDetailDelete?: () => void;
  onCalculateBase?: () => void;
};

// 再利用可能コンポーネント定義
const EngineeringDetail: React.FC<EngineeringDetailProps> = ({
  accountYear,
  accountNumber,
  classification,
  projectName,
  location,
  details,
  onDetailEdit,
  onDetailDelete,
  onCalculateBase,
}) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between mb-4">
        <div>
          <p>工事台帳年度: {accountYear}</p>
          <p>工事台帳番号: {accountNumber}</p>
          <p>工種目分類: {classification}</p>
          <p>工事名称: {projectName}</p>
          <p>工事場所: {location}</p>
        </div>
      </div>
      <div className="flex space-x-2 mb-2">
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={onDetailEdit}
        >
          明細編集
        </button>
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={onDetailDelete}
        >
          明細削除
        </button>
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={onCalculateBase}
        >
          積算基礎
        </button>
      </div>
      <table className="w-full table-auto bg-white text-left">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">材料名称</th>
            <th className="px-4 py-2">規格名称</th>
            <th className="px-4 py-2">数量</th>
            <th className="px-4 py-2">単位</th>
            <th className="px-4 py-2">布設年度</th>
            <th className="px-4 py-2">路線番号</th>
            <th className="px-4 py-2">税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{detail.materialName}</td>
              <td className="border px-4 py-2">{detail.specName}</td>
              <td className="border px-4 py-2">{detail.quantity}</td>
              <td className="border px-4 py-2">{detail.unit}</td>
              <td className="border px-4 py-2">{detail.installYear}</td>
              <td className="border px-4 py-2">{detail.roadNumber}</td>
              <td className="border px-4 py-2">{detail.taxAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default EngineeringDetail;
```