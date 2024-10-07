import React from 'react';

interface TableItem {
  id: number;
  name: string;
  selected: boolean;
}

interface DataOutputProps {
  fiscalYear: string;
  businessType: string;
  businessCode: number;
  items: TableItem[];
  onSelectAll: (selectAll: boolean) => void;
  onItemSelect: (id: number, selected: boolean) => void;
}

const DataOutput: React.FC<DataOutputProps> = ({
  fiscalYear,
  businessType,
  businessCode,
  items,
  onSelectAll,
  onItemSelect
}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col mb-4">
        <h1 className="text-xl font-bold mb-2">決算統計調査表データ出力</h1>
        <div className="flex items-center mb-2">
          <span className="mr-4">年度: {fiscalYear}</span>
          <span>
            業種・事業コード: {businessCode} {businessType}
          </span>
        </div>
      </div>
      <table className="border-collapse border border-slate-400 w-full mb-4">
        <thead>
          <tr>
            <th className="border border-slate-300">
              <input
                type="checkbox"
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </th>
            <th className="border border-slate-300">表番号</th>
            <th className="border border-slate-300">名称</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={(e) => onItemSelect(item.id, e.target.checked)}
                />
              </td>
              <td className="border border-slate-300">{item.id}</td>
              <td className="border border-slate-300">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <button className="bg-gray-200 px-4 py-2 mr-2">dat出力</button>
        <button className="bg-gray-200 px-4 py-2 mr-2">クリア</button>
        <button className="bg-gray-200 px-4 py-2">終了</button>
      </div>
      <div className="mt-4 p-2 border border-slate-300">
        <p className="text-sm">
          出力したファイルは、総務省が提供する電子調査表システムに取り込むことができます。また、調査表datファイル取込みツールによって、調査表様式のExcelファイルで集計結果を確認することができます。
        </p>
      </div>
    </div>
  );
};

export default DataOutput;
