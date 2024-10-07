// components/BudgetForm.tsx

import React from 'react';

interface BusinessTask {
  code: string;
  name: string;
  selected: boolean;
}

interface BudgetFormProps {
  fiscalYear: string;
  groupCode: string;
  groupName: string;
  tasks: BusinessTask[];
  onChangeTaskSelection: (code: string) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear,
  groupCode,
  groupName,
  tasks,
  onChangeTaskSelection,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">決算統計事業情報設定</h2>
      
      <div className="mb-6">
        <label className="block mb-2">決算統計処理年度</label>
        <div className="mb-4">
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="border p-2 rounded w-full"
          />
        </div>

        <label className="block mb-2">団体情報</label>
        <div className="flex mb-4">
          <div className="mr-4">
            <label>団体コード</label>
            <input
              type="text"
              value={groupCode}
              readOnly
              className="border p-2 rounded"
            />
          </div>
          <div>
            <label>団体名</label>
            <input
              type="text"
              value={groupName}
              readOnly
              className="border p-2 rounded"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block mb-2">対象事業情報</label>
        <table className="table-auto w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">選択</th>
              <th className="px-4 py-2">業種・事業</th>
              <th className="px-4 py-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.code}>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={task.selected}
                    onChange={() => onChangeTaskSelection(task.code)}
                  />
                </td>
                <td className="border px-4 py-2">{task.code}</td>
                <td className="border px-4 py-2">{task.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetForm;
```

```tsx
// pages/index.tsx

import React, { useState } from 'react';
import BudgetForm from '../components/BudgetForm';

const initialTasks = [
  { code: '010', name: '水道事業・簡易水道事業', selected: false },
  { code: '020', name: '工業用水道事業', selected: false },
  { code: '060', name: '病院事業', selected: true },
  // ... other tasks
];

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskSelectionChange = (code: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.code === code
          ? { ...task, selected: !task.selected }
          : task
      )
    );
  };

  return (
    <div className="container mx-auto">
      <BudgetForm
        fiscalYear="令和002年度"
        groupCode="123456"
        groupName="行政市"
        tasks={tasks}
        onChangeTaskSelection={handleTaskSelectionChange}
      />
    </div>
  );
};

export default HomePage;
```

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# Install dependencies
npm install tailwindcss
npx tailwindcss init
```

```json
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```