```tsx
import React from 'react';

// 型定義
type LinkItem = {
  label: string;
  url: string;
};

type SectionProps = {
  title: string;
  items: LinkItem[];
};

type DownloadPageProps = {
  intro: string;
  sections: SectionProps[];
};

const DownloadSection: React.FC<SectionProps> = ({ title, items }) => (
  <div className="my-4">
    <h2 className="font-bold text-xl mb-2">{title}</h2>
    <ul className="list-disc ml-6">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.url} className="text-blue-600 hover:underline">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DownloadPage: React.FC<DownloadPageProps> = ({ intro, sections }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">公営企業会計システム</h1>
    <p className="mb-4">{intro}</p>
    {sections.map((section, index) => (
      <DownloadSection key={index} title={section.title} items={section.items} />
    ))}
  </div>
);

export default DownloadPage;

// 使用例
// <DownloadPage
//   intro="このサイトは、公営企業会計システムで利用する各種クライアント用ツールや操作マニュアルを格納しております。以下のリンクより、必要なツールをクリックしてダウンロードしてください。"
//   sections={[
//     {
//       title: "公営企業会計システム ツールダウンロード",
//       items: [
//         { label: "科目変換ツール", url: "#" },
//         { label: "相手先マスタ適格請求書登録番号設定", url: "#" },
//       ],
//     },
//     {
//       title: "公営企業会計システム 操作マニュアルダウンロード",
//       items: [
//         { label: "操作マニュアル", url: "#" },
//         { label: "利用マニュアル", url: "#" },
//       ],
//     },
//   ]}
// />
```