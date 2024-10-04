```tsx
// Import necessary modules from Next.js and React
import React from 'react';

// Define the type for the component props
type DashboardButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

// A re-usable button component with Tailwind CSS
const DashboardButton: React.FC<DashboardButtonProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 m-1 text-sm border rounded-md ${
        active ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
      } hover:bg-blue-200`}
    >
      {label}
    </button>
  );
};

// Define the type for the dashboard component props
type DashboardProps = {
  buttons: { label: string; onClick: () => void }[];
  activeButtonIndex?: number;
};

// Dashboard component that uses DashboardButton component
const Dashboard: React.FC<DashboardProps> = ({ buttons, activeButtonIndex }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">管理システムダッシュボード</h2>
      <div className="flex flex-wrap">
        {buttons.map((button, index) => (
          <DashboardButton
            key={index}
            label={button.label}
            onClick={button.onClick}
            active={activeButtonIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
```