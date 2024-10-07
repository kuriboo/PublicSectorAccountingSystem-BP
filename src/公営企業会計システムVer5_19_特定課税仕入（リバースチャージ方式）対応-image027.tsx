import React from 'react';

// TypeScriptの型定義
type MenuItem = {
  label: string;
  link: string;
};

type SubMenuItem = {
  label: string;
  link: string;
};

type SidebarProps = {
  menuItems: MenuItem[];
  subMenuItems: SubMenuItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems, subMenuItems }) => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.link}
              className="block p-2 bg-white rounded hover:bg-blue-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-2 bg-white rounded">
        {subMenuItems.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="flex-grow">
              <a href={item.link} className="text-sm text-blue-500 hover:underline">
                {item.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
