```tsx
import React from 'react';

type RegistrationFormProps = {
  code: string;
  name: string;
  specification: string;
  startDate: string;
  price: number;
  onRegister: () => void;
  onCorrect: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  code,
  name,
  specification,
  startDate,
  price,
  onRegister,
  onCorrect,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* 登録・訂正選択 */}
      <div className="flex items-center mb-4">
        <label className="mr-2">
          <input type="radio" name="action" onClick={onRegister} />
          登録
        </label>
        <label>
          <input type="radio" name="action" onClick={onCorrect} defaultChecked />
          訂正
        </label>
      </div>
      {/* 単価情報 */}
      <div className="mb-4">
        <div>
          <span className="font-bold">単価コード: </span>{code}
        </div>
        <div>
          <span className="font-bold">単価名称: </span>{name}
        </div>
        <div>
          <span className="font-bold">単価規格: </span>{specification}
        </div>
      </div>
      {/* 適用開始年月日・単価 */}
      <div className="border p-4 mb-4">
        <div className="mb-2">
          <span className="font-bold">適用開始年月日: </span>{startDate}
        </div>
        <div>
          <span className="font-bold">単価: </span>
          <input 
            type="text" 
            value={price.toFixed(2)} 
            readOnly 
            className="border px-2 py-1"
          />
        </div>
      </div>
      {/* ボタン */}
      <div className="flex justify-around">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onRegister}>前データ</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCorrect}>次データ</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onRegister}>OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
```