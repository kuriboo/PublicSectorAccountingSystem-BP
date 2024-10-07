import React from 'react';
import classNames from 'classnames';

// プロパティの型定義
type DividerProps = {
  thickness?: string;
  color?: string;
  className?: string;
};

// Dividerコンポーネントの定義
const Divider: React.FC<DividerProps> = ({
  thickness = '2px', // 線の初期設定の太さ
  color = 'black',   // 線の初期設定の色
  className,         // 追加のクラス名
}) => {
  return (
    <hr 
      className={classNames('m-4', className)}
      style={{
        borderWidth: thickness, 
        borderColor: color, 
        borderStyle: 'solid'
      }}
    />
  );
};

export default Divider;
```