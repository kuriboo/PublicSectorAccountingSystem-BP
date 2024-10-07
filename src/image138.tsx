import React from 'react';

type BankGroup = {
  code: string;
  name: string;
};

type GroupManagerProps = {
  title: string;
  description: string;
  bankGroups: BankGroup[];
  onPrevious: () => void;
  onNext: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const GroupManager: React.FC<GroupManagerProps> = ({
  title,
  description,
  bankGroups,
  onPrevious,
  onNext,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-2">指定金融機関グループ</h3>
        <div className="flex items-center mb-4">
          <button className="mr-2 p-1 bg-blue-500 text-white rounded" onClick={onPrevious}>
            前データ
          </button>
          <button className="mr-2 p-1 bg-blue-500 text-white rounded" onClick={onNext}>
            次データ
          </button>
          <button className="mr-2 p-1 bg-gray-300 text-black rounded" onClick={onEdit}>
            編集
          </button>
          <button className="p-1 bg-red-500 text-white rounded" onClick={onDelete}>
            行削除
          </button>
        </div>
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="border p-2">所属コード</th>
              <th className="border p-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {bankGroups.map((group, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{group.code}</td>
                <td className="border p-2">{group.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupManager;
```