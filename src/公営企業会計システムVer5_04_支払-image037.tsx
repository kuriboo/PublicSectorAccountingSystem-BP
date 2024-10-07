import React from 'react';

// 型定義
type ContractFormProps = {
  contractStartDate: string;
  receiptDate: string;
  duration: number;
  completionDate: string;
  paymentCount: number;
  onContractSubmit: (data: any) => void;
  onClear: () => void;
  onCancel: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  contractStartDate,
  receiptDate,
  duration,
  completionDate,
  paymentCount,
  onContractSubmit,
  onClear,
  onCancel,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // データをまとめて親コンポーネントに渡す
    const data = {
      contractStartDate,
      receiptDate,
      duration,
      completionDate,
      paymentCount,
    };
    onContractSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">自由設定内容</h2>
        <div className="flex gap-4 mt-2">
          <button type="button" className="btn">契約保証</button>
          <button type="button" className="btn">検査員</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block">契約年月日</label>
          <input type="text" value={contractStartDate} readOnly className="input" />
        </div>
        <div>
          <label className="block">着手年月日</label>
          <input type="text" value={receiptDate} readOnly className="input" />
        </div>
        <div>
          <label className="block">期間</label>
          <input type="text" value={duration} readOnly className="input" />
        </div>
        <div>
          <label className="block">完了年月日</label>
          <input type="text" value={completionDate} readOnly className="input" />
        </div>
        <div>
          <label className="block">支払回数</label>
          <input type="text" value={paymentCount} readOnly className="input" />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button type="submit" className="btn">OK</button>
        <button type="button" className="btn" onClick={onClear}>クリア</button>
        <button type="button" className="btn" onClick={onCancel}>キャンセル</button>
      </div>
    </form>
  );
};

export default ContractForm;

