import React from 'react';

interface ControlData {
  division: string;
  controlContent: string;
  controlValue: string;
  setting: string;
}

interface ControlTableProps {
  data: ControlData[];
}

const ControlTable: React.FC<ControlTableProps> = ({ data }) => {
  return (
    <div className="w-full p-4 bg-gray-100">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border p-2">区分</th>
            <th className="border p-2">制御内容</th>
            <th className="border p-2">制御値</th>
            <th className="border p-2">設定</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="border p-2">{item.division}</td>
              <td className="border p-2">{item.controlContent}</td>
              <td className="border p-2">{item.controlValue}</td>
              <td className="border p-2">{item.setting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 使用例
const exampleData: ControlData[] = [
  { division: '1', controlContent: '*物品  明細数制限', controlValue: '1', setting: '制限なし' },
  { division: '2', controlContent: '一般　明細数制限', controlValue: '1', setting: '制限なし' },
  { division: '3', controlContent: '小規模版 設定', controlValue: '0', setting: '標準版' },
  // ... more data
];

export const ExampleComponent = () => {
  return <ControlTable data={exampleData} />;
};

export default ControlTable;
