```tsx
import React from 'react';

// 型定義
type InventoryFormProps = {
  date: string;
  location: string;
  departmentCode: string;
  divisionCode: string;
  managerOption: string;
  workSite: string;
  summary: string;
  items: { itemCode: string; itemName: string; specification: string; quantity: number; unit: string; provisionalQuantity: number; currentQuantity: number; }[];
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  date,
  location,
  departmentCode,
  divisionCode,
  managerOption,
  workSite,
  summary,
  items,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl font-bold text-center mb-4">仮出庫入力</h2>
      <form>
        {/* 仮出庫日、保管場所 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">仮出庫日</label>
            <input type="text" value={date} className="w-full border rounded-md p-2" readOnly />
          </div>
          <div>
            <label className="block text-gray-700">保管場所</label>
            <input type="text" value={location} className="w-full border rounded-md p-2" readOnly />
          </div>
        </div>

        {/* 所属、出庫区分 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">所属</label>
            <input type="text" value={departmentCode} className="w-full border rounded-md p-2" readOnly />
          </div>
          <div>
            <label className="block text-gray-700">出庫区分</label>
            <input type="text" value={divisionCode} className="w-full border rounded-md p-2" readOnly />
          </div>
        </div>

        {/* 決裁区分、工事名場所 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">決裁区分</label>
            <input type="text" value={managerOption} className="w-full border rounded-md p-2" readOnly />
          </div>
          <div>
            <label className="block text-gray-700">工事名場所</label>
            <input type="text" value={workSite} className="w-full border rounded-md p-2" readOnly />
          </div>
        </div>

        {/* 摘要 */}
        <div className="mb-4">
          <label className="block text-gray-700">摘要</label>
          <input type="text" value={summary} className="w-full border rounded-md p-2" readOnly />
        </div>

        {/* 商品リスト */}
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 border">品番</th>
                <th className="py-2 border">品名</th>
                <th className="py-2 border">規格</th>
                <th className="py-2 border">数量</th>
                <th className="py-2 border">単位</th>
                <th className="py-2 border">仮出庫数</th>
                <th className="py-2 border">現在庫数</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 border">{item.itemCode}</td>
                  <td className="py-2 border">{item.itemName}</td>
                  <td className="py-2 border">{item.specification}</td>
                  <td className="py-2 border">{item.quantity}</td>
                  <td className="py-2 border">{item.unit}</td>
                  <td className="py-2 border">{item.provisionalQuantity}</td>
                  <td className="py-2 border">{item.currentQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ボタン */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md" onClick={onSubmit}>OK</button>
          <button type="button" className="bg-yellow-500 text-white py-2 px-4 rounded-md" onClick={onClear}>クリア</button>
          <button type="button" className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={onFinish}>終了</button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
```