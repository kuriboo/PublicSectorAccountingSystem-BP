import React from 'react';

// TypeScript型定義
interface ConfirmationLetterProps {
  companyName: string;
  recipient: string;
  date: string;
  inspector: string;
  acceptanceNumber: string;
  noticeNumber: string;
  projectLocation: string;
  inspectorOffice: string;
}

// 再利用可能なコンポーネント
const ConfirmationLetter: React.FC<ConfirmationLetterProps> = ({
  companyName,
  recipient,
  date,
  inspector,
  acceptanceNumber,
  noticeNumber,
  projectLocation,
  inspectorOffice
}) => {
  return (
    <div className="p-8 bg-white shadow-md mx-auto my-10 max-w-2xl font-sans text-gray-800">
      <div className="text-right">
        <p className="mb-4">{date}</p>
      </div>
      <div>
        <p className="mb-8">
          承認番号 <span className="font-semibold">{acceptanceNumber}号</span>
        </p>
        <p className="mb-12">{companyName} 様</p>
      </div>
      <div className="text-center mb-12">
        <p className="text-lg font-bold">給水装置工事施行承認書</p>
        <p>受付第 {noticeNumber}号をもって申し込みのあった給水装置工事について</p>
        <p>下記の条件にて承認します。</p>
      </div>
      <div className="mb-12">
        <p>謹者 {inspector}</p>
      </div>
      <div>
        <p className="mb-4 text-sm">記</p>
        <ol className="list-decimal list-inside mb-8">
          <li>給水装置設置場所: {projectLocation}</li>
          <li>給水装置配管申請者: {inspectorOffice}</li>
        </ol>
        <div className="text-sm">
          <p>承認条件</p>
          <p>
            工事施工に当たり本条各例及び環境配慮を遵守してください。
            道路等の施工については、安全配慮に努める事を願います。
            本件承認日から6日以内に工事着手してください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationLetter;
