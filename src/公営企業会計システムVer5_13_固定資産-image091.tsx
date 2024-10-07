import React from 'react';

// TypeScriptの型定義
interface DocumentHeaderProps {
  projectYear: string;
  projectName: string;
  subtitle: string;
  date: string;
}

const DocumentHeader: React.FC<DocumentHeaderProps> = ({ projectYear, projectName, subtitle, date }) => {
  return (
    <div className="p-4 text-center">
      {/* プロジェクト年度 */}
      <p className="text-sm text-gray-500">{projectYear}</p>
      
      {/* プロジェクト名 */}
      <h1 className="text-xl font-bold">{projectName}</h1>
      
      {/* サブタイトル */}
      <p className="text-lg">{subtitle}</p>
      
      {/* 日付 */}
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default DocumentHeader;