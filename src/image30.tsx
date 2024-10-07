// imports
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, isActive }) => (
  <button
    className={`px-4 py-2 mb-2 text-white text-left rounded ${
      isActive ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

type MenuProps = {
  buttons: { label: string; isActive: boolean; onClick: () => void }[];
};

const Menu: React.FC<MenuProps> = ({ buttons }) => (
  <div className="w-1/4 p-4 bg-white border-r">
    {buttons.map((button, index) => (
      <Button
        key={index}
        label={button.label}
        onClick={button.onClick}
        isActive={button.isActive}
      />
    ))}
  </div>
);

type HeaderProps = {
  tabs: string[];
  activeTab: number;
};

const Header: React.FC<HeaderProps> = ({ tabs, activeTab }) => (
  <div className="flex gap-4 p-2 bg-blue-700 text-white">
    {tabs.map((tab, index) => (
      <div
        key={index}
        className={`cursor-pointer ${
          activeTab === index ? 'underline' : ''
        }`}
      >
        {tab}
      </div>
    ))}
  </div>
);

type MainContentProps = {
  title: string;
};

const MainContent: React.FC<MainContentProps> = ({ title }) => (
  <div className="flex-1 p-6 bg-gray-100">
    <h1 className="text-lg font-bold">{title}</h1>
    {/* Content goes here */}
  </div>
);

type AppProps = {
  headerTabs: string[];
  menuButtons: { label: string; isActive: boolean; onClick: () => void }[];
  mainTitle: string;
};

const App: React.FC<AppProps> = ({ headerTabs, menuButtons, mainTitle }) => (
  <div className="h-screen flex flex-col">
    <Header tabs={headerTabs} activeTab={0} />
    <div className="flex flex-1">
      <Menu buttons={menuButtons} />
      <MainContent title={mainTitle} />
    </div>
  </div>
);

export default App;