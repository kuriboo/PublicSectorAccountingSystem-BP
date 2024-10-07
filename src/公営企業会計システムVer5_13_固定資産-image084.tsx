import React from 'react';

interface DataEntry {
  title: string;
  content: string;
}

interface CustomTableProps {
  items: DataEntry[];
  onShow: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CustomTable: React.FC<CustomTableProps> = ({ items, onShow, onClear, onCancel }) => {
  return (
    <div className="p-4 border">
      <div className="flex items-center mb-2">
        <label className="mr-2" htmlFor="customItem">自由設定項目</label>
        <input type="text" id="customItem" className="border mr-2 p-1" defaultValue="001001" />
        <input type="text" className="border p-1" disabled defaultValue="路線番号" />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2" htmlFor="searchString">内容検索文字列</label>
        <input type="text" id="searchString" className="border flex-1 p-1" placeholder="路線番号" />
        <button className="ml-2 border px-4 py-1 bg-gray-200" onClick={onShow}>表示</button>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-2">タイトル</th>
            <th className="border p-2">自由設定内容</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="border px-4 py-1 bg-gray-200" onClick={onClear}>クリア</button>
        <button className="border px-4 py-1 bg-gray-200" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default CustomTable;