import React from 'react';

interface AmountDetailProps {
  title: string;
  items: {
    label: string;
    amount: number;
  }[];
}

interface CreditAmountDetailsProps {
  beforeAdjustment: number;
  currentAdjustment: number;
  afterAdjustment: number;
}

const AmountDetail: React.FC<AmountDetailProps> = ({ title, items }) => {
  return (
    <div className="m-4 p-4 border-2 border-gray-300 rounded">
      <h3 className="font-bold mb-2">{title}</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">項目</th>
            <th className="text-right">金額 (円)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-1">{item.label}</td>
              <td className="py-1 text-right">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CreditAmountDetails: React.FC<CreditAmountDetailsProps> = ({ beforeAdjustment, currentAdjustment, afterAdjustment }) => {
  return (
    <div className="max-w-lg mx-auto">
      <AmountDetail
        title="補正前充当額"
        items={[
          { label: '不課税', amount: beforeAdjustment },
          { label: '合計', amount: beforeAdjustment },
        ]}
      />
      <AmountDetail
        title="今回補正充当額"
        items={[
          { label: '不課税', amount: currentAdjustment },
          { label: '合計', amount: currentAdjustment },
        ]}
      />
      <AmountDetail
        title="補正後充当額"
        items={[
          { label: '不課税', amount: afterAdjustment },
          { label: '合計', amount: afterAdjustment },
        ]}
      />
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">OK</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default CreditAmountDetails;
