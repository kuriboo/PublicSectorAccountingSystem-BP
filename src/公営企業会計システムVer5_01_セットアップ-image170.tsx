import React from 'react';

type ApplicationData = {
  screenCode: string;
  screenTitle: string;
  apGroupCode: string;
};

type ApplicationMasterProps = {
  data: ApplicationData[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const ApplicationMaster: React.FC<ApplicationMasterProps> = ({
  data,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">アプリケーションマスタ</h2>

      {/* Radio Buttons */}
      <div className="mb-4">
        <label>
          <input
            type="radio"
            name="action"
            className="mr-2"
            onClick={onRegister}
          />
          登録
        </label>
        <label>
          <input type="radio" name="action" className="mr-2 ml-4" onClick={onEdit} />
          訂正
        </label>
        <label>
          <input type="radio" name="action" className="mr-2 ml-4" onClick={onDelete} />
          削除
        </label>
      </div>

      {/* Data Table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">画面タイトルコード</th>
            <th className="py-2 px-4 border-b">画面タイトル</th>
            <th className="py-2 px-4 border-b">APグループコード</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="py-2 px-4 border-b">{item.screenCode}</td>
              <td className="py-2 px-4 border-b">{item.screenTitle}</td>
              <td className="py-2 px-4 border-b">{item.apGroupCode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-4 flex justify-between">
        <button className="py-2 px-4 bg-gray-300 rounded-lg">前データ</button>
        <button className="py-2 px-4 bg-gray-300 rounded-lg">次データ</button>
        <div className="flex">
          <button className="py-2 px-4 bg-gray-300 rounded-lg">クリア</button>
          <button className="ml-2 py-2 px-4 bg-gray-300 rounded-lg">終了</button>
          <button className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg">OK</button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationMaster;
```