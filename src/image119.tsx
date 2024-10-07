import React from 'react';

// 検査項目のタイプ定義
type InspectionItem = {
  id: string;
  name: string;
};

// Propsのタイプ定義
interface InspectionTableProps {
  items: InspectionItem[];
  results: string[];
  onSubmit: (itemId: string, result: string) => void;
  onCancel: () => void;
}

const InspectionTable: React.FC<InspectionTableProps> = ({ items, results, onSubmit, onCancel }) => {
  const [selectedItemId, setSelectedItemId] = React.useState<string>('');
  const [selectedResult, setSelectedResult] = React.useState<string>('');

  // 提出ボタンの処理
  const handleSubmit = () => {
    if (selectedItemId && selectedResult) {
      onSubmit(selectedItemId, selectedResult);
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">検査項目</th>
              <th className="px-4 py-2 border">検査結果</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">
                  {/* Form to select inspection item and its result */}
                  <select
                    value={selectedItemId}
                    onChange={(e) => setSelectedItemId(e.target.value)}
                    className="border rounded p-2"
                  >
                    <option value="">検査項目選択</option>
                    {items.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.name}</option>
                    ))}
                  </select>
                  <select
                    value={selectedResult}
                    onChange={(e) => setSelectedResult(e.target.value)}
                    className="ml-2 border rounded p-2"
                  >
                    <option value="">検査結果選択</option>
                    {results.map((result, i) => (
                      <option key={i} value={result}>{result}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Buttons for actions */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InspectionTable;
