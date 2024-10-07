import React from 'react';

type BudgetFormProps = {
  outputLevel: 'section' | 'detail';
  creationMonthStart: string;
  creationMonthEnd: string;
  budgetCodeStart: string;
  budgetCodeEnd: string;
  collectionTarget: 'all' | 'block' | 'segment';
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  outputLevel,
  creationMonthStart,
  creationMonthEnd,
  budgetCodeStart,
  budgetCodeEnd,
  collectionTarget,
  onSubmit,
  onClear,
  onClose
}) => (
  <div className="p-4 bg-white rounded shadow-md">
    {/* Output Level Section */}
    <div className="mb-4">
      <label className="block mb-2 text-lg">出力レベル</label>
      <div>
        <label className="inline-flex items-center mr-4">
          <input 
            type="radio" 
            value="section" 
            checked={outputLevel === 'section'} 
            readOnly 
            className="form-radio"
          />
          <span className="ml-2">節</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="radio" 
            value="detail" 
            checked={outputLevel === 'detail'} 
            readOnly 
            className="form-radio"
          />
          <span className="ml-2">明細</span>
        </label>
      </div>
    </div>

    {/* Creation Month Section */}
    <div className="mb-4">
      <label className="block mb-2">作成年月</label>
      <input 
        type="text" 
        value={creationMonthStart} 
        readOnly 
        className="border p-2 mr-2" 
      />
      <span>~</span>
      <input 
        type="text" 
        value={creationMonthEnd} 
        readOnly 
        className="border p-2 ml-2" 
      />
    </div>

    {/* Budget Code Section */}
    <div className="mb-4">
      <label className="block mb-2">予算科目</label>
      <input 
        type="text" 
        value={budgetCodeStart} 
        readOnly 
        className="border p-2 mr-2" 
      />
      <span>~</span>
      <input 
        type="text" 
        value={budgetCodeEnd} 
        readOnly 
        className="border p-2 ml-2" 
      />
    </div>

    {/* Collection Target Section */}
    <div className="mb-4">
      <label className="block mb-2">集計対象</label>
      <div>
        <label className="inline-flex items-center mr-4">
          <input 
            type="radio" 
            value="all" 
            checked={collectionTarget === 'all'} 
            readOnly 
            className="form-radio"
          />
          <span className="ml-2">全体</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input 
            type="radio" 
            value="block" 
            checked={collectionTarget === 'block'} 
            readOnly 
            className="form-radio"
          />
          <span className="ml-2">ブロック</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="radio" 
            value="segment" 
            checked={collectionTarget === 'segment'} 
            readOnly 
            className="form-radio"
          />
          <span className="ml-2">セグメント</span>
        </label>
      </div>
    </div>

    {/* Buttons Section */}
    <div className="flex justify-center space-x-4 mt-4">
      <button 
        onClick={onSubmit} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        集計
      </button>
      <button 
        onClick={onClear} 
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        クリア
      </button>
      <button 
        onClick={onClose} 
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        終了
      </button>
    </div>
  </div>
);

export default BudgetForm;
```