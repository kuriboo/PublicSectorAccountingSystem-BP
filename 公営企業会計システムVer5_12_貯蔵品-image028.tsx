import React from 'react';

type InfoFormProps = {
  productCode?: string;
  productName?: string;
  spec?: string;
  year?: string;
  initialWarehouseNumber?: number;
  lineNumber?: number;
  quantity?: number;
  unit?: string;
  unitPrice?: number;
  averageUnitPrice?: number;
  tentativeWarehouseNumber?: number;
  currentStock?: number;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const InfoForm: React.FC<InfoFormProps> = ({
  productCode = "000701 015",
  productName = "減圧槽",
  spec = "φ200mm",
  year = "平成29",
  initialWarehouseNumber = 18,
  lineNumber = 1,
  quantity = 1,
  unit = "m",
  unitPrice = 2823798.00,
  averageUnitPrice = 2205949.50,
  tentativeWarehouseNumber = 0.00,
  currentStock = 3.00,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="grid grid-cols-2 gap-4">
        {/* Product Information */}
        <div className="col-span-2">
          <label className="block">品番</label>
          <input className="border p-1 w-full" readOnly value={productCode} />
        </div>
        <div>
          <label className="block">品名</label>
          <input className="border p-1 w-full" readOnly value={productName} />
        </div>
        <div>
          <label className="block">規格</label>
          <input className="border p-1 w-full" readOnly value={spec} />
        </div>

        {/* Year and Number Information */}
        <div>
          <label className="block">当初出庫年度</label>
          <input className="border p-1 w-full" readOnly value={year} />
        </div>
        <div>
          <label className="block">当初出庫番号</label>
          <input className="border p-1 w-full" readOnly value={initialWarehouseNumber} />
        </div>
        <div>
          <label className="block">行番号</label>
          <input className="border p-1 w-full" readOnly value={lineNumber} />
        </div>

        {/* Quantity and Units */}
        <div>
          <label className="block">数量</label>
          <input className="border p-1 w-full" readOnly value={quantity} />
        </div>
        <div>
          <label className="block">単位</label>
          <input className="border p-1 w-full" readOnly value={unit} />
        </div>

        {/* Price and Stock Information */}
        <div>
          <label className="block">単価</label>
          <input className="border p-1 w-full" readOnly value={unitPrice.toLocaleString()} />
        </div>
        <div>
          <label className="block">平均単価</label>
          <input className="border p-1 w-full" readOnly value={averageUnitPrice.toLocaleString()} />
        </div>
        <div>
          <label className="block">仮出庫数</label>
          <input className="border p-1 w-full" readOnly value={tentativeWarehouseNumber.toFixed(2)} />
        </div>
        <div>
          <label className="block">現在在庫数</label>
          <input className="border p-1 w-full" readOnly value={currentStock.toFixed(2)} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default InfoForm;