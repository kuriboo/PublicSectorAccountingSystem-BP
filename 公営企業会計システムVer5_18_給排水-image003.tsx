import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
type DocumentRegistrationProps = {
  year: number;
  receptionNumber: number;
  status: '受付済' | '収納済';
  applicantName: string;
  applicantAddress: string;
  constructionName: string;
  constructionAddress: string;
  use: string;
  type: string;
  supplyMethod: string;
  startDate: string;
  endDate: string;
};

// 再利用可能なコンポーネント
const DocumentRegistration: React.FC<DocumentRegistrationProps> = ({
  year,
  receptionNumber,
  status,
  applicantName,
  applicantAddress,
  constructionName,
  constructionAddress,
  use,
  type,
  supplyMethod,
  startDate,
  endDate,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">付加書類登録</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2">
            <span className="font-bold">年度:</span> {year}
          </div>
          <div className="mb-2">
            <span className="font-bold">受付番号:</span> {receptionNumber}
          </div>
          <div className="mb-2">
            <span className="font-bold">ステータス:</span> {status}
          </div>
          <div className="mb-2">
            <span className="font-bold">申請者情報</span>
            <div>氏名: {applicantName}</div>
            <div>住所: {applicantAddress}</div>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span className="font-bold">工事代理人情報</span>
            <div>工事店: {constructionName}</div>
            <div>住所: {constructionAddress}</div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-bold mb-2">工事の概要</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div>用途: {use}</div>
            <div>種別: {type}</div>
            <div>給水方式: {supplyMethod}</div>
          </div>
          <div>
            <div>予定工期: {startDate} ~ {endDate}</div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">明細確認</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">行削除</button>
        <button className="bg-green-500 text-white px-3 py-1 rounded">ダウンロード</button>
      </div>
    </div>
  );
};

export default DocumentRegistration;