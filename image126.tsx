```tsx
// components/DataExtraction.tsx

import React from 'react';

// Define the properties for the DataExtraction component.
interface DataExtractionProps {
  fiscalYear: string;
  departments: string[];
}

const DataExtraction: React.FC<DataExtractionProps> = ({ fiscalYear, departments }) => {
  return (
    <div className="border rounded shadow-lg p-6 bg-gray-100">
      <header className="bg-blue-200 p-4 rounded-t text-lg font-bold">
        固定資産マスタデータ抽出
      </header>
      <div className="mt-4">
        <p>当期会計年度: <span className="font-semibold">{fiscalYear}</span></p>
        <ul className="my-4">
          <li className="font-bold">- 以下のマスタの内容をファイル出力します。</li>
          <li>【共通マスタ入力用票で取込まれるマスタ】</li>
          <li>仕訳マスタ (年度情報、= わり)</li>
          <li>仕訳項目マスタ (年度情報、= わり)</li>
          <li>仕訳締切マスタ (年度情報、= びあり)</li>
          <li>【固定資産入力用票で取込まれるマスタ】</li>
          <li>単価名称マスタ</li>
          <li>単価属性マスタ</li>
          <li>...</li> {/* Add more list items as necessary */}
        </ul>
        <div>
          <p>部門リスト:</p>
          <ul className="list-disc list-inside">
            {departments.map((dept, index) => (
              <li key={index}>{dept}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-gray-200 px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default DataExtraction;
```