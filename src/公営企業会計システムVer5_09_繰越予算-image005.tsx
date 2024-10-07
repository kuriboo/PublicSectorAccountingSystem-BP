import React from 'react';

// Propsの型定義
type FlowchartProps = {
  elements: {
    id: string;
    text: string;
    type: 'start' | 'process' | 'decision' | 'end';
  }[];
  connections: { from: string; to: string }[];
};

const Flowchart: React.FC<FlowchartProps> = ({ elements, connections }) => {
  return (
    <div className="flowchart-container flex flex-col items-center">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`flowchart-element p-4 m-2 rounded shadow ${
            el.type === 'start' ? 'bg-green-200' :
            el.type === 'process' ? 'bg-blue-200' :
            el.type === 'decision' ? 'bg-yellow-200' : 
            'bg-red-200'}`
          }
        >
          {el.text}
        </div>
      ))}
      <svg className="flowchart-connections">
        {connections.map((conn, index) => (
          <line
            key={index}
            x1={10} // ダミーの座標
            y1={10} // ダミーの座標
            x2={100} // ダミーの座標
            y2={100} // ダミーの座標
            stroke="black"
          />
        ))}
      </svg>
    </div>
  );
};

export default Flowchart;
