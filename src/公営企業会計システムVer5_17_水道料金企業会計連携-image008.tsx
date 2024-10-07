import React from 'react';

// Type definitions for the component props
type MainMenuProps = {
  title: string;
  announcements: string;
  baseButtons: {
    execute: string[];
    budget: string[];
    settlement: string[];
  };
  optionsButtons: string[];
  maintenanceButtonLabel: string;
};

// MainMenu Component
const MainMenu: React.FC<MainMenuProps> = ({
  title,
  announcements,
  baseButtons,
  optionsButtons,
  maintenanceButtonLabel,
}) => {
  return (
    <div className="bg-white p-4 max-w-4xl mx-auto border">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">ログアウト</button>
      </div>

      {/* Announcements */}
      <div className="mb-6">
        <p className="text-sm">{announcements}</p>
      </div>

      {/* Base Buttons */}
      <div className="mb-4 flex space-x-4">
        <div>
          <h2 className="font-bold mb-2">base</h2>
          <div className="flex space-x-2">
            <section>
              <h3 className="font-bold">執行</h3>
              <div className="flex flex-col space-y-1">
                {baseButtons.execute.map((label, index) => (
                  <button key={index} className="bg-gray-200 rounded px-2 py-1">
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-bold">予算</h3>
              <div className="flex flex-col space-y-1">
                {baseButtons.budget.map((label, index) => (
                  <button key={index} className="bg-gray-200 rounded px-2 py-1">
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-bold">決算</h3>
              <div className="flex flex-col space-y-1">
                {baseButtons.settlement.map((label, index) => (
                  <button key={index} className="bg-gray-200 rounded px-2 py-1">
                    {label}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
        
        {/* Maintenance Button */}
        <div className="flex-1">
          <h3 className="font-bold">maintenance</h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded">{maintenanceButtonLabel}</button>
        </div>
      </div>

      {/* Options Buttons */}
      <div className="flex space-x-2">
        <h2 className="font-bold">options</h2>
        <div className="flex flex-wrap">
          {optionsButtons.map((label, index) => (
            <button key={index} className="bg-gray-200 rounded px-3 py-1 m-1">
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
```