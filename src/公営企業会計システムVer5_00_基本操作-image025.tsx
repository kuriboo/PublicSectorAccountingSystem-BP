import React from 'react';

type ToolLink = {
  name: string;
  url: string;
};

type ToolDownloadSectionProps = {
  title: string;
  links: ToolLink[];
};

const ToolDownloadSection: React.FC<ToolDownloadSectionProps> = ({ title, links }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="list-disc list-inside ml-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-blue-600 hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ToolDownloadPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">このサイトについて</h1>
      <p>このサイトは、公営企業会計システムにて利用する各種クライアント用ツールや操作マニュアルを格納しております。</p>
      <p>下記のリンクより、必要なツールをクリックしてダウンロードしてください。</p>
      <p>クライアント用ツールの利用方法につきましては、各種マニュアルを格納しておりますが、ご不明点などございましたら弊社システム担当にご連絡ください。</p>
      
      <ToolDownloadSection 
        title="公営企業会計システム　ツールダウンロード"
        links={[
          { name: '科目変換ツール', url: '#' },
          { name: '相手先マスタ分類請求書登録番号設定', url: '#' },
        ]}
      />

      <ToolDownloadSection 
        title="公営企業会計システム　操作マニュアルダウンロード"
        links={[
          { name: '操作マニュアル', url: '#' },
          { name: '利用マニュアル', url: '#' },
        ]}
      />
    </div>
  );
};

export default ToolDownloadPage;
