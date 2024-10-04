```tsx
import React from 'react';

// 型定義 for the component properties
type DownloadSectionProps = {
  title: string;
  items: string[];
  className?: string;
};

const DownloadSection: React.FC<DownloadSectionProps> = ({ title, items, className = '' }) => {
  return (
    <div className={`my-6 ${className}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <ul className="list-disc pl-4">
        {items.map((item, index) => (
          <li key={index} className="mb-1 cursor-pointer text-blue-600 hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">このサイトについて</h1>
      <p className="mb-6">
        このサイトは、公営企業会計システムにて利用する各種クライアント用ツールや操作マニュアルを格納しております。
        下記のリンクより、必要なツールをクリックしてダウンロードしてください。
        クライアント用ツールの利用方法につきましては、各種マニュアルを格納しておりますが、
        ご不明点などございましたら弊社システム担当にご連絡ください。
      </p>

      <DownloadSection
        title="公営企業会計システム ツールダウンロード"
        items={['セットアップ', '予算編成', '決算', '決算統計', '固定資産', '契約事務']}
      />

      <DownloadSection
        title="公営企業会計システム 操作マニュアルダウンロード"
        items={['操作マニュアル', '利用マニュアル']}
      />
    </div>
  );
}
```