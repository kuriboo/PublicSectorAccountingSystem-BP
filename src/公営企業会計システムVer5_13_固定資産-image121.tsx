import React from 'react';

// Props type definition
interface AssetDetailProps {
  type: '全般' | '明細';
  category: '土地' | '土地以外' | '無形';
  residualRate: number;
  limitRate: number;
  depreciationMethod: '定額法' | '定率法' | 'リース期間定額法';
  buttonText: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AssetDetail: React.FC<AssetDetailProps> = ({
  type,
  category,
  residualRate,
  limitRate,
  depreciationMethod,
  buttonText,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <h1 className="text-xl font-bold">固定資産簿/明細マスタ</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium">対象マスタ</label>
          <div className="mt-1">
            <label className="inline-flex items-center mr-4">
              <input type="radio" className="form-radio" checked={type === '全般'} readOnly />
              <span className="ml-2">全般</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" checked={type === '明細'} readOnly />
              <span className="ml-2">明細</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block font-medium">土地資産</label>
          <div className="mt-1">
            {['土地', '土地以外', '無形'].map((cat, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input type="radio" className="form-radio" checked={category === cat} readOnly />
                <span className="ml-2">{cat}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium">残存率</label>
          <input type="text" className="mt-1 form-input w-full" value={residualRate} readOnly />
        </div>
        <div>
          <label className="block font-medium">限度率</label>
          <input type="text" className="mt-1 form-input w-full" value={limitRate} readOnly />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block font-medium">償却方法</label>
        <div className="mt-1">
          {['定額法', '定率法', 'リース期間定額法'].map((method, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" className="form-radio" checked={depreciationMethod === method} readOnly />
              <span className="ml-2">{method}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="btn-primary">{buttonText}</button>
        <button onClick={onClear} className="btn-secondary">クリア</button>
        <button onClick={onClose} className="btn-secondary">終了</button>
      </div>
    </div>
  );
};

export default AssetDetail;
```