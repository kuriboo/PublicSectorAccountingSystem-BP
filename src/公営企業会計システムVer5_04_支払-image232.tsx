import React from 'react';

// コンポーネントのプロパティの型定義
interface DividerProps {
  color?: string;      // ボーダーの色
  height?: string;     // ボーダーの高さ
  className?: string;  // 追加のクラス名
}

// Dividerコンポーネントの定義
const Divider: React.FC<DividerProps> = ({ 
  color = 'bg-blue-400',  // デフォルトの色
  height = 'h-2',         // デフォルトの高さ
  className = ''          // 追加のクラス名
}) => {
  return (
    <div 
      className={`${height} ${color} ${className} shadow-md`}
      style={{ margin: '0 auto', maxWidth: '800px' }} // 中央揃えと最大幅の設定
    />
  );
}

export default Divider;
```