import React from 'react';

type Classification = {
  code: string;
  name: string;
};

type MasterProps = {
  title: string;
  year: string;
  mainType: Classification;
  subTypes: Classification[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
  onPrevData: () => void;
  onNextData: () => void;
};

const ClassMasterComponent: React.FC<MasterProps> = ({
  title,
  year,
  mainType,
  subTypes,
  onEdit,
  onDelete,
  onPrevData,
  onNextData,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <span>{year} 年度</span>
      </div>
      <div className="flex mb-4">
        <div className="mr-8">
          <button className="btn">大分類</button>
        </div>
        <div>
          <div className="flex mb-2">
            <input
              type="text"
              value={mainType.code}
              readOnly
              className="border p-2 bg-blue-100 mr-2"
            />
            <input
              type="text"
              value={mainType.name}
              readOnly
              className="border p-2 bg-blue-100 flex-1"
            />
          </div>
          <div className="flex">
            <button onClick={onPrevData} className="btn mr-2">
              前データ
            </button>
            <button onClick={onNextData} className="btn">
              次データ
            </button>
          </div>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="mr-8">
          <button className="btn">中分類</button>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <input
              type="text"
              value={mainType.code}
              readOnly
              className="border p-2 bg-blue-100 mr-2"
            />
            <input
              type="text"
              value={mainType.name}
              readOnly
              className="border p-2 bg-blue-100 flex-1"
            />
          </div>
          <div className="flex">
            <button onClick={onPrevData} className="btn mr-2">
              前データ
            </button>
            <button onClick={onNextData} className="btn">
              次データ
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-2 mb-4">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-2">コード</th>
              <th className="p-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {subTypes.map((sub) => (
              <tr key={sub.code}>
                <td className="p-2 border">{sub.code}</td>
                <td className="p-2 border">{sub.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex mt-2">
          <button onClick={() => onEdit(mainType.code)} className="btn mr-2">
            明細編集
          </button>
          <button onClick={() => onDelete(mainType.code)} className="btn">
            行削除
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn mx-2">OK</button>
        <button className="btn mx-2">クリア</button>
        <button className="btn mx-2">終了</button>
      </div>
    </div>
  );
};

export default ClassMasterComponent;
