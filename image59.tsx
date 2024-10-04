import React from 'react';

// Props interface for the Button component
interface ButtonProps {
  label: string;
  onClick: () => void;
  customStyles?: string;
}

// Button component
const Button: React.FC<ButtonProps> = ({ label, onClick, customStyles }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${customStyles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Props interface for the Sidebar component
interface SidebarProps {
  items: { label: string; onClick: () => void }[];
}

// Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="w-60 bg-gray-200 p-4 space-y-2">
      {items.map((item, index) => (
        <Button key={index} label={item.label} onClick={item.onClick} />
      ))}
    </div>
  );
};

// Props interface for the Dashboard component
interface DashboardProps {
  title: string;
  sidebarItems: { label: string; onClick: () => void }[];
}

// Dashboard component
const Dashboard: React.FC<DashboardProps> = ({ title, sidebarItems }) => {
  return (
    <div className="flex">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {/* Main content area */}
      </div>
    </div>
  );
};

export default Dashboard;