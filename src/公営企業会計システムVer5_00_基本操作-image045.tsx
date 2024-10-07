import React from 'react';

// 定義可能なプロパティの型
type DocumentHeaderProps = {
  title: string;
  burdenNumber: string;
  year: string;
  processingDate: string;
};

// 再利用可能なドキュメントヘッダーコンポーネント
const DocumentHeader: React.FC<DocumentHeaderProps> = ({ title, burdenNumber, year, processingDate }) => {
  return (
    <div className="p-4 border-b-2 border-gray-300">
      <h1 className="text-xl font-bold mb-2 text-center">{title}</h1>
      <div className="flex justify-between items-center">
        <span className="text-sm">{year}年度</span>
        <span className="text-sm">負担No. {burdenNumber}</span>
      </div>
      <div className="text-sm text-right">負担処理日: {processingDate}</div>
    </div>
  );
};

export default DocumentHeader;

```tsx
// 使用例
import DocumentHeader from './DocumentHeader';

const ExampleComponent = () => {
  return (
    <DocumentHeader 
      title="支出負担行為伺書（物品）" 
      burdenNumber="29-000177-00" 
      year="平成29年" 
      processingDate="平成29年8月1日" 
    />
  );
};

export default ExampleComponent;
