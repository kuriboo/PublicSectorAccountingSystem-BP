import React from 'react';

// TypeScriptの型定義
interface DocumentProps {
  year: string;
  documentNumber: string;
  previousProcessingDate: string;
  department: string;
  issuer: string;
  summary: string;
  partner: string;
  customContents: string[];
  amount: number;
}

const Document: React.FC<DocumentProps> = ({
  year,
  documentNumber,
  previousProcessingDate,
  department,
  issuer,
  summary,
  partner,
  customContents,
  amount,
}) => {
  return (
    <div className="border p-4">
      <div className="flex justify-between mb-4">
        <div>年度: {year}</div>
        <div>何書番号: {documentNumber}</div>
      </div>
      <div className="mb-4">
        <div>前渡向処理日: {previousProcessingDate}</div>
        <div>起案所属: {department}</div>
        <div>起案者: {issuer}</div>
        <div>摘要: {summary}</div>
        <div>相手先: {partner}</div>
      </div>
      <div className="mb-4">
        <div>自由設定内容:</div>
        <div className="border p-2 h-24 overflow-y-scroll">
          {customContents.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>資金前渡額</div>
        <div>{amount.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Document;

変更するポイントがあれば、適宜プロパティの充実をお願いいたします。