import React from 'react';

interface InputDetailProps {
  fiscalYear: string;
  category: string;
  subCategory: string;
  revenueName: string;
  handleRegister: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}

const InputDetail: React.FC<InputDetailProps> = ({
  fiscalYear,
  category,
  subCategory,
  revenueName,
  handleRegister,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center bg-blue-100 p-2 rounded">
        <h1 className="text-lg font-semibold">資本的収支明細書備考入力</h1>
        <div>
          <button onClick={handleRegister} className="mx-2 bg-blue-500 text-white p-1 rounded">登録</button>
          <button onClick={handleEdit} className="mx-2 bg-yellow-400 text-white p-1 rounded">訂正</button>
          <button onClick={handleDelete} className="mx-2 bg-red-500 text-white p-1 rounded">削除</button>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="mr-2">年度</span>
        <input type="text" value={fiscalYear} className="border p-1 rounded" readOnly />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>
          <span>款</span>
          <input type="text" value={category} className="border p-1 rounded" readOnly />
        </div>
        <div>
          <span>項目</span>
          <input type="text" value={subCategory} className="border p-1 rounded" readOnly />
        </div>
        <div>
          <span>備考名称</span>
          <input type="text" value={revenueName} className="border p-1 rounded" readOnly />
        </div>
      </div>
      <div className="mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="border p-2">印字区分</th>
              <th className="border p-2">印字区分名称</th>
              <th className="border p-2">印字名称</th>
              <th className="border p-2">印字金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-center">01</td>
              <td className="border p-2 text-center">備考名称: 金額印字</td>
              <td className="border p-2 text-center">{revenueName}</td>
              <td className="border p-2 text-center">5,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p>処理概要</p>
        <p className="text-sm">資本的収支明細書に印字する備考の登録を行います。</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="mx-2 bg-gray-300 p-1 rounded">OK</button>
        <button className="mx-2 bg-gray-300 p-1 rounded">クリア</button>
        <button className="mx-2 bg-gray-300 p-1 rounded">終了</button>
      </div>
    </div>
  );
};

export default InputDetail;