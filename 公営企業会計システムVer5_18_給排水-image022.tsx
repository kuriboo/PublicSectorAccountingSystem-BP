import React from 'react';

// コンポーネントのプロパティの型定義
type GradientBarProps = {
  height?: string;  // バーの高さを指定するオプションプロパティ
};

const GradientBar: React.FC<GradientBarProps> = ({ height = '10px' }) => {
  return (
    <div 
      className="w-full bg-gradient-to-r from-blue-200 to-blue-500" 
      style={{ height }}
    >
      {/* 背景の調整が必要な場合はここに要素を追加できます */}
    </div>
  );
};

export default GradientBar;