import React from 'react';

type DecisionRecord = {
  selected: boolean;
  status: string;
  number: string;
  recipient: string;
  description: string;
  amount: number;
  decisionDate: string;
  processingDate: string;
  paymentDate: string;
};

type DecisionListProps = {
  records: DecisionRecord[];
  onToggleSelect: (index: number) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DecisionList: React.FC<DecisionListProps> = ({
  records,
  onToggleSelect,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th>電子決裁状況</th>
            <th>決定番号</th>
            <th>支払先</th>
            <th>摘要</th>
            <th>決定額</th>
            <th>決定処理日</th>
            <th>支払日</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="text-center">
              <td>
                <input
                  type="checkbox"
                  checked={record.selected}
                  onChange={() => onToggleSelect(index)}
                />
              </td>
              <td>{record.status}</td>
              <td>{record.number}</td>
              <td>{record.recipient}</td>
              <td>{record.description}</td>
              <td>{record.amount.toLocaleString()}</td>
              <td>{record.decisionDate}</td>
              <td>{record.processingDate}</td>
              <td>{record.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-4 mt-4">
        <button 
          onClick={onConfirm} 
          className="bg-blue-500 text-white py-1 px-3 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white py-1 px-3 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DecisionList;
```