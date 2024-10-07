import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  active?: boolean;
};

type SidebarProps = {
  buttons: ButtonProps[];
};

const Sidebar: React.FC<SidebarProps> = ({ buttons }) => {
  return (
    <div className="flex flex-col bg-gray-200 p-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`p-2 my-1 text-left ${
            button.active ? 'bg-orange-300' : 'bg-white'
          } hover:bg-gray-300`}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

type TabProps = {
  text: string;
  onClick: () => void;
  active?: boolean;
};

type TabbarProps = {
  tabs: TabProps[];
};

const Tabbar: React.FC<TabbarProps> = ({ tabs }) => {
  return (
    <div className="flex bg-gray-300 p-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={tab.onClick}
          className={`px-4 py-2 mx-1 ${
            tab.active ? 'bg-blue-500 text-white' : 'bg-white'
          } hover:bg-gray-400`}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

const MainComponent: React.FC = () => {
  const sidebarButtons = [
    { text: '業者管理', onClick: () => console.log('業者管理 clicked'), active: false },
    { text: '人札管理', onClick: () => console.log('人札管理 clicked'), active: false },
    { text: '契約事務', onClick: () => console.log('契約事務 clicked'), active: false },
    { text: 'CSV連携', onClick: () => console.log('CSV連携 clicked'), active: true },
    // Add more buttons as necessary
  ];

  const topTabs = [
    { text: 'メイン', onClick: () => console.log('メイン clicked'), active: false },
    { text: '契約事務', onClick: () => console.log('契約事務 clicked'), active: true },
    { text: 'セットアップ', onClick: () => console.log('セットアップ clicked'), active: false },
    // Add more tabs as necessary
  ];

  return (
    <div className="flex flex-row h-screen">
      <Sidebar buttons={sidebarButtons} />
      <div className="flex flex-col flex-grow">
        <Tabbar tabs={topTabs} />
        {/* Content Area */}
        <div className="flex-grow p-5 bg-white">
          <h1 className="text-2xl font-bold mb-4">契約事務</h1>
          <div className="border-t-2 border-b-2 py-4">
            {/* Dynamic Content Based on Selection */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
```