import React from 'react';

type InventoryFormProps = {
  date: string;
  locationStart: string;
  locationEnd: string;
  productStart: string;
  productEnd: string;
  includeZero: boolean;
  printDetail: boolean;
  onSubmit: (data: any) => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  date,
  locationStart,
  locationEnd,
  productStart,
  productEnd,
  includeZero,
  printDetail,
  onSubmit
}) => {
  const handleSubmit = () => {
    onSubmit({
      date,
      locationStart,
      locationEnd,
      productStart,
      productEnd,
      includeZero,
      printDetail,
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-lg font-bold mb-4">棚卸表作成</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">在庫現在日</label>
        <input type="text" className="w-full mt-1 p-2 border rounded" value={date} readOnly />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">保管場所</label>
        <div className="flex space-x-2">
          <input type="text" className="flex-1 p-2 border rounded" value={locationStart} readOnly />
          <span className="self-center">~</span>
          <input type="text" className="flex-1 p-2 border rounded" value={locationEnd} readOnly />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">品番</label>
        <div className="flex space-x-2">
          <input type="text" className="flex-1 p-2 border rounded" value={productStart} readOnly />
          <span className="self-center">~</span>
          <input type="text" className="flex-1 p-2 border rounded" value={productEnd} readOnly />
        </div>
      </div>
      
      <div className="mb-4">
        <span className="block text-sm font-medium">数量0印字区分</span>
        <div className="flex items-center space-x-2">
          <input type="radio" checked={!includeZero} readOnly />
          <label className="text-sm">なし</label>
          <input type="radio" checked={includeZero} readOnly />
          <label className="text-sm">あり</label>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="block text-sm font-medium">印字内容</span>
        <div className="flex items-center space-x-2">
          <input type="radio" checked={!printDetail} readOnly />
          <label className="text-sm">通常</label>
          <input type="radio" checked={printDetail} readOnly />
          <label className="text-sm">単価明細</label>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={handleSubmit}>OK</button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default InventoryForm;