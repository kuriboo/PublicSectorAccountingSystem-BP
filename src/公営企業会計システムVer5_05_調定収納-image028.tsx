import React from 'react';

// 型定義
type DividerProps = {
  color?: string;
  height?: string;
  margin?: string;
};

// コンポーネント定義
const Divider: React.FC<DividerProps> = ({
  color = 'bg-blue-300',
  height = '2px',
  margin = '4px 0',
}) => {
  return (
    <div
      className={`w-full ${color}`}
      style={{
        height,
        margin,
        borderBottom: '4px solid black',
      }}
    />
  );
};

export default Divider;
