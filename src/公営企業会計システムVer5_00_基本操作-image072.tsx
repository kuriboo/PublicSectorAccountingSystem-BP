// components/Menu.tsx

import React from 'react';

type Button = {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'highlight';
};

type MenuProps = {
  title: string;
  buttons: Button[];
};

const Menu: React.FC<MenuProps> = ({ title, buttons }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b">
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
      <div className="p-6 space-y-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md 
              ${button.variant === 'highlight' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const buttons = [
    { label: '実績', variant: "default", onClick: () => alert('実績 clicked') },
    { label: '予算事務所', variant: "default", onClick: () => alert('予算事務所 clicked') },
    { label: '決算', variant: "default", onClick: () => alert('決算 clicked') },
    { label: 'セットアップ', onClick: () => alert('セットアップ clicked'), variant: 'highlight' },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <Menu title="メインメニュー" buttons={buttons.map(button => ({ 
        ...button, 
        variant: button.variant as "default" | "highlight" // ここで型を明示的に指定
      }))} />
    </div>
  );
};

export default HomePage;
