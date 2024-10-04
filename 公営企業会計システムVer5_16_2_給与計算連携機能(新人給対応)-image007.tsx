import React, { useState } from 'react';

// 型定義
interface CodeManagerProps {
  initialCodes?: string[];
  onAdd?: (code: string) => void;
  onRemove?: (code: string) => void;
}

const CodeManager: React.FC<CodeManagerProps> = ({ initialCodes = [], onAdd, onRemove }) => {
  const [codes, setCodes] = useState<string[]>(initialCodes);
  const [newCode, setNewCode] = useState<string>('');

  const handleAddCode = () => {
    if (newCode && !codes.includes(newCode)) {
      const updatedCodes = [...codes, newCode];
      setCodes(updatedCodes);
      onAdd?.(newCode); // Optional callback
      setNewCode('');
    }
  };

  const handleRemoveCode = (code: string) => {
    const updatedCodes = codes.filter(c => c !== code);
    setCodes(updatedCodes);
    onRemove?.(code); // Optional callback
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">対象外控除コード設定</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border rounded p-2 flex-1"
          placeholder="控除項目コード"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />
        <button
          onClick={handleAddCode}
          className="ml-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          追加
        </button>
      </div>
      <table className="min-w-full border-t border-b">
        <thead>
          <tr>
            <th className="text-left p-2">控除項目コード</th>
          </tr>
        </thead>
        <tbody>
          {codes.map((code, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 flex justify-between">
                {code}
                <button
                  onClick={() => handleRemoveCode(code)}
                  className="bg-red-200 p-1 rounded hover:bg-red-300"
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CodeManager;