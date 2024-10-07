import React from 'react';

// Propsの型定義
type FormProps = {
  unitType: string;
  startDate: string;
  unitPriceName: string;
  quantity: number;
  price: number;
  amount: number;
  onValueChange: (key: string, value: string | number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Form: React.FC<FormProps> = ({
  unitType,
  startDate,
  unitPriceName,
  quantity,
  price,
  amount,
  onValueChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <label className="font-bold">単価内容</label>
          <div className="flex">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={unitType === 'inclusive'}
                onChange={() => onValueChange('unitType', 'inclusive')}
              />
              <span>込</span>
            </label>
            <label className="flex items-center space-x-2 ml-4">
              <input
                type="radio"
                checked={unitType === 'exclusive'}
                onChange={() => onValueChange('unitType', 'exclusive')}
              />
              <span>抜</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label>単価名称</label>
        <input
          type="text"
          value={unitPriceName}
          onChange={(e) => onValueChange('unitPriceName', e.target.value)}
          className="border p-1"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label>適用開始日</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onValueChange('startDate', e.target.value)}
          className="border p-1"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label>数量</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onValueChange('quantity', Number(e.target.value))}
          className="border p-1"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label>単価</label>
        <input
          type="number"
          value={price}
          onChange={(e) => onValueChange('price', Number(e.target.value))}
          className="border p-1"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label>金額</label>
        <input
          type="number"
          value={amount}
          readOnly
          className="border p-1 bg-gray-100"
        />
      </div>

      <div className="flex space-x-2">
        <button onClick={onSubmit} className="border px-4 py-1 bg-blue-500 text-white">OK</button>
        <button onClick={onClear} className="border px-4 py-1 bg-gray-200">クリア</button>
        <button onClick={onCancel} className="border px-4 py-1 bg-gray-200">キャンセル</button>
      </div>
    </div>
  );
};

export default Form;
