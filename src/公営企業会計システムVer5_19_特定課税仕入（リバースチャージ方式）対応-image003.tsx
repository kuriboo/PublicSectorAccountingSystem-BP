import React from 'react';

type Props = {
  title?: string;
  fiscalYear?: string;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const TaxManagementComponent: React.FC<Props> = ({
  title = '特定課税仕入伝票管理入力',
  fiscalYear = '平成27年度',
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <header className="bg-purple-200 text-center py-2 mb-4">
        <h1>{title}</h1>
      </header>
      <section className="bg-white p-4 rounded shadow-sm mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button onClick={onRegister} className="btn-control">登録</button>
            <button onClick={onEdit} className="btn-control">訂正</button>
            <button onClick={onDelete} className="btn-control">削除</button>
          </div>
          <div>
            <span>{fiscalYear}</span>
          </div>
        </div>
        
        <form className="border rounded p-4 mb-4">
          <div className="mb-4">
            <label className="block mb-1">伝票日付</label>
            <input type="date" className="input-field" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">伝票番号</label>
            <input type="number" className="input-field" min="0" max="999999" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">摘要</label>
            <input type="text" className="input-field" />
          </div>
          <button type="button" className="btn-display">表示</button>
        </form>
        
        <table className="w-full text-sm bg-white border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">種別</th>
              <th className="border p-2">発生源</th>
              <th className="border p-2">伝票付</th>
              <th className="border p-2">番号</th>
              <th className="border p-2">明細</th>
              <th className="border p-2">借方科目</th>
              <th className="border p-2">貸方科目</th>
              <th className="border p-2">本体金額</th>
              <th className="border p-2">税額</th>
              <th className="border p-2">摘要1</th>
              <th className="border p-2">摘要2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border p-2">支払</td>
              <td className="border p-2">支出決定</td>
              <td className="border p-2">2016/03/27</td>
              <td className="border p-2">451</td>
              <td className="border p-2">1</td>
              <td className="border p-2">〇〇事業費</td>
              <td className="border p-2">現金預金</td>
              <td className="border p-2 text-right">1,000,000</td>
              <td className="border p-2">0</td>
              <td className="border p-2">電子者書籍購入費</td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TaxManagementComponent;

// Note: The above component assumes using Tailwind CSS for styling.
// Styling classes such as 'btn-control', 'input-field', and 'btn-display' should be defined in your CSS.
```