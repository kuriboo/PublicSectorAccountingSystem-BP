```tsx
import React from 'react';

// プロパティの型定義
type FormProps = {
  startDate: string;
  endDate: string;
  onDisplay: () => void;
  onPrint: () => void;
  onExportCSV: () => void;
};

// Tailwind CSS を使用したスタイリング
const buttonStyle = 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700';

const FormComponent: React.FC<FormProps> = ({ startDate, endDate, onDisplay, onPrint, onExportCSV }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">締め処理状況一覧（調定収納）</h2>
      
      <div className="mb-4">
        <label className="mr-2">調定日:</label>
        <input type="date" value={startDate} className="border p-1" /> 〜 
        <input type="date" value={endDate} className="border p-1" />
      </div>

      <div>
        <button onClick={onDisplay} className={buttonStyle + ' mr-2'}>表示</button>
        <button onClick={onPrint} className={buttonStyle + ' mr-2'}>印刷</button>
        <button onClick={onExportCSV} className={buttonStyle}>CSV</button>
      </div>
    </div>
  );
};

export default FormComponent;
```