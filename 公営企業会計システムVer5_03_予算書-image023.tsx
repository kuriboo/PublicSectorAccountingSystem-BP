```tsx
import React from 'react';

// Props interface
interface RegisterFormProps {
  title: string;
  year: string;
  budgetNo: string;
  budgetItem: string;
  items: { number: number; description: string }[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDisplay: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  title,
  year,
  budgetNo,
  budgetItem,
  items,
  onRegister,
  onEdit,
  onDelete,
  onDisplay
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="my-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">年度:</span>
          <span className="font-bold">{year}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">予算款:</span>
          <span className="font-bold">{budgetNo}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">予算項:</span>
          <span className="font-bold">{budgetItem}</span>
        </div>
      </div>
      
      <div className="flex mb-4 space-x-2">
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={onRegister}>登録</button>
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={onEdit}>訂正</button>
        <button className="px-2 py-1 bg-red-200 rounded" onClick={onDelete}>行削除</button>
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={onDisplay}>表示</button>
      </div>

      <table className="w-full table-fixed border-collapse border">
        <thead>
          <tr>
            <th className="border px-2 py-1">No.</th>
            <th className="border px-2 py-1">備考</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.number}>
              <td className="border px-2 py-1 text-center">{item.number}</td>
              <td className="border px-2 py-1">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex mt-4 justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded">終了</button>
      </div>
    </div>
  );
};

export default RegisterForm;
```